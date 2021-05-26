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

export const ADD_TICKETS = gql`
    mutation addTickets(
        $cities: String!
        $status: String!
    ) {
        addTickets(cities: $cities, status: $status) {
            _id
            cities
            status
        }
    }
`;