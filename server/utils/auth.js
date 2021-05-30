const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  // authMiddleware: function (req, res, next) {
  //   // allows token to be sent via  req.query or headers
  //   // let token = req.query.token || req.headers.authorization;  //something is causing bug- something related to this line... mysteryyyyy
    

  //   // // ["Bearer", "<tokenvalue>"]
  //   // if (req.headers.authorization) {
  //   //   token = token.split(' ').pop().trim();
  //   // }

  //   // if (!token) {
  //   //   return res.status(400).json({ message: 'You have no token!' });
  //   // }

  //   // verify token and get user data out of it
  //   // try {
  //   //   const { data } = jwt.verify(token, secret, { maxAge: expiration });
  //   //   req.user = data;
  //   // } catch {
  //   //   console.log('Invalid token');
  //   //   return res.status(400).json({ message: 'invalid token!' });
  //   // }

  //   // send to next endpoint
  //   next();
  // },
  signToken: function ({ user, password, _id }) {
    const payload = { user, password, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

