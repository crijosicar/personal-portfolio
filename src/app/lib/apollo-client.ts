import { NEXT_PUBLIC_CORE_API_URL } from '@/lib/constant';
import { HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache, registerApolloClient } from '@apollo/experimental-nextjs-app-support';
import { setVerbosity } from 'ts-invariant';

setVerbosity('debug');

export const { getClient: gqlCoreAPIClient, query } = registerApolloClient((): ApolloClient<unknown> => {
    const httpLink = new HttpLink({
        uri: NEXT_PUBLIC_CORE_API_URL,
        fetchOptions: { cache: 'no-store' },
    });

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: httpLink,
    });
});
