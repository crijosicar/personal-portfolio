'use client';

import React from "react";
import Breadcrumbs from "@/app/components/breadcrumbs";
import {BaseLayoutProps} from "@/app/entities/base-layout";

export default function WorkLayout({children}: BaseLayoutProps) {
    const items =  [
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
