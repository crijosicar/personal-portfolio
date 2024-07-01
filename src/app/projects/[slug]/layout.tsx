'use client';

import { BaseLayoutProps } from '@/app/entities/base-layout';
import React from 'react';

import Breadcrumbs from '@/app/components/breadcrumbs';

export default function WorkLayout({ children }: BaseLayoutProps) {
    const items = [
        {
            name: 'Projects',
            slug: 'projects',
            path: '/',
        },
    ];

    return (
        <div>
            <div className={'container px-20'}>
                <Breadcrumbs items={items} />
            </div>
            {children}
        </div>
    );
}
