import { gql } from '@apollo/client'
import gqlCoreAPIClient from "@/lib/apollo-coreapi-client";
import {get} from "lodash";

export const findSectionById = gql`
query GetSectionById($sectionId: ID!) {
  section(where: { id: $sectionId }) {
    id
    name
    status
    content {
      document
    }
    status
    createdAt
    updatedAt
  }
}
`

export const getSectionById = async (sectionId: string) => {
    const { data } =  await gqlCoreAPIClient.query({
        query: findSectionById,
        variables: {
            sectionId,
        },
    });

    return get(data, 'section');
}
