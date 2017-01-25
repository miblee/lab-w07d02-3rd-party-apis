const randomword = require('./randomword.js')
const randomuser = require('./randomuser.js');
const trivia = require('./trivia.js');
const exchange = require ('./exchange.js');
const recipe = require('./recipes.js');
const github = require('./github.js');

const express = require('express')
const app = express();
const morgan = require('morgan')

app.use(morgan('dev'));


app.get('/randomword', function(req, res){
  randomword.get( (data) => {
    res.json(data);
  })
})


app.get('/randomuser', function(req, res){
  randomuser.get( (data) => {
    res.json(data);
  })
})


app.get('/trivia', function(req, res){
  if(req.query.n){//} === '1'){
    var howManyQuestions = parseInt(req.query.n)
    trivia.get( (data) => {
      res.json(data.results.slice(0, howManyQuestions));
    })
  } else {
    trivia.get( (data) => {
      res.json(data);
    });
  };
})



app.get('/exchange', function(req, res){
  if(req.query.amount){
    var amount = parseInt(req.query.amount);
    var convertedRates = {}
    exchange.get( (data) => {
      for(var country in data.rates){
        var value = data.rates[country];
        // console.log(country +"-->"+ value*amount);
        convertedRates[country] = parseFloat(value*amount).toFixed(2);
      };
      res.json(convertedRates);
    })
  } else {
    exchange.get( (data) => {
      res.json(data);
    })
  }
})

app.get('/recipes/search', function(req, res){
  recipe.search('salad', function(data){
    res.json(data);
  })
})


app.get('/github/:profileName', function(req, res){
  const {profileName} = req.params;
  github.get(profileName, (data) => {
    res.json(data);
  })
})

const port = 3000;
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});


