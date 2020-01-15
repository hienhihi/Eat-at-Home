var db = require('../database-mongo');
const axios = require('axios');

let getRecipes = (req, res) => {
  db.selectAll(function(err, data) {
    if(err) {
      res.status(400).send('sorry');
    } else {
      res.status(200).send(data);
    }
  });
}

let searchRecipes = (req, res) => {
  let links = `http://www.recipepuppy.com/api/?i=${req.in}&p=3`;
  axios.get(links)
  .then(response => {
    res.status(200).send(JSON.stringify(response.data));
  })
  .catch(error => {
    console.log(error);
    res.status(400).send('no');
  });
}

let addRecipe = (req, res) => {
  db.saveRecipe(req, (err, data) => {
    if (err) {
      res.status(400).send('sorry')
    } else {
      res.status(200).send('save')
    }
  })
}

module.exports = {
  getRecipes,
  searchRecipes,
  addRecipe
}