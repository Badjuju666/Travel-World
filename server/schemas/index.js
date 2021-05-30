const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const { Schema, models } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        }
    }
)

module.exports = { typeDefs, resolvers, Schema, models, userSchema };