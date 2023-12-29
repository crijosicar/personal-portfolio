import {gql} from '@apollo/client'
import {get} from "lodash";
import gqlCoreAPIClient from "@/lib/apollo-coreapi-client";

export const findLinkById = gql`
query GetLinkById($linkId: ID!) {
  link(where: { id: $linkId }) {
    id
    name
    status
    createdAt
    updatedAt 
  }
}
`

export const getLinkById = async (linkId: string) => {
    const response = await gqlCoreAPIClient.query({
        query: findLinkById,
        variables: {
            linkId,
        },
    });

    return get(response, 'data.link');
}
