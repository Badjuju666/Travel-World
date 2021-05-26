import gql  from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($user: String!, $password: String!) {
        login(user: $user)
    }
`