import {gql} from '@apollo/client'
import gqlCoreAPIClient from "../../lib/apollo-coreapi-client";
import {get} from "lodash";

export const findWorkById = gql`
    query GetWorkById($workId: ID!) {
      work(where: { id: $workId }) {
        id
        title
        slug
        company
        description
        startDate
        status
        createdAt
        updatedAt 
      }
    }`;

export const getWorkById = async (workId: string) => {
    const {data} = await gqlCoreAPIClient.query({
        query: findWorkById,
        variables: {
            workId,
        },
    });

    return get(data, 'work');
}
