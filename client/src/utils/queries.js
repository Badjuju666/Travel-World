import gql from 'graphql-tag';


export const QUERY_TRAVELER = gql`
   {
       traveler {
           _id
           username
           password
       }
   }
`;

// export const QUERY_SIGNUP = gql`
//     {
//         signUp {
//             username: $username
//             password: $password
//         } 
//     }
// `;

// export const GET_TICKETS = gql`
//     query tickets($id: ID!) {
//         tickets(_id: $id) {
//             _id
//             cities
//             status
//         }
//     }
// `;

// export const QUERY_LOGIN = gql`
//     query getCheckout($donation: [ID]!) {
//         checkout(donation: $donation) {
//             session
//         }
//     }
// `;