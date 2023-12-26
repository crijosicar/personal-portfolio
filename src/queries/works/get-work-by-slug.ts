import {gql} from '@apollo/client'
import gqlCoreAPIClient from "../../lib/apollo-coreapi-client";
import {get} from "lodash";

export const findWorkBySlug = gql`
    query GetWorkBySlug($slug: String!) {
      work(where: { slug: $slug }) {
        id
          title
          slug
          company
          description
          startDate
          status
          projects{
              id
              name
              description
              icon {
                  id
                  url
              }
              client
              slug
              gallery {
                  id
                  image{
                      id
                      url
                  }
              }
              createdAt
              updatedAt
          }
          createdAt
          updatedAt
      }
    }`;

export const getWorkBySlug = async (slug: string): Promise<any> => {
    const {data} = await gqlCoreAPIClient.query({
        query: findWorkBySlug,
        variables: {slug},
    });

    return get(data, 'work');
}
