'use client';

import { BreadcrumbItem as BreadcrumbItemType, BreadcrumbItems } from '@/app/entities/breadcrumbs';
import { Breadcrumb, BreadcrumbItem } from 'keep-react';
import { map } from 'lodash';
import { House } from 'phosphor-react';
import Link from 'next/link';

export default function Breadcrumbs({ items }: { items: BreadcrumbItems }) {
    return (
        <div className="flex w-full flex-col gap-5">
            <Breadcrumb aria-label="Home">
                <BreadcrumbItem>
                    <House size={24} color="#AFBACA" />
                    Home
                </BreadcrumbItem>
                {map(items, (breadcrumbItem: BreadcrumbItemType, index: number) => {
                    const { name, slug, path } = breadcrumbItem;

                    return (
                        <BreadcrumbItem  key={index}>
                            <Link href={`${path}${slug}`} >
                                {name}
                            </Link>
                        </BreadcrumbItem>
                    );
                })}
            </Breadcrumb>
        </div>
    );
}
