import {gql} from '@apollo/client'
import {gqlCoreAPIClient} from "@/lib/apollo-coreapi-client";
import {get} from "lodash";
import {Contact, ContactCreateInput, ContactTopicType} from "@/entities/contact";

export const CREATE_CONTACT = gql`
    mutation CreateContact($data: ContactCreateInput!) {
        createContact(data: $data) {
            id
            fullName
            email
            topic
            message
            updatedAt
            createdAt
            updatedBy {
                id
                isAdmin
            }
            createdBy {
                id
                isAdmin
            }
        }
    }
`;

export const createContact = async (payload: ContactCreateInput): Promise<Contact> => {
    const data = {
        ...payload,
        topic: ContactTopicType.SOFTWARE_DESIGN,
    };

    const response = await gqlCoreAPIClient().query({
        query: CREATE_CONTACT,
        variables: { data },
    });

    return get(response, 'data.createContact', {}) as Contact;
}
