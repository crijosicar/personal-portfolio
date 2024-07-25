import { gqlCoreAPIClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';
import { get } from 'lodash';

export const GET_SERVICE_BY_ID = gql`
    query GetServiceById($serviceId: ID!) {
        service(where: { id: $serviceId }) {
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

export const getServiceById = async (serviceId: string) => {
    const response = await gqlCoreAPIClient().query({
        query: GET_SERVICE_BY_ID,
        variables: {
            serviceId,
        },
    });

    return get(response, 'data.service');
};
