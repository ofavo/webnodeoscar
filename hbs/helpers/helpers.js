const hbs = require('hbs');

//helpers 

hbs.registerHelper('getanio', () =>{
	return new Date().getFullYear();
})
