const { Schema } = require('mongoose');

const ticketSchema = new Schema({
    tickets: [
        {
            type: String,
        },
    ],
    description: {
        type: String,
        required: true,
    },
    ticketsId: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true,
    },
});

module.exports = ticketSchema;