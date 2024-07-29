'use client';

import { NEXT_PUBLIC_CORE_API_URL } from '@/lib/constant';
import { HttpLink } from '@apollo/client';
import { ApolloClient, ApolloNextAppProvider, InMemoryCache } from '@apollo/experimental-nextjs-app-support';
import React from 'react';

const makeClient = (): ApolloClient<unknown> => {
    const httpLink = new HttpLink({
        uri: NEXT_PUBLIC_CORE_API_URL,
        fetchOptions: { cache: 'no-store' },
    });

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: httpLink,
    });
};

export function ApolloWrapper({ children }: React.PropsWithChildren) {
    return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
