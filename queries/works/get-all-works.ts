import { gql } from '@apollo/client'
import gqlCoreAPIClient from "@/lib/apollo-coreapi-client";
import {get} from "lodash";
import {ContentStatus} from "@/entities/constant";

export const findAllWorks = gql`
query GetAllWorks {
  works {
    id
    company
    title
    slug
    description
    startDate
    status
    createdAt
    updatedAt
  }
}
`

export const getAllWorks = async () => {
    const { data } =  await gqlCoreAPIClient.query({
        query: findAllWorks,
    });

    return get(data, 'works');
}
