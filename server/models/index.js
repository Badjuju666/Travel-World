const User = require('./User');
// const Ticket = require('./Ticket');
const Destination = require('./Destination');

// Ticket.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Destination.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Destination.HasMany(Tickets, {
//     foreignKey: 'destination_id',
//     onDelete: 'CASCADE'
// });

module.exports = { User, Destination}

