const express = require('express');
const hbs = require('hbs');

const app = express()
require('dotenv').config();
const port = process.env.PORT;






// TODO: require('hbs');
// Handlerbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'));


// app.get('/', function(req, res) { // Esta confirugacion de ruta es la normal la que va al home
//     res.send('Hello World')
// })

app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Curso',
        nombre: 'Jesus Daniel'
    });
});


app.get('/generic', (req, res) => { // Esta es la que va a la otra pagina 
    res.render('generic', {
        titulo: 'Curso',
        nombre: 'Jesus Daniel'
    });
});
app.get('/elements', (req, res) => {
    res.render('elements', {
        titulo: 'Curso',
        nombre: 'Jesus Daniel'
    });
});
app.get('*', (req, res) => { // y esta es la que va a todos los links locos, y va saltar el error que le indiquemos
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})