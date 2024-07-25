import { gqlCoreAPIClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';
import { get } from 'lodash';

export const GET_WORK_BY_ID = gql`
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
    }
`;

export const getWorkById = async (workId: string) => {
    const { data } = await gqlCoreAPIClient().query({
        query: GET_WORK_BY_ID,
        variables: {
            workId,
        },
    });

    return get(data, 'work');
};
