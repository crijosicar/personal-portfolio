import React from "react";
import Breadcrumbs from "@/components/breadcrumbs";
import {get, isEmpty} from "lodash";
import {getWorkBySlug} from "@/queries/works/get-work-by-slug";
import {BaseLayoutPageProps} from "@/entities/base-layout";

export default async function WorkLayout({children, params}: BaseLayoutPageProps) {
    const workSlug = get(params, 'slug', '') as string;

    const items =  [
        {
            name: 'Works',
            slug: 'works',
            path: '/',
        },
    ];

    if(!isEmpty(workSlug)) {
        const work = await getWorkBySlug(workSlug);

        items.push({ name: get(work, 'title'), slug: workSlug, path: `/works/` })
    }

    return (
        <div>
            <div className={'container px-20'}>
                <Breadcrumbs items={items} />
            </div>
            {children}
        </div>
    );
}
