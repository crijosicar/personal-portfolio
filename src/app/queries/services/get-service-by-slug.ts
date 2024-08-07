import { gql } from '@apollo/client';
import { get } from 'lodash';

import { gqlCoreAPIClient } from '@/app/lib/apollo-coreapi-client';

export const GET_SERVICE_BY_SLUG = gql`
    query GetServiceBySlug($slug: String!) {
        service(where: { slug: $slug }) {
            id
            title
            name
            slug
            description
            icon {
                url
            }
            createdAt
            updatedAt
        }
    }
`;

export const getServiceBySlug = async (slug: string) => {
    const response = await gqlCoreAPIClient().query({
        query: GET_SERVICE_BY_SLUG,
        variables: { slug },
    });

    return get(response, 'data.service');
};
