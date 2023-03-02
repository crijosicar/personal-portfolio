import { gql } from '@apollo/client'
import gqlCoreAPIClient from "@/lib/apollo-coreapi-client";
import {get} from "lodash";

export const findSectionsByIds = gql`
query GetSectionsByIds($ids: [String!]!) {
  sections(where: { id: { _in: $ids } }) {
    id
    name
    status       
  }
}
`

export const getSectionsByIds = async (sectionIds: string[]) => {
    const { data } =  await gqlCoreAPIClient.query({
        query: findSectionsByIds,
        variables: {
            ids: sectionIds,
        },
    });

    return get(data, 'sections');
}
