var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fridgeeat');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var recipesSchema = mongoose.Schema({
  title: String,
  href: String,
  ingredients: String,
  thumbnail: String
});

var Recipe = mongoose.model('Recipe', recipesSchema);

var selectAll = function(callback) {
  Recipe.find({}, function(err, recipes) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, recipes);
    }
  });
};

var saveRecipe = (obj, callback) => {
  let recipe = new Recipe(obj);
  recipe.save((err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
  // console.log(obj);
}

module.exports = {
  selectAll,
  saveRecipe
};