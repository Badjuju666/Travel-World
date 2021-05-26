const mongoose = require('mongoose');
const { purchases } = require('./Purchase');
const { Schema, model } = mongoose;

const flightSchema = new Schema ({
    purchseDate: {
        type: Date,
        default: Date.now
    },
    purchases: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Purchase',
            default: purchases
        }
    ]
});

const Flight = mongoose.model('Flight', flightSchema)

module.exports = Flight;