import gql from 'graphql-tag';


export const GET_USERS = gql`
    query {
        users {
            username
            _id
        }
    }
`;

export const GET_SIGNUP = gql`
    query {
        purchase {
            city
            quantity
            userID
        }
    }
`;

// export const GET_TICKETS = gql`
//     query tickets($id: ID!) {
//         tickets(_id: $id) {
//             _id
//             cities
//             status
//         }
//     }
// `;

export const QUERY_LOGIN = gql`
    query getCheckout($donation: [ID]!) {
        checkout(donation: $donation) {
            session
        }
    }
`;