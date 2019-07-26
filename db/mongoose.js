// const quotes = [
//     {quote: 'Hello!', id: 1}
// ];

// module.exports = quotes;

// console.log(`Connected to quotes database.`)

const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://joyousAdmin:MBluvsUCode@cluster0-hkrp0.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(connectionString, { useNewUrlParser: true, useFindAndModify: false})
    .then(() => {
        console.log(`Successfully connected to MongoDB Atlas!`)
    })
    .catch((error) => {
        console.log(`Unable to connect to MongoDB Atlas!`)
        console.log(error);
    })

module.exports = mongoose;