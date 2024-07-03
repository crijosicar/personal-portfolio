'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

type Inputs = {
    fullName: string;
    email: string;
    topic: string;
    message: string;
};

const contactValidationSchema = yup
    .object({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        message: yup.string().required(),
        topic: yup.string().required(),
    })
    .required();

export default function HireMeForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: yupResolver(contactValidationSchema),
    });

    const capitalizeFirstLetter = (string = '') => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={'my-4'}>
                <label htmlFor={'fullName'} className={'text-lg text-primary'}>
                    Full name
                </label>
                <div
                    className={`border-grey-dark border-b-2 border-l-0 border-r-0 border-t-0 ${errors.fullName?.message ? 'border-rose-600' : ''}`}
                >
                    <input
                        {...register('fullName')}
                        type={'text'}
                        className={'w-full border-none bg-transparent outline-none'}
                    />
                </div>
                <p className={'normal-case text-red-700'}>{capitalizeFirstLetter(errors.fullName?.message)}</p>
            </div>
            <div className={'my-4'}>
                <label htmlFor={'email'} className={'text-lg text-primary'}>
                    Your email
                </label>
                <div
                    className={`border-grey-dark border-b-2 border-l-0 border-r-0 border-t-0 ${errors.email?.message ? 'border-rose-600' : ''}`}
                >
                    <input
                        {...register('email')}
                        type={'text'}
                        className={'w-full border-none bg-transparent outline-none'}
                    />
                </div>
                <p className={'normal-case text-red-700'}>{capitalizeFirstLetter(errors.email?.message)}</p>
            </div>
            <div className={'my-4'}>
                <label htmlFor={'topic'} className={'text-lg text-primary'}>
                    I need help with
                </label>
                <div
                    className={`border-grey-dark border-b-2 border-l-0 border-r-0 border-t-0 ${errors.topic?.message ? 'border-rose-600' : ''}`}
                >
                    <select {...register('topic')} className={'w-full border-none bg-transparent outline-none'}>
                        <option>Options...</option>
                        <option value={'software-design'}>Software Design</option>
                        <option value={'applications-development'}>Applications Development</option>
                        <option value={'wordpress-development'}>Wordpress Development</option>
                    </select>
                </div>
                <p className={'normal-case text-red-700'}>{capitalizeFirstLetter(errors.topic?.message)}</p>
            </div>
            <div className={'my-4'}>
                <label htmlFor={'message'} className={'text-lg text-primary'}>
                    Message
                </label>
                <div
                    className={`border-grey-dark border-b-2 border-l-0 border-r-0 border-t-0 ${errors.message?.message ? 'border-rose-600' : ''}`}
                >
                    <textarea
                        {...register('message')}
                        rows={4}
                        cols={50}
                        className={'w-full border-none bg-transparent outline-none'}
                    ></textarea>
                </div>
                <p className={'normal-case text-red-700'}>{capitalizeFirstLetter(errors.message?.message)}</p>
            </div>
            <button type="submit" className={'my-2 text-primary hover:text-secondary dark:text-white'}>
                <div className="flex items-center justify-center gap-1">
                    <h1 className={'text-bold text-2xl'}>Send</h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-8 w-8"
                    >
                        <path
                            strokeLinecap={'round'}
                            strokeLinejoin={'round'}
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                </div>
            </button>
        </form>
    );
}
