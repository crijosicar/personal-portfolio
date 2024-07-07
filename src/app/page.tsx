import { Work } from '@/app/entities/work';
import { getAllWorks } from '@/app/queries/works/get-all-works';
import { map, pick } from 'lodash';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import HomeContactForm from '@/app/components/home-contact-form';

export const metadata = {
    title: "Cristian's Software Engineers",
};

export const revalidate = 3600;

export default async function Page() {
    const works: Work[] = await getAllWorks({ take: 3 });
    const linkedInUrl = 'https://www.linkedin.com/in/crijosicar/';
    const githubUrl = 'https://github.com/crijosicar';
    const whatsAppUrl = 'https://api.whatsapp.com/send?phone=15482551056';
    const heroImageUrl = '/images/hero-profile.png';
    const resumeUrl = '#';

    return (
        <div className={'h-full w-full'}>
            {/*HERO SECTION*/}
            <section id={'hero'} className={'w-full'}>
                <div className={'mx-auto max-w-6xl'}>
                    <div className={'flex flex-col items-center justify-center gap-1 px-20 md:flex-row md:px-10'}>
                        <div className={'flex flex-col md:basis-2/3'}>
                            <div>
                                <p className={'text-center text-5xl text-primary dark:text-white md:text-right'}>
                                    Hello, I&apos;m <label className={'font-bold'}>Cristian</label>, an enthusiastic
                                    <label className={'ml-2 max-w-prose text-5xl font-semibold text-tertiary'}>
                                        Software Engineer
                                    </label>
                                </p>
                            </div>
                            <div className={'my-3'}>
                                <p className={'text-center text-2xl text-gray-700 dark:text-white md:text-right'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet eleifend
                                    euismod.
                                </p>
                            </div>
                            <div className={'flex justify-center gap-5 md:justify-end'}>
                                <div>
                                    <Link href={linkedInUrl} target={'_blank'} className={'mx-0.5 flex-1'}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            className="h-7 w-7 font-semibold text-tertiary hover:text-secondary"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                                <div>
                                    <Link href={githubUrl} target={'_blank'} className={'mx-0.5 flex-1'}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 496 512"
                                            className="h-7 w-7 font-semibold text-tertiary hover:text-secondary"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                                <div>
                                    <Link href={whatsAppUrl} target={'_blank'} className={'mx-0.5 flex-1'}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            className="h-7 w-7 font-semibold text-tertiary hover:text-secondary"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={'md:basis-1/3'}>
                            <Image
                                className={'content-center'}
                                width={600}
                                height={600}
                                src={heroImageUrl}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/*WHAT DO I DO SECTION*/}
            <section id={'what-do-i-do'} className={'w-full'}>
                <div className={'mx-auto max-w-6xl'}>
                    <div className={'container mx-auto px-5 py-5'}>
                        <h1 className={'text-5xl font-semibold text-primary dark:text-white'}>How can I help?</h1>
                        <p className={'mt-2 text-2xl'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet eleifend euismod.
                        </p>
                    </div>
                    <div className={'flex w-full items-center justify-center p-10'}>
                        <div className={'flex flex-col gap-5 md:flex-row'}>
                            <Link
                                className={`max-w-md flex-1 bg-tertiary text-white hover:animate-pulse`}
                                href={`/services/web-development`}
                            >
                                <div className={'relative h-10 w-full'}>
                                    <div className={'absolute right-2.5 top-2.5'}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="h-10 w-10"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className={'flex h-[calc(35vh)] flex-col p-8'}>
                                    <div className={'flex-auto'}>
                                        <h2 className={'text-3xl font-semibold'}>{'Wordpress Development'}</h2>
                                    </div>
                                    <div className={'my-3 flex flex-auto items-center hover:animate-pulse'}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor"
                                            className="h-full w-24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                                            />
                                        </svg>
                                    </div>
                                    <div className={'flex flex-auto items-center text-wrap'}>
                                        <p className={'text-2xl'}>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </Link>
                            <Link
                                className={`max-w-md flex-1 bg-secondary text-white hover:animate-pulse`}
                                href={`/services/fullstack-development`}
                            >
                                <div className={'relative h-10 w-full'}>
                                    <div className={'absolute right-2.5 top-2.5'}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="h-10 w-10"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className={'flex h-[calc(35vh)] flex-col p-8'}>
                                    <div className={'flex-auto'}>
                                        <h2 className={'text-3xl font-semibold'}>{'Fullstack Development'}</h2>
                                    </div>
                                    <div className={'my-3 flex flex-auto items-center hover:animate-pulse'}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor"
                                            className="h-full w-24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                                            />
                                        </svg>
                                    </div>
                                    <div className={'flex flex-auto items-center text-wrap'}>
                                        <p className={'text-2xl'}>{'Lorem ipsum dolor sit amet.'}</p>
                                    </div>
                                </div>
                            </Link>
                            <Link
                                className={`max-w-md flex-1 bg-primary text-white hover:animate-pulse`}
                                href={`/services/software-engineering`}
                            >
                                <div className={'relative h-10 w-full'}>
                                    <div className={'absolute right-2.5 top-2.5'}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="h-10 w-10"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className={'flex h-[calc(35vh)] flex-col p-8'}>
                                    <div className={'flex-auto'}>
                                        <h2 className={'text-3xl font-semibold'}>{'Software Engineering'}</h2>
                                    </div>
                                    <div className={'my-3 flex flex-auto items-center hover:animate-pulse'}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor"
                                            className="h-full w-24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                                            />
                                        </svg>
                                    </div>
                                    <div className={'flex flex-auto items-center text-wrap'}>
                                        <p className={'text-2xl'}>{'Lorem ipsum dolor sit amet.'}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/*WORKS SECTION*/}
            <section id={'works'} className={'w-full'}>
                <div className={'mx-auto max-w-6xl'}>
                    <div className={'container mx-auto px-5 py-5'}>
                        <h1 className={'text-5xl font-semibold text-primary dark:text-white'}>Works</h1>
                        <p className={'mt-2 text-2xl'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet eleifend euismod.
                        </p>
                    </div>
                    <div className={'flex items-center justify-center p-10'}>
                        <div className={'flex flex-col gap-10 md:flex-row'}>
                            {map(works, (work, index) => {
                                const { company, title, endDate, startDate, slug } = pick(work, [
                                    'company',
                                    'title',
                                    'endDate',
                                    'startDate',
                                    'slug',
                                ]);
                                const computedDate = `${moment(startDate).format('MMM YYYY')} - ${endDate ? moment(endDate).format('MMM YYYY') : 'Present'}`;

                                return (
                                    <div className={'max-w-md flex-1'} key={index}>
                                        <div className={'p-5'}>
                                            <Link
                                                className={'flex text-primary hover:text-secondary'}
                                                href={`/works/${encodeURIComponent(slug)}`}
                                            >
                                                <div className={'flex-1'}>
                                                    <h2 className={'text-3xl font-semibold'}>{title}</h2>
                                                </div>
                                                <div className={'justify-self-end'}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="h-8 w-8"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                                        />
                                                    </svg>
                                                </div>
                                            </Link>
                                            <p className={'my-2 text-2xl text-secondary'}>{company}</p>
                                            <p className={'text-2xl text-fourth'}>{computedDate}.</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            {/*PORTFOLIO SECTION*/}
            <section id={'download-portfolio'} className={'w-full bg-secondary'}>
                <div className={'mx-auto max-w-6xl'}>
                    <div className={'flex items-center justify-center p-10'}>
                        <div className={'flex flex-col md:flex-row'}>
                            <div>
                                <Link href={resumeUrl} target="_blank" download>
                                    <h1 className={'text-5xl font-semibold text-white hover:animate-pulse'}>
                                        <div className="flex items-center justify-center">
                                            <p className={'px-2'}>Obtain Cristian&apos;s Resume</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="h-24 w-24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                                                />
                                            </svg>
                                        </div>
                                    </h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*HAVE A PROJECT SECTION*/}
            <section id={'have-a-project'} className={'w-full'}>
                <div className={'flex flex-col items-center justify-center gap-1 px-20 py-10 md:flex-row md:px-10'}>
                    <div className={'container md:flex-1'}>
                        <div className={'md:pl-10'}>
                            <div className={'flex items-center gap-1'}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-10 w-10 font-semibold text-primary dark:text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                                    />
                                </svg>
                                <h1 className={'text-5xl font-semibold text-primary dark:text-white'}>
                                    Have a Project?
                                </h1>
                            </div>
                            <div className={'flex items-center'}>
                                <p className={'my-2 pr-1 text-2xl text-tertiary hover:text-secondary dark:text-white'}>
                                    Let&apos;s talk about it.
                                </p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-7 w-7 text-tertiary hover:text-secondary dark:text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={'container md:flex-1 md:px-10'}>
                        <HomeContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
