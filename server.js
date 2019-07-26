// Require constants
const
    express = require('express'),
    app = express(),
    mongoose = require('./db/mongoose'),
    Person = require('./models/person'),
    bodyParser = require('body-parser'),
    path = require('path'),
    PORT = process.env.PORT || 9000;

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
    app.get('/person', async (req, res) => {
        console.log(`Finding people in database.`);

        const results = await Person.find({});

        res.status(200).send(results);

    })

    // (Read ONE) FIND/SHOW: one specific quote
    // app.get('/person/:id', (req, res) => {
    //     let p = Person.find(x => x.id == req.params.id);
    //     res.json({'success': true, p})
    // })
    app.get('/person/:id', async (req, res) => {
        console.log(`Finding ${req.params.id}`);

        const result = await Person.find({_id: req.params.id});

        res.status(200).send(result);

    })
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

       await Person.findOneAndUpdate({_id: req.params.id}, 
        {
            name: req.body.name,
            age: req.body.age,
            isFun: req.body.isFun
        });

       res.status(200).send(`Updated: ${req.params.id}, ${req.body}`);
    });

    // DELETE DOCS
    app.delete('/person/:id', async (req, res) => {
        console.log(req.params.id);

        await Person.findOneAndDelete({_id: req.params.id});

        res.status(200).send(`Deleted: ${req.params.id}`)
    })



// Listening on PORT
app.listen(PORT, err => {
    console.log(err || `Application is listening on PORT ${PORT}`);
})