import { gql } from '@apollo/client';
import { get } from 'lodash';

import gqlCoreAPIClient from '@/app/lib/apollo-coreapi-client';

export const findImageById = gql`
    query GetImageById($imageId: ID!) {
        image(where: { id: $imageId }) {
            id
            name
            altText
            image {
                url
            }
            createdAt
            updatedAt
        }
    }
`;

export const getImageById = async (imageId: string) => {
    const response = await gqlCoreAPIClient.query({
        query: findImageById,
        variables: {
            imageId,
        },
    });

    return get(response, 'data.image');
};
