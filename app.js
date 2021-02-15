//Loads the express module
const express = require('express');

//Creates express server
const app = express();

const port =3000;

//Lods the handlebars module
const handlebars = require('express-handlebars');

//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');

//Set the handlebars configurations
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'handlebars',
    defaultLayout: 'default',
    }));

//Server static files (CSS, Js and other files which need to import)
app.use(express.static('public'));


//Basic route
app.get('/', (req, res) =>{
	const data = "But, I passed through variable, I can be dynamic.";
    //res.render('default/index',  {layout: 'default'});
    res.render('default/index',  {data});
    //res.render('default/index', {layout: 'anotherLayout', data});
});

//Makes the app listen to the port 3000
app.listen(port, ()=> console.log(`App listening to the port ${port}`));

