'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import { Button, Input, Label, Modal, ModalBody, ModalContent, ModalFooter, ModalIcon, Textarea } from 'keep-react';
import { Hand } from 'phosphor-react';
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

    console.log('HomeContactForm', { errors });

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
                                <Input
                                    name={name}
                                    className={classNames({
                                        'mx-1 rounded-none': true,
                                        'border-2 border-rose-500': !!errors.fullName,
                                    })}
                                    placeholder="Your Name"
                                    onBlur={onBlur}
                                    onChange={(e) => {
                                        onChangeFullName(e.target.value);
                                    }}
                                    value={value}
                                    ref={(e) => {
                                        ref(e);
                                        fullNameRef.current = e;
                                    }}
                                />
                            )}
                        />
                        <p className="text-xs italic text-red-500">{errors.fullName?.message}</p>
                    </div>
                    <div className="sm:col-span-4">
                        <Label htmlFor="email" className={'text-2xl text-tertiary'}>
                            Email
                        </Label>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field: { onChange: onChangeEmail, onBlur, value, ref, name } }) => (
                                <Input
                                    name={name}
                                    className={classNames({
                                        'mx-1 rounded-none': true,
                                        'border-2 border-rose-500': !!errors.email,
                                    })}
                                    placeholder="your.email@mail.com"
                                    onBlur={onBlur}
                                    onChange={(e) => {
                                        onChangeEmail(e.target.value);
                                    }}
                                    value={value}
                                    ref={(e) => {
                                        ref(e);
                                        emailRef.current = e;
                                    }}
                                />
                            )}
                        />
                        <p className="text-xs italic text-red-500">{errors.email?.message}</p>
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
                                    className={classNames({
                                        'mx-1 rounded-none': true,
                                        'border-2 border-rose-500': !!errors.message,
                                    })}
                                    placeholder="Tell me about your idea..."
                                    rows={3}
                                    onBlur={onBlur}
                                    onChange={(e) => {
                                        onChangeMessage(e.target.value);
                                    }}
                                    value={value}
                                    ref={ref}
                                />
                            )}
                        />
                        <p className="text-xs italic text-red-500">{errors.message?.message}</p>
                    </div>
                    <Button
                        size="xl"
                        type="submit"
                        color="primary"
                        className="mx-1 rounded-none border border-[#142966] text-[#142966] hover:bg-secondary hover:text-white dark:text-white dark:hover:text-gray-200"
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
