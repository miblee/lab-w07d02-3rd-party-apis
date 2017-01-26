var express = require('express');
var bodyParser = require('body-parser');
var hbs  = require('express-handlebars');
var methodOverride = require('method-override');
var morgan = require('morgan');
var app = express();
const randomword = require('./lib/randomword.js')
const randomuser = require('./lib/randomuser.js');

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));

console.log('hello')
app.get('/random', function(req, res, next){
  res.render('random');
} )

app.get('/randomword', function(req, res){
  console.log('2. i got the request from the front end')
  randomword.blah( (data) => {
    console.log('3. sending response', data);
    res.json(data);
  })
})


app.get('/randomuser', function(req, res){
  randomuser.get( (data) => {
    res.json(data);
  })
})









var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
});

