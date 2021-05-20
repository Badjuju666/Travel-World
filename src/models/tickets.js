const { schema, Model } = require('mongoose');
const ticket = require('./Index')

const ticketSchema = new Schema(
    {
        ticketText: {
            type: String,
            
        }
    }
)

module.exports = ticketSchema;