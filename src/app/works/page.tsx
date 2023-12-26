import {get, pick} from "lodash";
import {getAllWorks} from "@/queries/works/get-all-works";
import Link from "next/link";
import React from "react";
import moment from "moment/moment";

export const revalidate = 5;

export const metadata = {
    title: 'Works | Cristians Software Engineers',
}

export default async function Page() {
    const works = await getAllWorks();

    return (
        <section  className={'flex justify-center'}>
            <div className={'container p-10'}>
                <h1 className="text-3xl font-bold">Works</h1>
                <ul>
                    {works.map((work: any) => {
                        const { company, title, endDate, startDate, slug } = pick(work, ['company', 'title', 'endDate', 'startDate', 'slug']);
                        const computedDate = `${moment(startDate).format('MMM YYYY')} - ${endDate ? moment(endDate).format('MMM YYYY') : 'Present'}`;
                        return <li key={get(work, 'slug')}>
                            <Link className={'flex text-primary hover:text-secondary'} href={`/works/${encodeURIComponent(slug)}`}>
                                <div className={'flex-1'}>
                                    <h2 className={'text-3xl font-semibold'}>{title}</h2>
                                </div>
                                <div className={'justify-self-end'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    );
}
