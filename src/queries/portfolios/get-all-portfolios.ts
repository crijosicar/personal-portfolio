import {gql} from '@apollo/client'
import gqlCoreAPIClient from "@/lib/apollo-coreapi-client";
import {get} from "lodash";

export const findAllPortfolios = gql`
query GetAllPortfolios {
  portfolios {
    id
    name  
    slug
      icon {
          id
          url
      }
      client
      slug
      gallery {
          id
          image{
              id
              url
          }
      }
    description
    createdAt
    updatedAt
  }
}
`

export const getAllPortfolios = async () => {
    const {data} = await gqlCoreAPIClient.query({
        query: findAllPortfolios,
    });

    return get(data, 'portfolios');
}
