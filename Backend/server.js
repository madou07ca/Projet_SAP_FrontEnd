//Modules

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

//Port
const port = 3030;

//mongoose.connect('mongodb://localhost:27017/projet');

mongoose.connect('mongodb://localhost:27017/projet', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Configurez l'application pour utiliser bodyParser et nous permettre à faire POST et PUT
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());


const activite = require('./Models/modelsActivite');
const sport = require('./Models/modelsSport');
const users = require('./Models/modelsUsers');


//Routes
app.use('/', require('./Components/ComponentsActivite/routeActivite'))
app.use('/', require('./Components/ComponentsSport/routeSport'))
app.use('/', require('./Components/ComponentsUsers/routeUsers'))

app.listen(port, () => {
    console.log('Le serveur est opérationnel sur le numéro de port ' + port);
});