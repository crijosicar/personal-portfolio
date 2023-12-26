'use client';

import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
    name: string,
    email: string,
    message: string,
};

const contactValidationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
}).required();

export default function ContactForm() {
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>(
        {
            resolver: yupResolver(contactValidationSchema)
        }
    );

    const capitalizeFirstLetter = (string = "") => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={'my-4'}>
                <label htmlFor={'name'} className={'text-white text-lg'}>Name</label>
                <div className={'border-b-2 border-t-0 border-l-0 border-r-0 border-grey-dark'}>
                    <input {...register("name")} type={'text'}
                           className={'border-none w-full bg-transparent outline-none text-primary'}/>
                </div>
                <p className={'normal-case text-red-700'}>{capitalizeFirstLetter(errors.name?.message)}</p>
            </div>
            <div className={'my-4'}>
                <label htmlFor={'email'} className={'text-white text-lg'}>E-Mail</label>
                <div className={'border-b-2 border-t-0 border-l-0 border-r-0 border-grey-dark'}>
                    <input {...register("email")} type={'text'}
                           className={'border-none w-full bg-transparent outline-none text-primary'}/>
                </div>
                <p className={'normal-case text-red-700'}>{capitalizeFirstLetter(errors.email?.message)}</p>
            </div>
            <div className={'my-4'}>
                <label htmlFor={'message'} className={'text-white text-lg'}>Message</label>
                <div className={'border-b-2 border-t-0 border-l-0 border-r-0 border-grey-dark'}>
                    <textarea {...register("message")} rows={4} cols={50}
                              className={'border-none w-full bg-transparent outline-none text-primary'}></textarea>
                </div>
                <p className={'normal-case text-red-700'}>{capitalizeFirstLetter(errors.message?.message)}</p>
            </div>
            <button type="submit" className={'text-primary dark:text-white hover:text-white my-2'}>
                <div className="flex items-center justify-center gap-1">
                    <p className={'text-2xl'}>Send</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                         className="w-8 h-8">
                        <path strokeLinecap={'round'} strokeLinejoin={'round'}
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
                    </svg>
                </div>
            </button>
        </form>
    );
}


