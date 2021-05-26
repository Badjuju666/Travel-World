const User = require('./User');
const Ticket = require('./Ticket');
const Flight = require('./Flight');
const Purchase = require('./Purchase');
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

module.exports = { User, Ticket, Flight, Purchase }

