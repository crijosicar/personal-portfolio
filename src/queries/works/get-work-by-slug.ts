import {gql} from '@apollo/client'
import {gqlCoreAPIClient} from "@/lib/apollo-coreapi-client";
import {get} from "lodash";
import {Work} from "@/entities/work";

export const GET_WORK_BY_SLUG = gql`
    query GetWorkBySlug($slug: String!) {
      work(where: { slug: $slug }) {
        id
          title
          slug
          company
          description
          startDate
          status
          projects {
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

export const getWorkBySlug = async (slug: string): Promise<Work> => {
    const {data} = await gqlCoreAPIClient().query({
        query: GET_WORK_BY_SLUG,
        variables: {slug},
    });

    return get(data, 'work');
}
