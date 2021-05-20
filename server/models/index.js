const User = require('./User');
const Tickets = require('./tickets');
const Destination = require('./Destination');

Tickets.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Destination.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Destination.HasMany(Tickets, {
    foreignKey: 'destination_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Tickets, Destination}

