const { AuthenticationError } = require("apollo-server-express");
const { user } = require("../config/connection");
const { User, Purchase } = require("../models");
const { signToken } = require("../utils/auth");
const bcrypt = require('bcryptjs');
const Jwt = require('jsonwebtoken');

function poofToken(user) {
  return Jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    INVISIBLE_KEY,
    { expiresIn: '1h' }
  );
}

const resolvers = {
  // Query: {
  //   traveler: async (parent, args, context) => {
  //     if (context.user) {
  //       const userData = await User.findOne({ _id: context.user._id }).select('-__v - password');

  //       return userData;
  //     }

  //     throw new AuthenticationError('Not Logging In')
  //   },       
  // },
      
    Mutations: {
        signUp: async (parent, args) => {
            const newUser = await User.create(args);
            user.push(newUser)
            const token = signToken(user);  //Token is leading problem preventing graphql playgorund from getting data

            return { token, newuser };
          },
        login: async (parent, { username, password }) => {     //PROBABLY OKAY HERE
          const user = await User.findOne({ username });
      
          if (!username) {
            throw new AuthenticationError('nope');
          }
      
          const nicePw = await password.isCorrectPassword(password);    //PROBABLY OKAY HERE
      
          if (!nicePw) {
            throw new AuthenticationError('nope');
          }
      
          const token = signToken(username); //NOT OKAY HERE TOKEN ISSUE
      
          return { token, username };          }
        }
      };
      
module.exports = { resolvers };
      