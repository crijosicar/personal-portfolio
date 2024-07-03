'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Label, Modal, TextInput, Textarea } from 'keep-react';
import { Envelope, Hand, User, WarningCircle } from 'phosphor-react';
import React, { useEffect, useRef, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

type HomeContactForm = {
    fullName: string;
    email: string;
    message: string;
};

const contactValidationSchema = yup
    .object()
    .shape({
        fullName: yup.string().label('Name').required(),
        email: yup.string().label('Email').email().required(),
        message: yup.string().label('Message').required(),
    })
    .required();

export default function HomeContactForm() {
    const refHomeContactFrom = useRef();
    const fullNameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const [showModal, setShowModal] = useState(false);
    const homeContactFormProps = {
        resolver: yupResolver(contactValidationSchema),
        defaultValues: { fullName: '', email: '', message: '' },
    };
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitSuccessful },
    } = useForm<HomeContactForm>(homeContactFormProps);

    useEffect(() => {
        if (isSubmitSuccessful) {
            resetFormFields();
        }
    }, [isSubmitSuccessful]);

    const onSubmit: SubmitHandler<HomeContactForm> = async (data: HomeContactForm): Promise<void> => {
        // Guard clause to validate form
        if (!isValid) return;

        const contactResponse = await fetch('/api/contacts', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (contactResponse.status !== 200) {
            const { errors } = await contactResponse.json();
            console.error({ errors });
            return;
        }

        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const fireSubmitContactFormEvent = () => {
        refHomeContactFrom.current &&
            refHomeContactFrom.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    };

    const resetFormFields = () => {
        fullNameRef.current!.value = '';
        emailRef.current!.value = '';
        reset();
    };

    return (
        <div>
            <Modal icon={<Hand size={28} color="#1B4DFF" />} size="md" show={showModal}>
                <Modal.Header>Talk to you soon!</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-body-4 leading-relaxed text-metal-500">
                            {"Thanks for contacting me, I'll get back to you in a few."}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className="rounded-none border border-[#142966] hover:bg-secondary hover:text-white"
                        onClick={closeModal}
                    >
                        Sounds good
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="ml-1 h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                            />
                        </svg>
                    </Button>
                </Modal.Footer>
            </Modal>
            <form onSubmit={handleSubmit(onSubmit)} ref={refHomeContactFrom}>
                <div className="space-y-5">
                    <div className="sm:col-span-4">
                        <Label htmlFor="#fullName" value="Name" className={'text-2xl text-tertiary'} />
                        <Controller
                            name="fullName"
                            control={control}
                            render={({ field: { onChange: onChangeFullName, onBlur, value, ref, name } }) => (
                                <TextInput
                                    id="fullName"
                                    name={name}
                                    className={'mt-1 rounded-none'}
                                    placeholder="Your Name"
                                    color={errors?.fullName ? 'error' : 'secondary'}
                                    addon={<User size={20} color="#5E718D" />}
                                    addonPosition="left"
                                    border={false}
                                    sizing="md"
                                    helperText={errors?.fullName ? errors.fullName.message : ''}
                                    icon={errors?.fullName ? <WarningCircle size={20} color="#FF574D" /> : null}
                                    onBlur={onBlur}
                                    handleOnChange={(e) => {
                                        onChangeFullName(e.target.value);
                                    }}
                                    value={value}
                                    ref={(e) => {
                                        ref(e);
                                        fullNameRef.current = e; // you can still assign to ref
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div className="sm:col-span-4">
                        <Label htmlFor="#email" value="Email" className={'text-2xl text-tertiary'} />
                        <Controller
                            name="email"
                            control={control}
                            render={({ field: { onChange: onChangeEmail, onBlur, value, ref, name } }) => (
                                <TextInput
                                    id="email"
                                    name={name}
                                    className={'mt-1 rounded-none'}
                                    placeholder="your.email@mail.com"
                                    color={errors?.email ? 'error' : 'secondary'}
                                    addon={<Envelope size={20} color="#5E718D" />}
                                    addonPosition="left"
                                    border={false}
                                    sizing="md"
                                    helperText={errors?.email ? errors.email.message : ''}
                                    icon={errors?.email ? <WarningCircle size={20} color="#FF574D" /> : null}
                                    onBlur={onBlur}
                                    handleOnChange={(e) => {
                                        onChangeEmail(e.target.value);
                                    }}
                                    value={value}
                                    ref={(e) => {
                                        ref(e);
                                        emailRef.current = e; // you can still assign to ref
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div className="sm:col-span-4">
                        <Label htmlFor="#message" value="Message" className={'text-2xl text-tertiary'} />
                        <Controller
                            name="message"
                            control={control}
                            render={({ field: { onChange: onChangeMessage, onBlur, value, ref, name } }) => (
                                <Textarea
                                    id="message"
                                    name={name}
                                    className={'mt-1 rounded-none'}
                                    placeholder="Leave a message..."
                                    color={errors?.message ? 'error' : 'info'}
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
                    <Button
                        size="xl"
                        type="text"
                        onClick={fireSubmitContactFormEvent}
                        color="info"
                        className="rounded-none border border-[#142966] hover:bg-secondary hover:text-white"
                    >
                        Send
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="ml-1 h-5 w-5"
                        >
                            <path
                                strokeLinecap={'round'}
                                strokeLinejoin={'round'}
                                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                        </svg>
                    </Button>
                </div>
            </form>
        </div>
    );
}
