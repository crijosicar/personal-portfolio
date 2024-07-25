import { registerApolloClient } from '@apollo/experimental-nextjs-app-support';

import { makeClient } from '@/components/apollo-wrapper';

export const { getClient: gqlCoreAPIClient, query } = registerApolloClient(() => makeClient());
