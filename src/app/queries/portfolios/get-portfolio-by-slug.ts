import { gql } from '@apollo/client';
import { get } from 'lodash';

import gqlCoreAPIClient from '@/app/lib/apollo-coreapi-client';

export const findPortfolioBySlug = gql`
    query GetPortfolioBySlug($slug: String!) {
        portfolio(where: { slug: $slug }) {
            id
            name
            description
            icon {
                id
                url
            }
            client
            slug
            gallery {
                id
                image {
                    id
                    url
                }
            }
            createdAt
            updatedAt
        }
    }
`;

export const getPortfolioBySlug = async (slug: string): Promise<any> => {
    const { data } = await gqlCoreAPIClient.query({
        query: findPortfolioBySlug,
        variables: { slug },
    });

    return get(data, 'portfolio');
};
