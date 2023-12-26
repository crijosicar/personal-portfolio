import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const clientHttpLink = createHttpLink({
    uri: process.env.CORE_API_URL,
    credentials: 'same-origin',
});

const gqlCoreAPIClient = new ApolloClient({
    ssrMode: true,
    link: clientHttpLink,
    cache: new InMemoryCache(),
    connectToDevTools: process.env.NODE_ENV !== "production",
});

export default gqlCoreAPIClient;
