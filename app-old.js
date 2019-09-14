const http = require('http');

 
 http.createServer((req, res) =>{

 	res.writeHead(200, {'content-type':'application/json'})
 	let salida = {
 		name: 'oscar',
 		email: 'oscarso500@gmail.com',
 		last: 'villamizar',
 		url: req.url
 	}
 	res.write( JSON.stringify( salida))
 	res.end();
 })
 .listen(8080);

 console.log("Pertro activo")