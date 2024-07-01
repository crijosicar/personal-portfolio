import { BaseLayoutPageProps } from '@/app/entities/base-layout';
import { getServiceBySlug } from '@/app/queries/services/get-service-by-slug';
import { get, isEmpty } from 'lodash';
import React from 'react';

import Breadcrumbs from '@/app/components/breadcrumbs';

export default async function WorkLayout({ children, params }: BaseLayoutPageProps) {
    const serviceSlug = get(params, 'slug', '') as string;

    const items = [
        {
            name: 'Services',
            slug: 'services',
            path: '/',
        },
    ];

    if (!isEmpty(serviceSlug)) {
        const service = await getServiceBySlug(serviceSlug);

        items.push({ name: get(service, 'title'), slug: serviceSlug, path: `/services/` });
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
