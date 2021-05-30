import gql from 'graphql-tag';

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
                isAdmin
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser(
        $username: String!
        $password: String!
    ) {
        addUser(
            username: $username
            password: $password
        ) {
            token
            user {
                _id
            }
        }
    }
`;

export const SIGN_UP = gql`
    mutation addPurchase(
        $city: String!
        $quantity: Number!
        $userID: ID! 
    ) {
        addPurchase(city: $city, quantity: $quantity, userID: $userID) {
            city
            quantity
            userID
        }
    }
`;