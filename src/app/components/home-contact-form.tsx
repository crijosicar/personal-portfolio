'use client';

import { ContactTopicType } from '@/entities/contact';
import { CREATE_CONTACT } from '@/queries/contacts/create-contact';
import { useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import {
    Button,
    Input,
    Label,
    Modal,
    ModalAction,
    ModalBody,
    ModalClose,
    ModalContent,
    ModalDescription,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    Textarea,
} from 'keep-react';
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
    const [createContact, { error: createContactError }] = useMutation<ContactSchema>(CREATE_CONTACT);

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

        await createContact({
            variables: {
                contact: {
                    ...data,
                    topic: ContactTopicType.SOFTWARE_DESIGN,
                },
            },
        });

        if (createContactError) {
            throw new Error('');
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
            <Modal>
                <ModalAction asChild>
                    <Button color="secondary" size="sm">
                        Modal
                    </Button>
                </ModalAction>
                <ModalBody>
                    <ModalContent>
                        <ModalClose className="absolute right-4 top-4" />
                        <ModalHeader>
                            <div className="border-success-100 bg-success-50 text-success-500 flex h-20 w-20 items-center justify-center rounded-full border dark:border-metal-800 dark:bg-metal-800">
                                <Hand size={28} color="#1B4DFF" />
                            </div>
                            <div className="space-y-1 text-center">
                                <ModalTitle>Talk to you soon!</ModalTitle>
                                <ModalDescription>
                                    Thanks for contacting me, Iapos;ll get back to you in a few.{' '}
                                </ModalDescription>
                            </div>
                        </ModalHeader>
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
                        <Label htmlFor="fullName" className={'text-tertiary text-2xl'}>
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
                        <p className="mt-2 text-xs italic text-red-500">{errors.fullName?.message}</p>
                    </div>
                    <div className="sm:col-span-4">
                        <Label htmlFor="email" className={'text-tertiary text-2xl'}>
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
                        <p className="mt-2 text-xs italic text-red-500">{errors.email?.message}</p>
                    </div>
                    <div className="sm:col-span-4">
                        <Label htmlFor="message" className={'text-tertiary text-2xl'}>
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
                        <p className="mt-2 text-xs italic text-red-500">{errors.message?.message}</p>
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
