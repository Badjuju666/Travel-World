const mongoose = require('mongoose');
const { Schema } = mongoose;

const flightSchema = new Schema ({
    purchseDate: {
        type: Date,
        default: Date.now
    },
    purchases: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Purchase'
        }
    ]
});

const Flight = mongoose.model('Flight', flightSchema)

module.exports = Flight;