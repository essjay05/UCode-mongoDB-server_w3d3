// Require constants
const
    express = require('express'),
    app = express(),
    // quotes = require('./db/mongoose'),
    mongoose = require('./db/mongoose'),
    PORT = process.env.PORT || 3000;

// Connect to database
    // const quotes = require('./db'); (see constants above)

// MIDDLEWARE connection
app.use(express.json());
// var id = 2;

// ROUTES
    // ROOT/HOME Route
    app.get('/', (req, res) => {
        res.json({'success': true});
    });

    // (Read ALL) INDEX: load ALL quotes
    app.get('/quotes', (req, res) => {
        res.json({'success': true, quotes});
    })

    // (Read ONE) FIND/SHOW: one specific quote
    app.get('/quotes/:id', (req, res) => {
        let quote = quotes.find(x => x.id == req.params.id);
        res.json({'success': true, quote})
    })

    // CREATE: quote
    app.post('/quotes', (req, res) => {
        quotes.push({...req.body, id});
        id++;
        res.json({'success': true, quotes});
    });

    // UPDATE quote
    // app.patch('/quotes/:id', (req, res) => {
    //     let quote = quotes.find(x => x.id == req.params.id);
    //     quotes.quote = req.body.quote;
    //     res.json({'success': true, quote});
    // });
    // DELETE quote



// Listening on PORT
app.listen(PORT, err => {
    console.log(err || `Application is listening on PORT ${PORT}`);
})