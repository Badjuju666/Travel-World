const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Ticket {
        _id: ID
        LA: Int
        SF: Int
        LV: Int
    }

    type User {
        _id: ID
        username: String
        email: String
        isAdmin: Boolean
        flight: [Flight]
        password: String
    }

    type Flight {
        _id: ID!
        name: String
        description: String
        datePurchased: String
        purchase: [Purchase]
        quantity: Int
    }

    type Purchase {
        _id: ID!
        createAt: String
        price: Float
        flight: [Flight]
    }
    type Checkout {
        session: ID!
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        tickets: [Ticket]
        user: [User] 
        _id(username: String): ID
        purchase(price: Int): [Purchase]
        
        flight(_id: ID!): [Flight]
        
        checkout(purchase: [ID]!): Checkout
    }
    type Mutations {
        login(username: String!, password: String!): Auth
        addUser(username: String!, password: String!): Auth
        addFlight(description: String!, datePurchased: String!, quantity: Int!): Flight
        updateUser(username: String!, email: String!, password: String!): User
        updateFlight(_id: ID!, quantity: Int!): Flight
    }
`
console.log('typeDefs.js: ', typeof typeDefs);

module.exports = typeDefs;
