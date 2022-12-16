 /*
Sarai Hannah Ajai has created a constant ('express') in order to import an Express module library application that connect
with HTTP and middleware in Node.js back-end server (index.js) for accepting HTTP requests and responses.
 */
const express = require('express');

/*
Sarai Hannah Ajai has imported the 'sqlite' constant from using her written JavaScript programmatic codes which has allowed her
to interact with SQLite3 database from the NODE.js application using the SQLite3 module library. In which, she will be able
to open a database connection and perform specified common database operations.
*/
const sqlite3 = require('sqlite3').verbose();


/*
Sarai Hannah Ajai has created the 'alabama_SignUp_Controller.js' file/module for handling her export SQLite3's user/voter data
information passthrough sent to the models folder and executed from the 'alabama_SignUp_Router.js' file/module, as a route
callback from the server ("index.js").
*/
const alabamaSignUp_Router = require('../models/alabamaSignUp_Router');

// Sarai Hannah Ajai had JavaScript programmatically coded an open "database_Alabama_SignUp.db" (database) connection.

const db = new sqlite3.Database('database_Alabama_SignUp.db', error => {
	if (error) {
		console.log('Developer has created an Alabama Sign Up Sqlite3 database connection which has a programmatically codes error, as: ' + error + '!');        
	} else {
		console.log('Developer has successfully created an Alabama Sign Up Sqlite3 database connection from her programmatic codes abilities!');
		
	}
});

/*
Sarai Hannah Ajai had JavaScript programmatically coded SQLite3; in order to create/update an automatic SQLite3's 
JavaScript table each time an iVoteBallot's user/voter sign up the Alabama webpage.
*/
db.serialize( () => {
	const sqlTable =  ("CREATE TABLE IF NOT EXISTS AlabamaSignUp (ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, userDate DATETIME NOT NULL DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')), userRegistrationCode VARCHAR (25) NOT NULL, userFirstName VARCHAR (150) NOT NULL, userMiddleName VARCHAR (150) NOT NULL, userLastName VARCHAR(150) NOT NULL, userSuffix VARCHAR(5) NOT NULL, userIdType VARCHAR(50) NOT NULL, userEmail VARCHAR (255) NOT NULL, userConfirmEmail VARCHAR (255) NOT NULL, userAddress VARCHAR (300) NOT NULL, userCountrySelection VARCHAR (50) NOT NULL, userStateSelection VARCHAR (50) NOT NULL, userCountySelection VARCHAR (50) NOT NULL, userCitySelection VARCHAR (50) NOT NULL, userZipSelection VARCHAR (50) NOT NULL)");
		
	db.run(sqlTable, (error) => {       
	
		if (error) {
			console.log('Developer has created an Alabama Sign Up SQLite3 database table which is not programmatically coded correctly and contain an error of: ' + error + '!');
		} else {
			console.log('Developer has successfully created an Alabama Sign Up Sqlite3 database table which is programmatically coded correctly!');   
		}
	});        
});

const createAlabamaSignUpDatabase = ('/alabamasignup', (req, res, next,) => {   
		
	res.redirect(301, 'http://localhost:3000/view_Home.html');
	console.log('The user inserted data information texts from body-parser section had been successfully loaded into the iVoteBallot\s SQLite3 database , ' + Date());   
	
/* 
Sarai Hannah Ajai has written her JavaScript programmatic codes which will specify each time an user enter
his/her data fields information onto the AccouNetrics' Contact Us webpage the constant ("const") 'data' will
capture the user input fields information from the middleware parser.
*/
	var data = {		
		userRegistrationCode: req.body.userRegistrationCode,
		userFirstName: req.body.userFirstName,
		userMiddleName: req.body.userMiddleName, 
		userLastName: req.body.userLastName,
		userSuffix: req.body.userSuffix,
		userIdType: req.body.userIdType,
		userEmail: req.body.userEmail,
		userConfirmEmail: req.body.userConfirmEmail,
		userAddress: req.body.userAddress,
		userCountrySelection: req.body.userCountrySelection,
		userStateSelection: req.body.userStateSelection,
		userCountySelection: req.body.userCountySelection,
		userCitySelection: req.body.userCitySelection,
		userZipSelection: req.body.userZipSelection	
					
	}     
			
	console.log(req.body);
	console.log('User/Voter alphanumeric registration code is: ' + data.userRegistrationCode + '.');
	console.log('User first name is: ' + data.userFirstName + '.');
	console.log('User middle name is: ' + data.userMiddleName + '.');
	console.log('User last name is: ' + data.userLastName + '.');
	console.log('User male suffix name is: ' + data.userSuffix + '.');
	console.log('User type of identification card is the: ' + data.userIdType + '.');
	console.log('User email address is: ' + data.userEmail + '.');
	console.log('User confirm email address is: ' + data.userConfirmEmail + '.');	
	console.log('User residential address is: ' + data.userAddress + '.');	
	console.log('User permanent country is: ' + data.userCountrySelection + '.');	
	console.log('User permanent state is: ' + data.userStateSelection + '.');
	console.log('User permanent county is: ' + data.userCountySelection + '.');
	console.log('User permanent city is: ' + data.userCitySelection + '.');
	console.log('User permanent zip is: ' + data.userZipSelection + '.');

	var sqlInsert = 'INSERT INTO AlabamaSignUp (userRegistrationCode, userFirstName, userMiddleName, userLastName, userSuffix, userIdType, userEmail, userConfirmEmail, userAddress, userCountrySelection, userStateSelection, userCountySelection, userCitySelection, userZiptSelection) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
	var params = [data.userRegistrationCode, data.userFirstName, data.userMiddleName, data.userLastName, data.userSuffix, data.userIdType, data.userEmail, data.userConfirmEmail, data.userAddress, data.userCountrySelection, data.userStateSelection, data.userCountySelection, data.userCitySelection, data.userZipSelection];
	
		db.run(sqlInsert, params, function (err, result) {
			if (err) {
				res.redirect(302, 'http://localhost:3000/view_Home.html');
				console.log('An syntax error has occurred during user\s contact us input fields from DOM submission with a 500 error message webpage display onto the user device screen.'); 
				return false;				
			} else {
				console.log('The user data information typed into the input fields section has been successfully parsed into the iVoteBallot\s SQLite3 database. ' + Date());
				return true;
			}

		});	
			
		
		
	});
	

module.exports = {
	db,        
	alabamaSignUp_Router,
    createAlabamaSignUpDatabase,
	
}
  