import gql from 'graphql-tag';

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            user {
                _id
                username
                password
            }
        }
    }
`;

export const SIGNUP = gql`
    mutation signUp($username: String!, $password: String!) {
        signUp(username: $username, email: $email, password: $password) {
            user {
                _id
                username
                password
            }
        }
    }
`;