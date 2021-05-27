const db = require('../config/connection')
const { User, Purchase } = require('../models');

db.once('open', async () => {
    // await Ticket.deleteMany({});
    await User.deleteMany({});
    await Purchase.insertMany({});

    // const tickets = await Ticket.insertMany([
    //     {name: 'Los Angeles'},
    //     {name: 'Las Vegas'},
    //     {name: 'San Fransico'}
    // ]);
    // console.log('tickets seeded');

    const Purchase = await purchases.insertMany([
        {
            city: 'LA',
            // description: 
            //     'Here is speil on la is super cool',
            // image: 'la.jpg',
            // tickets: tickets[0]._id,
            price: 400,
            quantity: 2
        },
        {
            city: 'LV',
            // description: 
            //     'Here is speil on la is super cool',
            // image: 'lv.jpg',
            // tickets: tickets[1]._id,
            price: 400,
            quantity: 2
        },
        {
            city: 'SF',
            // description: 
            //     'Here is speil on la is super cool',
            // image: 'sf.jpg',
            // tickets: tickets[2]._id,
            price: 400,
            quantity: 2
        }
    ]);

    console.log('purchases seeded');

    await User.create({
        username: 'badjuju',
        password: 'greatpw',
        purchases: [
            {
                purchase: [purchases[0]._id, purchases[0]._id, purchases[1]._id]
            }
        ]
    });

    await User.create({
        username: 'artifical-fairy',
        password: 'weakpw',
        purchases: [
            {
                
            }
        ]
    });

    console.log('users seeded');

    process.exit();
});