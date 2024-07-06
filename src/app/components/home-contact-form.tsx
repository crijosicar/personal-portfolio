'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
    Button,
    Input,
    InputIcon,
    Label,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalIcon,
    Textarea,
} from 'keep-react';
import { Envelope, Hand, User, WarningCircle } from 'phosphor-react';
import React, { useEffect, useRef, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

const contactSchema = z.object({
    fullName: z.string(),
    email: z.string().email(),
    message: z.string(),
});

type ContactSchema = z.infer<typeof contactSchema>;

export default function HomeContactForm() {
    const fullNameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {
        reset,
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitSuccessful },
    } = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema),
        defaultValues: { fullName: '', email: '', message: '' },
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            resetFormFields();
        }
    }, [isSubmitSuccessful]);

    const onSubmit: SubmitHandler<ContactSchema> = async (data: ContactSchema): Promise<void> => {
        // Guard clause to validate form
        if (!isValid) return;

        const contactResponse = await fetch('/api/contacts', {
            method: 'POST',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (contactResponse.status !== 200) {
            await contactResponse.json();
            return;
        }

        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const resetFormFields = () => {
        fullNameRef.current!.value = '';
        emailRef.current!.value = '';
        reset();
    };

    return (
        <div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ModalBody className="flex w-[30rem] flex-col items-center p-6 lg:p-8">
                    <ModalIcon>
                        <Hand size={28} color="#1B4DFF" />
                    </ModalIcon>
                    <ModalContent>
                        <p>Talk to you soon!</p>
                        <div className="space-y-6">
                            <p className="text-body-4 leading-relaxed text-metal-500">
                                {"Thanks for contacting me, I'll get back to you in a few."}
                            </p>
                        </div>
                    </ModalContent>
                    <ModalFooter>
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
                    </ModalFooter>
                </ModalBody>
            </Modal>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-5">
                    <div className="sm:col-span-4">
                        <Label htmlFor="fullName" className={'text-2xl text-tertiary'}>
                            Name
                        </Label>
                        <Controller
                            name="fullName"
                            control={control}
                            render={({ field: { onChange: onChangeFullName, onBlur, value, ref, name } }) => (
                                <fieldset className="relative max-w-md">
                                    <Input
                                        name={name}
                                        className={'mt-1 rounded-none'}
                                        placeholder="Your Name"
                                        color={errors?.fullName ? 'error' : 'secondary'}
                                        onBlur={onBlur}
                                        onChange={(e) => {
                                            onChangeFullName(e.target.value);
                                        }}
                                        value={value}
                                        ref={(e) => {
                                            ref(e);
                                            fullNameRef.current = e; // you can still assign to ref
                                        }}
                                    />
                                    <InputIcon>
                                        {errors?.fullName ? (
                                            <WarningCircle size={20} color="#FF574D" />
                                        ) : (
                                            <User size={20} color="#5E718D" />
                                        )}
                                    </InputIcon>
                                </fieldset>
                            )}
                        />
                    </div>
                    <div className="sm:col-span-4">
                        <Label htmlFor="email" className={'text-2xl text-tertiary'}>
                            Email
                        </Label>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field: { onChange: onChangeEmail, onBlur, value, ref, name } }) => (
                                <fieldset className="relative max-w-md">
                                    <Input
                                        name={name}
                                        className={'mt-1 rounded-none'}
                                        placeholder="your.email@mail.com"
                                        color={errors?.email ? 'error' : 'secondary'}
                                        onBlur={onBlur}
                                        onChange={(e) => {
                                            onChangeEmail(e.target.value);
                                        }}
                                        value={value}
                                        ref={(e) => {
                                            ref(e);
                                            emailRef.current = e; // you can still assign to ref
                                        }}
                                    />
                                    <InputIcon>
                                        {errors?.email ? (
                                            <WarningCircle size={20} color="#FF574D" />
                                        ) : (
                                            <Envelope size={20} color="#5E718D" />
                                        )}
                                    </InputIcon>
                                </fieldset>
                            )}
                        />
                    </div>
                    <div className="sm:col-span-4">
                        <Label htmlFor="message" className={'text-2xl text-tertiary'}>
                            Message
                        </Label>
                        <Controller
                            name="message"
                            control={control}
                            render={({ field: { onChange: onChangeMessage, onBlur, value, ref, name } }) => (
                                <Textarea
                                    name={name}
                                    className={'mt-1 rounded-none'}
                                    placeholder="Leave a message..."
                                    color={errors?.message ? 'error' : 'info'}
                                    rows={4}
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
                        type="submit"
                        color="primary"
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
