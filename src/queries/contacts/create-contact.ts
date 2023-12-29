import {gql} from '@apollo/client'
import gqlCoreAPIClient from "@/lib/apollo-coreapi-client";
import {get} from "lodash";

export const postContact = gql`
query GetPageBySlug($slug: String!) {
  page(where: { slug: $slug }) {
    id
    name
    status
    slug
    sections {
      id
      name
      title
      slug
      status
      content {
        document(hydrateRelationships: true)
      }
      createdAt
      updatedAt 
    }
    createdAt
    updatedAt        
  }
}
`

export const createContact = async (payload: object): Promise<unknown> => {
    const response = await gqlCoreAPIClient.query({
        query: postContact,
        variables: payload,
    });

    return get(response, 'data.page', {});
}
