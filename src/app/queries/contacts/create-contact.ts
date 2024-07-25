import { gql } from '@apollo/client';

export const CREATE_CONTACT = gql`
    mutation CreateContact($contact: ContactCreateInput!) {
        createContact(contact: $contact) {
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
