const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"

const recipe = async function() {
  try{
    const x = await mongoose.connect(MONGODB_URI)
    console.log(`Connected to the database: "${x.connection.name}"`);
    
    const del = await Recipe.deleteMany()// Before adding any recipes to the database, let's remove all existing ones
    // const crema = await Recipe.create({ title: "Crema catalana", cuisine: "Catalana" })
    
    const many = await Recipe.insertMany(data)
    many.forEach (recipe => {
      console.log(recipe.title)
    })  


    const updated = await Recipe.findOneAndUpdate({duration:220} , {duration: 100})
    const deleted = await Recipe.deleteOne({ title: "Carrot Cake"})
    
    mongoose.connection.close()
  
    // Run your code here, after you have insured that the connection was made

  } catch (err){
      console.log('Error connecting to the database', err)
  }
}
recipe()





