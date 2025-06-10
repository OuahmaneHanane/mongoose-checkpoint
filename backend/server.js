require('dotenv').config();
const mongoose = require('mongoose');
const personController = require('./controllers/personController');

async function run() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected');

    // Run each function step-by-step (uncomment one at a time to test)
    // await personController.createPerson();
    // await personController.createManyPeople();
    // await personController.findPeopleByName('Mary');
    // await personController.findOneByFavoriteFood('Pizza');
    // await personController.findPersonById('paste_the_id_here');
    // await personController.updatePersonFavoriteFoods('paste_the_id_here');
    // await personController.updatePersonAge('Jane');
    // await personController.deletePersonById('6848a0ce51a1f540413a654c');
    // await personController.deleteManyPeople();
    // await personController.complexQuery();

  } catch (error) {
    console.error('Connection error:', error);
  }
}

run();
