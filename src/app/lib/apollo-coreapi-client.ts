import { CORE_API_URL } from '@/app/lib/constant';
import { HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache, registerApolloClient } from '@apollo/experimental-nextjs-app-support';
import { setVerbosity } from 'ts-invariant';

setVerbosity('debug');

export const { getClient: gqlCoreAPIClient, query } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: CORE_API_URL,
            fetchOptions: { cache: 'no-store' },
        }),
    });
});
