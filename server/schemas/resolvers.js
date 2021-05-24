const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id})
                .select("-__v -password");

                return userData;
            }
            throw new AuthenticationError("Not logged In");
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(user);
            return { token, user };
        },

        savedTickets: async (parent, {ticketData }, context) => {
            if (context.user) {
                const updateUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: {savedTickets: ticketData}},
                    { new: true, runValidators: true }
                );

                return updateUser;
            }

            throw new AuthenticationError("You need to be logged in!!");
        },

        removeTicket: async (parent, { ticketId }, context) => {
            if (context.user) {
                const updateTicket = await User
            }
        }
    }
}