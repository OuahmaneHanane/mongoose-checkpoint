const Person = require('../models/Person');

// Create and Save One Person
async function createPerson() {
  try {
    const person = new Person({
      name: 'John Doe',
      age: 25,
      favoriteFoods: ['Pizza', 'Pasta']
    });
    const savedPerson = await person.save();
    console.log('Person saved:', savedPerson);
  } catch (error) {
    console.error('Error creating person:', error);
  }
}

// Create and Save Multiple People
async function createManyPeople() {
  try {
    const arrayOfPeople = [
      { name: 'Mary', age: 30, favoriteFoods: ['Burger', 'Fries'] },
      { name: 'Jane', age: 22, favoriteFoods: ['Salad', 'Pizza'] },
      { name: 'Mike', age: 35, favoriteFoods: ['Steak', 'Burrito'] }
    ];

    const createdPeople = await Person.create(arrayOfPeople);
    console.log('People created:', createdPeople);
  } catch (error) {
    console.error('Error creating multiple people:', error);
  }
}

// Find all people by name
async function findPeopleByName(personName) {
  try {
    const people = await Person.find({ name: personName });
    console.log(`People with name ${personName}:`, people);
  } catch (error) {
    console.error('Error finding people:', error);
  }
}

// Find one person by favorite food
async function findOneByFavoriteFood(food) {
  try {
    const person = await Person.findOne({ favoriteFoods: food });
    console.log(`Person who likes ${food}:`, person);
  } catch (error) {
    console.error('Error finding person by food:', error);
  }
}

// Find person by ID
async function findPersonById(personId) {
  try {
    const person = await Person.findById(personId);
    console.log(`Person with ID ${personId}:`, person);
  } catch (error) {
    console.error('Error finding person by ID:', error);
  }
}

// Classic Update: Find, Edit, then Save
async function updatePersonFavoriteFoods(personId) {
  try {
    const person = await Person.findById(personId);
    person.favoriteFoods.push('hamburger');
    const updatedPerson = await person.save();
    console.log('Person after adding hamburger:', updatedPerson);
  } catch (error) {
    console.error('Error updating person:', error);
  }
}

// Find One and Update Age
async function updatePersonAge(personName) {
  try {
    const updatedPerson = await Person.findOneAndUpdate(
      { name: personName },
      { age: 20 },
      { new: true }
    );
    console.log('Updated person age:', updatedPerson);
  } catch (error) {
    console.error('Error updating age:', error);
  }
}

// Delete by ID
async function deletePersonById(personId) {
  try {
    const deletedPerson = await Person.findByIdAndDelete(personId);
    console.log('Deleted person:', deletedPerson);
  } catch (error) {
    console.error('Error deleting person:', error);
  }
}

// Delete many by name
async function deleteManyPeople() {
  try {
    const result = await Person.deleteMany({ name: 'Mary' });
    console.log('Delete result:', result);
  } catch (error) {
    console.error('Error deleting many people:', error);
  }
}

// Chain search query helpers
async function complexQuery() {
  try {
    const results = await Person.find({ favoriteFoods: 'burrito' })
      .sort('name')
      .limit(2)
      .select('-age')
      .exec();

    console.log('Complex query results:', results);
  } catch (error) {
    console.error('Error in complex query:', error);
  }
}

module.exports = {
  createPerson,
  createManyPeople,
  findPeopleByName,
  findOneByFavoriteFood,
  findPersonById,
  updatePersonFavoriteFoods,
  updatePersonAge,
  deletePersonById,
  deleteManyPeople,
  complexQuery
};
