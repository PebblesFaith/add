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

//const SQLiteStore = require('connect-sqlite3')(express);
const session = require('express-session');
//const SQLiteStore = require('connect-sqlite3')(session);

const sqliteDB = require("better-sqlite3");

const Sqlite3SessionStore = require("better-sqlite3-session-store")(session);

const passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

const db = new sqliteDB("user_Login_Sessions.db", { verbose: console.log('Session login has been successfully created.') });

require('dotenv').config();
const IONOS_SECRET_KEY = process.env.IONOS_SECRET_KEY;
const EXPRESS_SESSION_KEY = process.env.EXPRESS_SESSION_KEY;
const SESSION_MAX_AGE = process.env.SESSION_MAX_AGE;

/*
Sarai Hannah Ajai has defined the 'path' constant from using her written JavaScript programmatic codes which has assisted her to import the 
'path' module library which has provided her a way of working with HTML directories and file paths.
*/
const path = require('path');

/*
Sarai Hannah Ajai has imported the 'nodemailer' constant from using her written JavaScript programmatic codes which has allowed her
to interact with nodemailer SMTP from the NODE.js application using the nodemailer module library. 
*/
const nodemailer = require('nodemailer');


const alabamaSignUp_Controller = require('./models/alabamaSignUp_Router');

/*
Sarai Hannah Ajai has initialized the 'port' constant which is used by NODE.js when she runs the 3000 'port' server which
serves, as an internet connection gateway command prompt connectivities that allows her to views HTML files from the
local host 'port' 1180 on the internet. 
*/
const port = 3001; 

/*
Sarai Hannah Ajai has used the 'iVoteBallot' Express object in order to set her middleware for server static or
public files which will invokes her 'iVoteBallotuse()' method which is a method to confirgure her middlewares used
by those specified routes of the Express HTTP server object. Specifically, 'iVoteBallot.use()' acts, as a
middleware in an Express module library.
*/
iVoteBallotApp.use(express.json());
iVoteBallotApp.use(express.urlencoded({ extended: false }));

/*
Sarai Hannah Ajai has used the 'VoteBallot's Express object in order to set her middleware for server web pages routes
files which will invokes her 'iVoteBallotApp.use()' method which is a method to confirgure her middlewares used by those 
specified routes of the Express HTTP server object. Specifically, 'iVoteBallotApp.use()' acts, as a middleware in
an Express module library. */

iVoteBallotApp.use('/alabamasignup', require('./models/alabamaSignUp_Router'));
iVoteBallotApp.use(alabamaSignUp_Controller);

/*
Sarai Hannah Ajai has assigned her 'iVoteBallot' express object in order to starts and listen onto the 'port' server 1180 from the internet connectivities which has specified a error callback function which will invoked whenever there
is a server connection problems.
*/

iVoteBallotApp.listen(port, function(err) {
	if (err) {
		console.log('There is a problem loading iVoteBallot prototype port 1180' + err);
	} else {	
		console.log('The Nodejs in conjunction with Express framework is listening onto port ' + port + ' for iVoteBallot prototype.');
	}
});

iVoteBallotApp.use(express.static(path.join(__dirname, '/public')));
iVoteBallotApp.use('/views', express.static(path.join(__dirname, 'public')));
iVoteBallotApp.use(express.static(__dirname + '/public/views'));


/*
Sarai Hannah Ajai has used the 'iVoteBallot' Express object; in order to set her middleware which will invokes her 
'iVoteBallot.get() method whenever there is a HTTP GET request with the path ('path.join(__dirname, '/public/view_ContactUs.html')
relative to the 'view_ContactUs' webpage root.
*/
iVoteBallotApp.get('/alabamasignup', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/view_Home.html'));
    //console.log(res);
});

/*
Sarai Hannah Ajai will need the ability to indentify user[s] authentications login; as well as, while the user[s] are browsing from iVoteBallot'
webpages through a series of a HTTP's requests and responses to which, are associated with the same user[s] SESSION COOKIES from a HTTP's requests. 
So, the SESSION COOKIES will allow user[s] HTTP's requests and responses LOGIN state to be maintained between the iVoteBallot's application server 
(index.js) and the user[s] device browser[s]. And, the SESSION COOKIES is established by setting an user[s] LOGIN HTTP's requests in his/her device
browser then the user[s] HTTP's requests are tranmitted to the iVoteBallot's back-end server (index.js) on every HTTP's requests. And, the 
iVoteBallot's back-end server (index.js) uses the value assigned SESSION COOKIES; in order to retrieve the user[s] SQLite3 database information it 
needs across multiple requests. Therefore, the SESSION COOKIES creates a stateful protocol to of HTTP is as follows:

iVoteBallot must initializes the SESSION support; in order to make use of user[s] HTTP's LOGIN requests SESSION COOKIES, and the EXPRESS API
application, SESSION COOKIES support is added by using EXPRESS-SESSION middleware.

*/
iVoteBallotApp.use(
	session({
		store: new Sqlite3SessionStore ({
			client: db, 
			collection: 'user_Login_Session.db',	
			dir: 'database_Alabama_SignUp.db',
			
			cookie: {
				secure: true,
				httpOnly: true,
				maxAge: parseInt(SESSION_MAX_AGE) // 1 hour or millisecond
			
			}			
		}),
		secret: EXPRESS_SESSION_KEY,		
		saveUninitialized: false, 
		resave: false,

	})		
);

/*
Initalize Passport and restore authentication state, if any, from the session.
*/
iVoteBallotApp.use(passport.initialize());
iVoteBallotApp.use(passport.session());

