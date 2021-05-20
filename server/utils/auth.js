const jwt = require('jsonwebtoken');

const secret = 'mysecret';
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.author

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secrey, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }
        return req;
    },
    signToken: function ({ username, _id }) {
        const payload = { username, _id };

        return jwt.sign({ data: payload}, secret, { expires: expiration });
    },
};
