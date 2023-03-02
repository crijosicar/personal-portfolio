import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context'

const clientHttpLink = createHttpLink({
    uri: process.env.CORE_API_URL,
    credentials: 'same-origin',
});

// const clientAuthLink = setContext((_, { headers }) => {
//     return {
//         headers: {
//             ...headers,
//             "x-api-token": process.env.CORE_API_TOKEN
//         },
//     }
// })

const gqlCoreAPIClient = new ApolloClient({
    ssrMode: true,
    link: clientHttpLink,
    cache: new InMemoryCache(),
    connectToDevTools: process.env.NODE_ENV !== "production",
});

export default gqlCoreAPIClient;
