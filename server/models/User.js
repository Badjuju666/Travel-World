const { Schema } = mongoose;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
},
{
    toJSON: {
        virtuals: true,
    },
}
);

userSchema.pre('save', async function (next) {
    if (this,isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('ticketsCount').get(function () {
    return this.savedTickets.length;
});

const User = mongoose.model('User', userSchema);

module.exports = User;