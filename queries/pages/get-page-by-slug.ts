import {gql} from '@apollo/client'
import gqlCoreAPIClient from "@/lib/apollo-coreapi-client";
import {get} from "lodash";
import {PageBase} from "@/entities/page.entity";

export const findPageBySlug = gql`
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

export const getPageBySlug = async (slug: string): Promise<PageBase> => {
    const response = await gqlCoreAPIClient.query({
        query: findPageBySlug,
        variables: {
            slug,
        },
    });

    return get(response, 'data.page', {}) as PageBase;
}
