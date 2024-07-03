'use client';

import { BreadcrumbItem } from '@/entities/breadcrumbs';
import { convertBreadcrumb } from '@/lib/breadcrumb.util';
import { useParams, usePathname } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react';

import Breadcrumbs from '@/components/breadcrumbs';

export type BreadCrumbsWrapperContext = {
    context?: string;
    setContext?: Function;
    itemName?: string;
    setItemName?: Function;
};

const defaultContext: BreadCrumbsWrapperContext = {
    context: '',
    setContext: () => {},
    itemName: '',
    setItemName: () => {},
};

export const BreadCrumbsContext = createContext(defaultContext);

export function BreadCrumbsWrapper({ children }: React.PropsWithChildren) {
    const { slug } = useParams();
    const pathname = usePathname();
    const [context, setContext] = useState();
    const [itemName, setItemName] = useState();
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

    useEffect(() => {
        if (pathname) {
            const basePath = process.env.NEXT_PUBLIC_APP_BASE_URL;
            const paths: BreadcrumbItem[] = [];

            if (context && itemName) {
                paths.push({
                    name: convertBreadcrumb(context),
                    slug: context,
                    path: `${basePath}/${context}`,
                });
                paths.push({
                    name: convertBreadcrumb(itemName),
                    slug: `${slug || itemName}`,
                    path: `${basePath}/${itemName}`,
                });
            }

            setBreadcrumbs(paths);
        }
    }, [pathname, context, itemName, slug]);

    if (!breadcrumbs.length) return <>{children}</>;

    return (
        <BreadCrumbsContext.Provider
            value={{
                context,
                setContext,
                itemName,
                setItemName,
            }}
        >
            <Breadcrumbs items={breadcrumbs} />
            {children}
        </BreadCrumbsContext.Provider>
    );
}
