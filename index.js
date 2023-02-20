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

/*
Sarai Hannah Ajai has defined the 'path' constant from using her written JavaScript programmatic codes which has assisted her to import the 
'path' module library which has provided her a way of working with HTML directories and file paths.
*/
const path = require('path');

const alabamaSignUp_Controller = require('./models/alabamaSignUp_Router');

/*
Sarai Hannah Ajai has initialized the 'port' constant which is used by NODE.js when she runs the 3000 'port' server which
serves, as an internet connection gateway command prompt connectivities that allows her to views HTML files from the
local host 'port' 1180 on the internet. 
*/
const port = 3001; 

/*
Sarai Hannah Ajai has used the 'iVoteBallot' Express object in order to set her middleware for server static or
public files which will invokes her 'accouNetricsApp.use()' method which is a method to confirgure her middlewares used
by those specified routes of the Express HTTP server object. Specifically, 'iVoteBallot.use()' acts, as a
middleware in an Express module library.
*/
iVoteBallotApp.use(express.json());
iVoteBallotApp.use(express.urlencoded({ extended: true }));

/*
Sarai Hannah Ajai has used the 'accouNetricsApp' Express object in order to set her middleware for server web pages routes
files which will invokes her 'accouNetricsApp.use()' method which is a method to confirgure her middlewares used by those 
specified routes of the Express HTTP server object. Specifically, 'accouNetricsApp.use()' acts, as a middleware in
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
Sarai Hannah Ajai has used the 'accouNetricsApp' Express object; in order to set her middleware which will invokes her 
'accouNetricsApp.get() method whenever there is a HTTP GET request with the path ('path.join(__dirname, '/public/view_ContactUs.html')
relative to the 'view_ContactUs' webpage root.
*/
iVoteBallotApp.get('/alabamasignup', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/view_Home.html'));
    //console.log(res);
});

