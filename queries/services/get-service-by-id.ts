import {gql} from '@apollo/client'
import {get} from "lodash";
import gqlCoreAPIClient from "@/lib/apollo-coreapi-client";

export const findServiceById = gql`
query GetServiceById($serviceId: ID!) {
  service(where: { id: $serviceId }) {
    id
    title
    name
    description
    icon {
      url
    }
    createdAt
    updatedAt 
  }
}
`

export const getServiceById = async (serviceId: string) => {
    const response = await gqlCoreAPIClient.query({
        query: findServiceById,
        variables: {
            serviceId,
        },
    });

    return get(response, 'data.service');
}
