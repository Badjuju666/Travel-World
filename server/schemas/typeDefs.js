const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        traveler: [User!]!
    }

    type Mutations {
        signUp(username: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
    }
`
console.log('typeDefs.js: ', typeof typeDefs);

module.exports = { typeDefs };
