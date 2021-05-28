const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        purchase: [Purchase]
    }
    type Purchase {
        city: String
        quantity: Int
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
        purchase: [Purchase]

        checkout(purchase: [ID]!): Checkout
    }
    type Mutations {
        login(username: String!, password: String!): Auth
        addUser(username: String!, password: String!): Auth
        addPurchases(city: String!, quantity: Int!): Purchase
        updateUser(username: String!, password: String!): User
    }
`
console.log('typeDefs.js: ', typeof typeDefs);

module.exports = { typeDefs };
