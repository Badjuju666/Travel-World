const db = require('../config/connection')
const { User, Ticket, Purchase } = require('../models');

db.once('open', async () => {
    await Ticket.deleteMany();

    const tickets = await Ticket.insertMany([
        {name: 'Los Angeles'},
        {name: 'Las Vegas'},
        {name: 'San Fransico'}
    ]);
    console.log('tickets seeded');

    await Purchase.insertMany();

    const purchases = await Purchase.insertMany([
        {
            name: 'LA',
            description: 
                'Here is speil on la is super cool',
            image: 'la.jpg',
            tickets: tickets[0]._id,
            price: 400,
            quantity: 2
        },
        {
            name: 'LV',
            description: 
                'Here is speil on la is super cool',
            image: 'lv.jpg',
            tickets: tickets[1]._id,
            price: 400,
            quantity: 2
        },
        {
            name: 'SF',
            description: 
                'Here is speil on la is super cool',
            image: 'sf.jpg',
            tickets: tickets[2]._id,
            price: 400,
            quantity: 2
        }
    ]);

    console.log('purchases seeded');

    await User.create({
        username: 'badjuju',
        email: 'juliangraves96@gmail.com',
        password: 'greatpw',
        flights: [
            {
                purchases: [purchases[0]._id, purchases[0]._id, purchases[1]._id]
            }
        ]
    });

    await User.create({
        username: 'artifical-fairy',
        email: 'wrongemail@gmail.com',
        password: 'weakpw',
        flights: [
            {
                purchases: [purchases[0]._id, purchases[0]._id, purchases[1]._id]
            }
        ]
        
    });

    console.log('users seeded');

    process.exit();
});