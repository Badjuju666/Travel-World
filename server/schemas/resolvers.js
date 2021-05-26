const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        tickets: async () => {
            return await Ticket.find();
          },
        purchase: async (parent, { ticket, user }) => {
            const params = {};
      
            if (ticket) {
              params.ticket = ticket;
            }
      
            if (user) {
              params.user = {
                $regex: user
              };
            }
      
            return await Purchase.find(params).populate('ticket');
          },
        purchase: async (parent, { _id }) => {
            return await Purchase.findById(_id).populate('ticket');
          },
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'flight.purchase',
                populate: 'flight'
              });
      
              user.ticket.sort((a, b) => b.purchaseDate - a.purchaseDate);
      
              return user;
            }
      
            throw new AuthenticationError('Not logged in');
        },
        flight: async (parent, { _id }, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'flight.purchase',
                populate: 'ticket'
              });
      
              return user.flight.id(_id);
            }
      
            throw new AuthenticationError('Not logged in');
        },
        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const newFlight = new Flight({ purchase: args.purchase });
            const line_items = [];
      
            const { purchase } = await newFlight.populate('purchase').execPopulate();
      
            for (let i = 0; i < purchase.length; i++) {
              const purchase = await stripe.purchase.create({
                name: purchase[i].name,
                description: purchase[i].description,
                images: [`${url}/images/${purchase[i].image}`]
              });
      
              const price = await stripe.prices.create({
                purchase: purchase.id,
                unit_amount: purchase[i].price * 100,
                currency: 'usd',
              });
      
              line_items.push({
                price: price.id,
                quantity: 1
              });
            }
      
            const session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items,
              mode: 'payment',
              success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
              cancel_url: `${url}/`
            });
      
            return { session: session.id };
        }
    },
      
    Mutations: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
        addFlight: async (parent, { purchase }, context) => {
            console.log(context);
            if (context.user) {
              const ticket = new Flight({ purchase });
      
              await User.findByIdAndUpdate(context.user._id, { $push: { flights: flight } });
      
              return flight;
            }
      
            throw new AuthenticationError('Not logged in');
          },
          updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw new AuthenticationError('Not logged in');
          },
          updateFlight: async (parent, { _id, quantity }) => {
            const decrement = Math.abs(quantity) * -1;
      
            return await Flight.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
          },
          login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
      
            if (!username) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const nicePw = await username.isCorrectPassword(password);
      
            if (!nicePw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          }
        }
      };
      
      module.exports = { resolvers };
      