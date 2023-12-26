import {Metadata} from 'next';
import {getWorkBySlug} from "@/queries/works/get-work-by-slug";
import {getAllWorks} from "@/queries/works/get-all-works";
import {get, isEmpty, map, pick} from "lodash";
import {notFound} from "next/navigation";
import Link from "next/link";
import React from "react";
import {PageBaseProps} from "../../../src/entities/page.entity";

export const revalidate = 5;

export async function generateStaticParams() {
    const works = await getAllWorks();

    return map(works, (work: any) => ({
        slug: get(work, 'slug'),
    }));
}

export async function generateMetadata({params}: PageBaseProps): Promise<Metadata> {
    const slug = get(params, 'slug');

    if (isEmpty(slug)) {
        return {};
    }

    const work = await getWorkBySlug(slug);
    const title = `${get(work, 'company')} | Cristian's Software Engineers`;
    const description = get(work, 'description');

    return {
        title,
        description,
        openGraph: {
            title,
            description,
        },
    };
}

export default async function Page({params}: PageBaseProps): Promise<JSX.Element> {
    const {slug} = params;
    const work = await getWorkBySlug(slug);

    if (isEmpty(work)) {
        notFound();
    }

    return (
        <section className={'flex justify-center'}>
            <div className={'container p-10'}>
                <div className={'flex flex-col md:flex-row'}>
                    <h1 className="text-3xl text-primary font-bold">{`${get(work, 'title')} @`}</h1>
                    <h1 className="ml-1 text-3xl text-tertiary">{get(work, 'company')}</h1>
                </div>
                <p className="text-gray-600">{get(work, 'description', 'TBD')}</p>
                <p className="text-gray-600">{get(work, 'location')}</p>
                <p className="text-gray-600">{`${get(work, 'startDate')} - ${get(work, 'endDate', 'Current')}`}</p>
                <h2 className={'text-2xl text-tertiary font-bold'}>Projects</h2>
                <div className={'flex py-10'}>
                    <div className={'flex flex-col md:flex-row gap-10'}>
                        {map(get(work, 'projects'), (projectData, index) => {
                            const {name: title, slug, description} = pick(projectData, ['slug', 'name', 'description']);
                            console.log({projectData});
                            return (
                                <Link className={`flex-1 bg-tertiary text-white max-w-sm hover:animate-pulse`}
                                      href={`/projects/${slug}`} key={index}>
                                    <div className={'relative h-5 w-full'}>
                                        <div className={'absolute top-2.5 right-2.5'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={'p-8 h-[calc(40vh)] flex flex-col'}>
                                        <div className={'flex-1'}>
                                            <h2 className={'text-2xl font-semibold'}>{title}</h2>
                                            <p className={'text-xl'}>{description}</p>
                                        </div>
                                        <div className={'flex-auto flex items-center'}>
                                            <ul>
                                                <li className={'text-1xl'}>Led ...</li>
                                                <li className={'text-1xl'}>Increased ...</li>
                                                <li className={'text-1xl'}>Improved ...</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
