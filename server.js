const express = require('express');
const app = express();
const hbs = require('hbs');
 require('./hbs/helpers/helpers');

 const port = process.env.PORT || 3000;
 
app.use( express.static(__dirname + '/public'));

// Express hbs
app.set('view engine', 'hbs');

// parceiles
hbs.registerPartials(__dirname + '/views/partials');


//render
app.get('/',(req, res) => {
  
  
  res.render('home.hbs', {
  	name: 'oscar'

  } )
});
app.get('/abaut',(req, res) => {
  
 	res.render('abaut.hbs')
})
 
app.listen(port, () =>{
	console.log(`Escuchando en el puerto ${port}`)
})
