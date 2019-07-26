// Require mongoose
const mongoose = require('./db/mongoose');

// Require Model
const Person = require('./models/person');

// Create new Person and store it in a variable of person
// var person = new Person({
//     name: "Alonzo Church",
//     age: 116,
//     isFun: false
// });

// person.save();

// READ /FIND DOCUMENTS
// const findDocs = async () => {
//     console.log(`Finding Documents in Database`);

//     const results = await Person.findOne({age: {$lt: 25}});

//     console.log(results);
// }
// findDocs();

// UPDATE DOCUMENTS
// const updateDocs = async () => {
//     console.log(`Updating documents in Database.`);
//     // Update Many below
//         // const results = await Person.updateMany({isFun : true}, {isFun: false});
//     // Update and find one
//         const results = await Person.findOneAndUpdate({isFun: false}, {isFun: true});

//     console.log(results);
// }
// updateDocs();

// Delete Documents
const deleteDocs = async () => {
    console.log(`Deleting Documents in Database`);
    // Delete many
        // await Person.deleteMany({isFun: false});
    // Delete one
    await Person.findOneAndDelete({name: 'Caeleb'});
}
deleteDocs();