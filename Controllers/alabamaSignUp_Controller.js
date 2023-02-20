/*
Sarai Hannah Ajai has imported the 'express' API library and she has assigned a constant; in order to import an Express module
library application that connect with HTTP and middleware in Node.js back-end server (index.js) for accepting HTTP requests and responses.
 */
const express = require('express');

/*
Sarai Hannah Ajai has initialized the constant ('iVoteBallot') object for calling the return 'express' constant from the Express
module library application.
*/
const iVoteBallotApp = express();

/*
Sarai Hannah Ajai has imported the 'sqlite3' API database library and she has assigned a constant to it; in order to be use for her written JavaScript 
programmatic codes language which has allowed her to interact with SQLite3 database from the NODE.js application using the SQLite3 module library. In
which, she will be able to open a database connection and perform specified common database operations.
*/
const sqlite3 = require('sqlite3').verbose();

const bcrypt = require('bcrypt');

/*
Sarai Hannah Ajai has created the “. dotenv” API library which will store AccouNetrics web application environment into a 
specified configurations and settings that will automatically load the “.env” file in the root of AccouNetrics’ NPM project 
and initialize hidden passthrough values from variables/constants such as, her personal passwords, settings, or API credentials.
In order for Sarai Hannah Ajai to avoid hard coding her personal passwords, settings, or API credentials into the AccouNetrics’ 
NPM project.
*/

require('dotenv').config();
const IONOS_SECRET_KEY = process.env.IONOS_SECRET_KEY;
const EXPRESS_SESSION_KEY = process.env.EXPRESS_SESSION_KEY;
const SESSION_MAX_AGE = process.env.SESSION_MAX_AGE;

/*
Sarai Hannah Ajai has imported the 'nodemailer' constant from using her written JavaScript programmatic codes which has allowed her
to interact with nodemailer SMTP from the NODE.js application using the nodemailer module library. 
*/
const nodemailer = require('nodemailer');

/*
Sarai Hannah Ajai has used the 'iVoteBallot' Express object in order to set her middleware for server static or
public files which will invokes her 'accouNetricsApp.use()' method which is a method to confirgure her middlewares used
by those specified routes of the Express HTTP server object. Specifically, 'iVoteBallot.use()' acts, as a
middleware in an Express module library.
*/

iVoteBallotApp.use(express.json());
iVoteBallotApp.use(express.urlencoded({ extended: true }));

/*
Sarai Hannah Ajai has created the 'alabama_SignUp_Controller.js' file/module for handling her export SQLite3's user/voter data
information passthrough sent to the models folder and executed from the 'alabama_SignUp_Router.js' file/module, as a route
callback from the server ("index.js").
*/
const alabamaSignUp_Router = require('../models/alabamaSignUp_Router');

/*
Sarai Hannah Ajai had JavaScript programmatically coded an create and open "database_Alabama_SignUp.db" (database) connection.
*/

const db = new sqlite3.Database('database_Alabama_SignUp.db', error => {
	if (error) {
		console.log('Developer has created an Email Address Sign Up Sqlite3 database connection which has a programmatically codes error, as: ' + error + '!');        
	} else {
		console.log('Developer has successfully created an Email Address Sign Up Sqlite3 database connection from her programmatic codes abilities!');
		
	}
});

/*
Sarai Hannah Ajai had JavaScript programmatically coded SQLite3; in order to create/update an automatic SQLite3's 
JavaScript table each time an iVoteBallot's user/voter sign up the Alabama webpage.
*/
db.serialize( () => {
	const sqlTable =  ("CREATE TABLE IF NOT EXISTS AlabamaSignUp (ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, userDate DATETIME NOT NULL DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')), userRegistrationCode VARCHAR (25) NOT NULL, userFirstName VARCHAR (150) NOT NULL, userMiddleName VARCHAR (150) NOT NULL, userLastName VARCHAR(150) NOT NULL, userSuffix VARCHAR(5) NOT NULL, userEmail VARCHAR (255) NOT NULL, userConfirmEmail VARCHAR (255) NOT NULL, userPhoneNumber VARCHAR (15) NOT NULL, userAddress VARCHAR (400) NOT NULL, userUnitType VARCHAR (50) NOT NULL, userUnitTypeNumber VARCHAR (10) NOT NULL, userCountrySelection VARCHAR (50) NOT NULL, userStateSelection VARCHAR (150) NOT NULL, userCountySelection VARCHAR (150) NOT NULL, userCitySelection VARCHAR (150) NOT NULL, userZipSelection VARCHAR (50) NOT NULL, userIdType VARCHAR (250) NOT NULL, userIdTypeNumber VARCHAR (50) NOT NULL, userPassword VARCHAR (50) NOT NULL, userConfirmPassword VARCHAR (50) NOT NULL, userPoliciesAgreements VARCHAR (5) NOT NULL, userVerifyEmailAddress VARCHAR (7) NOT NULL)");
		
	db.run(sqlTable, (error) => {       
	
		if (error) {
			console.log('Developer has created an Alabama Sign Up SQLite3 database table which is not programmatically coded correctly and contain an error of: ' + error + '!');
		} else {
			console.log('Developer has successfully created an Alabama Sign Up Sqlite3 database table which is programmatically coded correctly!');   
		}
	});   
    
});

