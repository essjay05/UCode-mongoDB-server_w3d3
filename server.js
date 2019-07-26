// Require constants
const
    express = require('express'),
    app = express(),
    mongoose = require('./db/mongoose'),
    Person = require('./models/person'),
    bodyParser = require('body-parser'),
    path = require('path'),
    PORT = process.env.PORT || 8888;

// Connect to database
   

// MIDDLEWARE connection
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


// ROUTES
    // ROOT/HOME Route
    app.get('/', (req, res) => {
        res.json({'success': true});
    });


    // app.get('/person', (req, res) => {
    //     res.json({'success': true, person})
    // })

    // (Read ALL) INDEX: load ALL quotes
    app.get('/person', (req, res) => {
        res.json({'success': true, people});
    })

    // (Read ONE) FIND/SHOW: one specific quote
    // app.get('/person/:id', (req, res) => {
    //     let p = Person.find(x => x.id == req.params.id);
    //     res.json({'success': true, p})
    // })

    // CREATE: DOC
    app.post('/person', async (req, res) => {
        console.log(req.body);

        var person = new Person({
            name: req.body.name,
            age: req.body.age,
            isFun: req.body.isFun
        });
        
        await person.save();

        res.status(200).send(person);
    });

    // UPDATE DOCS
    app.patch('/person/:id', async (req, res) => {
       console.log(req.params.id);

       await Person.findOneAndUpdate({id: req.params.id}, 
        {
            name: req.body.name,
            age: req.body.age,
            isFun: req.body.isFun
        });

       res.status(200).send(`Updated: ${req.params.id}`);
    });

    // DELETE DOCS
    app.delete('/person/:name', async (req, res) => {
        console.log(req.params.name);

        await Person.findOneAndDelete({id: req.params.name});

        res.status(200).send(`Deleted: ${req.params.name}`)
    })



// Listening on PORT
app.listen(PORT, err => {
    console.log(err || `Application is listening on PORT ${PORT}`);
})