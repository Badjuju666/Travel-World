const { AuthenticationError } = require("apollo-server-express");
const { User, Purchase } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        // purchase: async (parent, { user }) => {
        //     const params = {};
      
        //     if (user) {
        //       params.user = {
        //         $regex: user
        //       };
        //     }
      
        //     return await Purchase.find(params).populate('user');
        //   },
        // purchase: async (parent, { _id }) => {
        //     return await Purchase.findById(_id).populate('user');
        //   },
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'user.purchase',
                populate: 'user'
              });
                        //I SUSPECT THIS ISNT REALLY HELPING?
              user.sort((a, b) => b.purchaseDate - a.purchaseDate);
      
              return user;
            }
      
            throw new AuthenticationError('Not logged in');
        },
        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const newPurchase = new Purchase({ purchase: args.purchase }); //Need to be cautious about newPurchase
            const line_items = [];
      
            const { Purchase } = await newPurchase.populate('user').execPopulate();
      
            for (let i = 0; i < purchase.length; i++) {
              const purchase = await stripe.purchase.create({
                city: purchase[i].city,
                quantity: purchase[i].quantity
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
            const token = signToken(user);  //Token is leading problem preventing graphql playgorund from getting data
      
            return { token, user };
          },
        addPurchases: async (parent, { user }, context) => {    //PROBABLY OKAY HERE
            console.log(context);
            if (context.user) { //something up with this !!!
              const purchase = new Purchase({ user });
      
              await User.findByIdAndUpdate(context.user._id, { $push: { purchase: purchases } });
      
              return purchase;
            }
      
            throw new AuthenticationError('Not logged in');
          },
          updateUser: async (parent, args, context) => {   //PROBABLY OKAY HERE BUT IS IT NEEDED???
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw new AuthenticationError('Not logged in');
          },
          login: async (parent, { username, password }) => {     //PROBABLY OKAY HERE
            const user = await User.findOne({ username });
      
            if (!username) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const nicePw = await username.isCorrectPassword(password);    //PROBABLY OKAY HERE
      
            if (!nicePw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user); //NOT OKAY HERE TOKEN ISSUE
      
            return { token, user };
          }
        }
      };
      
      module.exports = { resolvers };
      