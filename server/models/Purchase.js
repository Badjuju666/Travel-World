const mongoose = require('mongoose');

const { Schema } = mongoose;

const purchaseSchema = new Schema({
    name: [
        {
            type: String,
            required: true,
            trim: true
        },
    ],
    price: [
        {
            type: Number,
            required: true,
            min: 99.00
        },
    ],
    ticket: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ticket',
            required: true
        }
    ],
});

const Purchase = mongoose.model('Purchase', purchaseSchema)
module.exports = Purchase;