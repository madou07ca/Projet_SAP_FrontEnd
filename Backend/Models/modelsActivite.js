const mongoose = require('mongoose'); //Library for MongoDB


//Model
const Activite = mongoose.model('Activite', {
	sport: {
		type : String, 
		required : true
	},
	douleurAvant: {
		type : String,
		required : true
	},
	douleurApres: {
		type : String, 
		required : true
	},
	zoneDouleurAvant : {
		type : String, 
		required : true
	},
	zoneDouleurApres : {
		type : String, 
		required : true
	},
	nbKilometre : {
		type : String, 
		required : true
	},
	duree : {
		type : String, 
		required : true
	},
	date : {
		type : String, 
		required : true
	},
	heure : {
		type : String, 
		required : true
	},
	userId : {
		type : String,
		required : true
	}
});

module.exports = Activite;