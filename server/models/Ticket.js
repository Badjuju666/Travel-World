const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketSchema = new Schema({
    tickets: [
        {
            type: String,
        },
    ],
    description: [
        {
            type: String,
            required: true,
        },
    ],
    ticketsId: [
        {
            type: String,
            required: true
        },
    ],
    city: [
        {
            type: String,
            required: true,
        },
    ],
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;