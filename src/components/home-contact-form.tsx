'use client';

import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Button, Label, Textarea, TextInput} from "keep-react";
import {AirplaneTakeoff, Envelope, User, WarningCircle} from "phosphor-react";
import React, {useRef} from "react";

type HomeContactForm = {
    fullName: string,
    email: string,
    message: string,
};

const contactValidationSchema = yup.object({
    fullName: yup.string().label('Name').required(),
    email: yup.string().label('Email').email().required(),
    message: yup.string().label('Message').required(),
}).required();

export default function HomeContactForm() {
    const refHomeContactFrom = useRef();

    const {control, handleSubmit, trigger, formState: { errors }} = useForm<HomeContactForm>(
        {
            resolver: yupResolver(contactValidationSchema)
        }
    );

    const onSubmit: SubmitHandler<HomeContactForm> = (data) => {
        alert({  data  });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} ref={refHomeContactFrom}>
            <div className="space-y-5">
                <div className="sm:col-span-4">
                    <Label htmlFor="#fullName" value="Name"/>
                    <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                id="fullName"
                                name="fullName"
                                placeholder="Your Name"
                                color={errors?.fullName ? "error" : "secondary"}
                                addon={<User size={20} color="#5E718D"/>}
                                addonPosition="left"
                                border={false}
                                sizing="md"
                                helperText={errors?.fullName ? errors.fullName.message : ''}
                                icon={errors?.fullName ? <WarningCircle size={20} color="#FF574D"/> : null}
                                onBlur={onBlur}
                                handleOnChange={onChange}
                                value={value}
                            />
                        )}
                        name="fullName"
                    />
                </div>
                <div className="sm:col-span-4">
                    <Label htmlFor="#email" value="Email"/>
                    <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                id="email"
                                name="email"
                                placeholder="your.email@mail.com"
                                color={errors?.email ? "error" : "secondary"}
                                addon={<Envelope size={20} color="#5E718D"/>}
                                addonPosition="left"
                                border={false}
                                sizing="md"
                                helperText={errors?.email ? errors.email.message : ''}
                                icon={errors?.email ? <WarningCircle size={20} color="#FF574D"/> : null}
                                onBlur={onBlur}
                                handleOnChange={onChange}
                                value={value}
                            />
                        )}
                        name="email"
                    />
                </div>
                <div className="sm:col-span-4">
                    <Label htmlFor="#message" value="Message"/>
                    <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Leave a message..."
                                color={errors?.message ? "error" : "secondary"}
                                withBg={true}
                                border={false}
                                rows={4}
                                helperText={errors?.message ? errors.message.message : ''}
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                            />
                        )}
                        name="message"
                    />
                </div>
                <Button
                    type="outlinePrimary"
                    size="lg"
                    onClick={() => {
                        refHomeContactFrom?.current?.dispatchEvent(new Event('submit', {cancelable: true, bubbles: true}));
                    }}>
                    Send
                    <span className="pl-2">
                      <AirplaneTakeoff size={24}/>
                    </span>
                </Button>
            </div>
        </form>
    );
}


