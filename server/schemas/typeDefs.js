const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
    }
    type Login {
        username: String
        password: String
    }
    type Signup {
        username: String
        password: String
    }
    type Checkout {
        session: ID
    }
    type Auth {
        token: ID
        user: User
    }
    type Query {
        user: [User] 
        _id(username: String): ID
        login: [Login]
        signup: [Signup]
        checkout(purchase: [ID]!): Checkout
    }
    type Mutations {
        signup(username: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
    }
`
console.log('typeDefs.js: ', typeof typeDefs);

module.exports = { typeDefs };
