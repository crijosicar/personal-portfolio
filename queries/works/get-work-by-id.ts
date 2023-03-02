import { gql } from '@apollo/client'
import gqlCoreAPIClient from "@/lib/apollo-coreapi-client";
import {get} from "lodash";
import {ContentStatus} from "@/entities/constant";

export const findWorkById = gql`
query GetWorkById($workId: ID!) {
  work(where: { id: $workId }) {
    id
    company
    description
    startDate
    status
    createdAt
    updatedAt 
  }
}
`

export const getWorkById = async (workId: string) => {
    const { data } =  await gqlCoreAPIClient.query({
        query: findWorkById,
        variables: {
            workId,
        },
    });

    return get(data, 'work');
}
