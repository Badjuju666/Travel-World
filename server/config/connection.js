const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/travelworld', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
})
    .then((success) => console.log('Successful DB Connection!'))
    .catch((error) => console.log('Failed DB Connection!', error));

module.exports = mongoose.connection;