const createAlabamaSignUpDatabase = ('/alabamasignup', async(req, res, next,) => { 	
        
    res.redirect(301, 'http://localhost:3001/view_LoginRegistrationsConfirm_ByEmail.html');
    console.log('The user inserted data information texts from body-parser section had been successfully loaded into the iVoteBallot\s SQLite3 database , ' + Date());   

	/*
	Sarai Hannah Ajai have written her JavaScript programmatic codes language to include the 'Bcrypt' API 
	Library for hashing and salting user's 'PASSWORD' from an one-way process of securing his/her 'PLAIN
	TEXT PASSWORD' by creating a bit string of a fixed size called 'HASH' crypotographic hash function[s]/
	variable[s]. In which, the crypotographic hash function[s]/variable[s] designed to be a one-way function[s]/
	variable[s] that is, a crypotographic function[s]/variable[s] which in infeasible to invert by ways of express passport.
	*/
    
    const salt = await bcrypt.genSalt(13);  
    const hashedPassword = await bcrypt.hash(req.body.userPassword, salt);  
    const confirmHashedPassword = await bcrypt.hash(req.body.userConfirmPassword, salt);
    
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
        userEmail: req.body.userEmail,
        userConfirmEmail: req.body.userConfirmEmail,
        userPhoneNumber: req.body.userPhoneNumber,
        userAddress: req.body.userAddress,
        userUnitType: req.body.userUnitType,
        userUnitTypeNumber: req.body.userUnitTypeNumber,
        userCountrySelection: req.body.userCountrySelection,
        userStateSelection: req.body.userStateSelection,
        userCountySelection: req.body.userCountySelection,
        userCitySelection: req.body.userCitySelection,
        userZipSelection: req.body.userZipSelection,
        userIdType: req.body.userIdType,
        userIdTypeNumber: req.body.userIdTypeNumber,
        userPassword: hashedPassword,
        userConfirmPassword: confirmHashedPassword,
        userPoliciesAgreements: req.body.userPoliciesAgreements,
        userVerifyEmailAddress: req.body.userVerifyEmailAddress
                    
    }     
            
    console.log(req.body);
    console.log('User/Voter alphanumeric registration code is: ' + data.userRegistrationCode + '.');
    console.log('User first name is: ' + data.userFirstName + '.');
    console.log('User middle name is: ' + data.userMiddleName + '.');
    console.log('User last name is: ' + data.userLastName + '.');
    console.log('User male suffix name is: ' + data.userSuffix + '.');
    console.log('User email address is: ' + data.userEmail + '.');
    console.log('User confirm email address is: ' + data.userConfirmEmail + '.');   
    console.log('User phone number is: ' + data.userPhoneNumber + '.');
    console.log('User permanent address is: ' + data.userAddress + '.');    
    console.log('User unit type is: ' + data.userUnitType + '.');   
    console.log('User unit type number is: ' + data.userUnitTypeNumber + '.');
    console.log('User country he/she lives in is: ' + data.userCountrySelection + '.');
    console.log('User state he/she lives in is: ' + data.userStateSelection + '.');
    console.log('User county he/she lives in is: ' + data.userCountySelection + '.');
    console.log('User city he/she lives in is: ' + data.userCitySelection + '.');
    console.log('User zip code area he/she lives in is: ' + data.userZipSelection + '.');
    console.log('User identification card type is: ' + data.userIdType + '.');
    console.log('User identification card alphanumeric characters are: ' + data.userIdTypeNumber + '.');
    console.log('User password is: ' + data.userPassword + '.');
    console.log('User confirm password is: ' + data.userConfirmPassword + '.');
    console.log('User have agreed to all Policies Agreements: ' + data.userPoliciesAgreements + '.');
    console.log('User verify email address is: ' + data.userVerifyEmailAddress + '.');    

    /*
    Sarai Hannah Ajai has generated a test SMTP service account; in order to receive AccouNetrics' customercare@ionos.com emails from the 
    'transporter' constant object from the AccouNetrics' users which pass through the 'nodemailer' API library.
    */
    const transporter = nodemailer.createTransport ({
        host: 'smtp.ionos.com',
        port: 587,
        //secure: true,
        auth: {
            user: 'testdevelopmentenvcustomercare@ivoteballot.com',
            pass: IONOS_SECRET_KEY,
        }
    });
        
    /*
    Sarai Hannah Ajai has written her JavaScript programmatic codes for creating a usable 'transporter' constant object by ways of
    using the default SMTP transporter nodemailer API library.
    */
    const mailOptions_01 = {
        from: req.body.userEmail,
        to: 'testdevelopmentenvcustomercare@ivoteballot.com', 
        subject: `iVoteBallot New Voter Registration`,  
        text: `iVoteBallot new online create account name is:
        ${req.body.userFirstName} ${req.body.userMiddleName} ${req.body.userLastName}
        and ${req.body.userFirstName} ${req.body.userMiddleName} ${req.body.userLastName} has been sent a verification code registration to be verify by his/her 
        email address account at, ${req.body.userEmail}.`,		
    };

    const mailOptions_02 = {
        from: 'testdevelopmentenvcustomercare@ivoteballot.com',
        to: req.body.userConfirmEmail, 
        subject: `Your iVoteBallot's Email Address Sign Up Verification Code Registration'`,
        text: `
        
        Dear ${req.body.userFirstName} ${req.body.userMiddleName} ${req.body.userLastName}:

        Your login verification code registration has been sent to your email address account.

        Please click onto the link in order to verify your email addess http://localhost:3001/view_Verify_link.html      

               
        and, your verification code will expire in 10 minutes.
        
        Respectfully Yours,

        iVoteBallot's Customer Care Team
        
        `,			
    };

    
    /*
    Sarai Hannah Ajai has written her JavaScript programmatic codes to send an user test email to AccouNetrics' customercare@accounetrics.com
    email account with nodemailer defined transporter object.
    */
    transporter.sendMail(mailOptions_01, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');

        } else {
            console.log('Email Sent: ' + info.response);
            res.send('success!');
        }
    });

    transporter.sendMail(mailOptions_02, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');				

        } else {
            console.log('Email Sent: ' + info.response);            
            
            //Prompt user to verify email address
            const verificationLink = `http://localhost:3001/view_Verify_Link.html?userEmail=req.body.userEmail`
            //Generate Bcrypt hash for verification link.
            const verificationHashed = bcrypt.hashSync(verificationLink).toString();
            //Create an HTML document to prompt user to click onto the link.
            html: '<title>Verify Email address</title> </head> <body> <h2>Please click onto the link below to verify your email address</h2> <ahref="${verificationLink}"> Verify</a> <p>Thank you for signing up with us.</p> </body> </html> '


             // If the verify link matches to the stored Bcrypt hash
            if (bcrypt.compareSync(verificationLink, verificationHashed)) {

                var sqlInsert = 'INSERT INTO AlabamaSignUp (userRegistrationCode, userFirstName, userMiddleName, userLastName, userSuffix, userEmail, userConfirmEmail, userPhoneNumber, userAddress, userUnitType, userUnitTypeNumber, userCountrySelection, userStateSelection, userCountySelection, userCitySelection, userZipSelection, userIdType, userIdTypeNumber,userPassword, userConfirmPassword, userPoliciesAgreements, userVerifyEmailAddress) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                var params = [data.userRegistrationCode, data.userFirstName, data.userMiddleName, data.userLastName, data.userSuffix, data.userEmail, data.userConfirmEmail, data.userPhoneNumber, data.userAddress, data.userUnitType, data.userUnitTypeNumber, data.userCountrySelection, data.userStateSelection, data.userCountySelection, data.userCitySelection, data.userZipSelection, data.userIdType, data.userIdTypeNumber, data.userPassword, data.userConfirmPassword, data.userPoliciesAgreements, data.userVerifyEmailAddress];
            
                db.run(sqlInsert, params, function (err, result) {
                    if (err) {
                        res.redirect(302, 'http://localhost:3001/views/view_Verify_Link.html');
                        console.log('An syntax error has occurred during user\s contact us input fields from DOM submission with a 500 error message webpage display onto the user device screen.'); 
                        return false;               
                    } else {
                        console.log('The user data information typed into the input fields section has been successfully parsed into the iVoteBallot\s SQLite3 database. ' + Date());
                        return true;
                    }
                });
            };                  
        };
    });


});	
		
module.exports = {
    db,        
    alabamaSignUp_Router,
    createAlabamaSignUpDatabase,
   
    
}


  




