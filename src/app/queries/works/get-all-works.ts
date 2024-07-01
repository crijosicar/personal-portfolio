import { Work } from '@/app/entities/work';
import { gql } from '@apollo/client';
import { get } from 'lodash';

import { gqlCoreAPIClient } from '@/app/lib/apollo-coreapi-client';

export const GET_ALL_WORKS = gql`
    query GetAllWorks($take: Int) {
        works(take: $take) {
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
`;

type GetAllWorksQueryOptions = {
    take?: number;
};

export const getAllWorks = async (options?: GetAllWorksQueryOptions): Promise<Work[]> => {
    const take = get(options, 'take', 0);

    const { data } = await gqlCoreAPIClient().query({
        query: GET_ALL_WORKS,
        ...(take && { variables: { take } }),
    });

    return get(data, 'works') as Work[];
};
