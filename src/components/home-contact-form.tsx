'use client';

import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Button, Label, Modal, Textarea, TextInput} from "keep-react";
import {Envelope, Hand, User, WarningCircle} from "phosphor-react";
import React, {useRef, useState} from "react";

type HomeContactForm = {
    fullName: string,
    email: string,
    message: string,
};

const contactValidationSchema = yup.object().shape({
    fullName: yup.string().label('Name').required(),
    email: yup.string().label('Email').email().required(),
    message: yup.string().label('Message').required(),
}).required();

export default function HomeContactForm() {
    const refHomeContactFrom = useRef();
    const [showModal, setShowModal] = useState(false);

    const {reset, control, handleSubmit, formState: { errors }} = useForm<HomeContactForm>(
        {
            resolver: yupResolver(contactValidationSchema),
            defaultValues: {
                fullName: '',
                email: '',
                message: '',
            },
        }
    );

    const onSubmit: SubmitHandler<HomeContactForm> = async (data: HomeContactForm) => {
        const response = await fetch('/api/contacts', {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        const parsedResponse = await response.json();

        console.log("onSubmit => ", { parsedResponse });

        // if(response.status === 200) {
        //     setShowModal(true);
        //     reset();
        // }
    };

    const closeModal = () => {
        setShowModal(false);
        console.log('closeModal');
    };

    return (
        <div>
            <Modal
                icon={<Hand size={28} color="#1B4DFF"/>}
                size="md"
                show={showModal}>
                <Modal.Header>Talk to you soon!</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-body-4 leading-relaxed text-metal-500">
                            Thanks for contacting me, I'll get back to you in a few.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className="border border-[#142966] rounded-none hover:bg-secondary hover:text-white"
                        onClick={closeModal}>
                        Sounds good
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="ml-1 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"/>
                        </svg>
                    </Button>
                </Modal.Footer>
            </Modal>
            <form onSubmit={handleSubmit(onSubmit)} ref={refHomeContactFrom}>
                <div className="space-y-5">
                    <div className="sm:col-span-4">
                        <Label htmlFor="#fullName" value="Name" className={'text-2xl text-tertiary'}/>
                        <Controller
                            name="fullName"
                            control={control}
                            render={({field: {onChange: onChangeFullName, onBlur, value, ref}}) => (
                                <TextInput
                                    id="fullName"
                                    name="fullName"
                                    className={'mt-1 rounded-none'}
                                    placeholder="Your Name"
                                    color={errors?.fullName ? "error" : "secondary"}
                                    addon={<User size={20} color="#5E718D"/>}
                                    addonPosition="left"
                                    border={false}
                                    sizing="md"
                                    helperText={errors?.fullName ? errors.fullName.message : ''}
                                    icon={errors?.fullName ? <WarningCircle size={20} color="#FF574D"/> : null}
                                    onBlur={onBlur}
                                    handleOnChange={(e) => {
                                        onChangeFullName(e.target.value);
                                    }}
                                    value={value}
                                    ref={ref}
                                />
                            )}
                        />
                    </div>
                    <div className="sm:col-span-4">
                        <Label htmlFor="#email" value="Email" className={'text-2xl text-tertiary'}/>
                        <Controller
                            name="email"
                            control={control}
                            render={({field: {onChange: onChangeEmail, onBlur, value, ref}}) => (
                                <TextInput
                                    id="email"
                                    name="email"
                                    className={'mt-1 rounded-none'}
                                    placeholder="your.email@mail.com"
                                    color={errors?.email ? "error" : "secondary"}
                                    addon={<Envelope size={20} color="#5E718D"/>}
                                    addonPosition="left"
                                    border={false}
                                    sizing="md"
                                    helperText={errors?.email ? errors.email.message : ''}
                                    icon={errors?.email ? <WarningCircle size={20} color="#FF574D"/> : null}
                                    onBlur={onBlur}
                                    handleOnChange={(e) => {
                                        onChangeEmail(e.target.value);
                                    }}
                                    value={value}
                                    ref={ref}
                                />
                            )}
                        />
                    </div>
                    <div className="sm:col-span-4">
                        <Label htmlFor="#message" value="Message" className={'text-2xl text-tertiary'}/>
                        <Controller
                            name="message"
                            control={control}
                            render={({field: {onChange: onChangeMessage, onBlur, value, ref}}) => (
                                <Textarea
                                    id="message"
                                    name="message"
                                    className={'mt-1 rounded-none'}
                                    placeholder="Leave a message..."
                                    color={errors?.message ? "error" : "info"}
                                    withBg={true}
                                    border={true}
                                    rows={4}
                                    helperText={errors?.message ? errors.message.message : ''}
                                    onBlur={onBlur}
                                    onChange={(e) => {
                                        onChangeMessage(e.target.value);
                                    }}
                                    value={value}
                                    ref={ref}
                                />
                            )}
                        />
                    </div>
                    <Button size="xl"
                            type="text"
                            onClick={() => {
                                refHomeContactFrom.current && refHomeContactFrom.current.dispatchEvent(
                                    new Event("submit", { cancelable: true, bubbles: true })
                                );
                            }}
                            color="info"
                            className="border border-[#142966] rounded-none hover:bg-secondary hover:text-white">
                        Send
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24"
                             strokeWidth="1.5"
                             stroke="currentColor"
                             className="ml-1 w-5 h-5">
                            <path strokeLinecap={'round'} strokeLinejoin={'round'}
                                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
                        </svg>
                    </Button>
                </div>
            </form>
        </div>
    );
}


