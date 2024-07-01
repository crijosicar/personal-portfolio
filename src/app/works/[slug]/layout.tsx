'use client';

import { BaseLayoutProps } from '@/entities/base-layout';
import { Work } from '@/entities/work';
import { gql } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { useParams } from 'next/navigation';
import React, { useContext, useEffect } from 'react';

import { BreadCrumbsContext } from '@/components/breadcrumbs-wrapper';

const GET_WORK_TITLE_BY_SLUG = gql`
    query GetWorkBySlug($slug: String!) {
        work(where: { slug: $slug }) {
            title
        }
    }
`;

export default function WorkLayout({ children }: BaseLayoutProps) {
    const { slug } = useParams();
    const { setContext: setCrumbContext, setItemName: setCrumbName } = useContext(BreadCrumbsContext);
    const { data } = useSuspenseQuery<{ work: Work }>(GET_WORK_TITLE_BY_SLUG, { variables: { slug } });

    useEffect(() => {
        if (data) {
            const {
                work: { title },
            } = data;

            setCrumbContext!('works');
            setCrumbName!(title);
        }
    });

    return <div>{children}</div>;
}
