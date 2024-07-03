'use client';

import { BreadcrumbItem, BreadcrumbItems } from '@/app/entities/breadcrumbs';
import { Breadcrumb } from 'keep-react';
import { map, size } from 'lodash';
import { CaretRight, House } from 'phosphor-react';

export default function Breadcrumbs({ items }: { items: BreadcrumbItems }) {
    const itemsSize = size(items);

    return (
        <div className="flex w-full flex-col gap-5">
            <Breadcrumb aria-label="Home" separatorIcon={<CaretRight size={20} color="#AFBACA" />}>
                <Breadcrumb.Item href={'/'} icon={<House size={24} color="#AFBACA" />}>
                    Home
                </Breadcrumb.Item>
                {map(items, (breadcrumbItem: BreadcrumbItem, index: number) => {
                    const { name, slug, path } = breadcrumbItem;
                    const isLast = index === itemsSize - 1;
                    const active = isLast ? 'bar' : undefined;

                    return (
                        <Breadcrumb.Item href={`${path}${slug}`} active={active} key={index}>
                            {name}
                        </Breadcrumb.Item>
                    );
                })}
            </Breadcrumb>
        </div>
    );
}
