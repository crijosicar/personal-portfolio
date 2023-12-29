import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import {CORE_API_URL} from "@/lib/constant";

export const { getClient: gqlCoreAPIClient } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        connectToDevTools: process.env.NODE_ENV !== "production",
        link: new HttpLink({
            // this needs to be an absolute url, as relative urls cannot be used in SSR
            uri: CORE_API_URL,
            // you can disable result caching here if you want to
            // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
            fetchOptions: { cache: "no-store" },
        }),
    });
});