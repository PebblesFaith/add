/*
Sarai Hannah Ajai has imported the 'express' API library and she has assigned a constant; in order to import an Express module
library application that connect with HTTP and middleware in Node.js back-end server (index.js) for accepting HTTP requests and responses.
 */
const express = require('express');

/*
Sarai Hannah Ajai has initialized the constant ('iVoteBallot') object for calling the return 'express' constant from the Express
module library application.
*/
const iVoteBallot = express();

/*
Sarai Hannah Ajai has defined the 'path' constant from using her written JavaScript programmatic codes which has assisted her to import the 
'path' module library which has provided her a way of working with HTML directories and file paths.
*/
const path = require('path');

/*
Sarai Hannah Ajai has initialized the 'port' constant which is used by NODE.js when she runs the 3000 'port' server which
serves, as an internet connection gateway command prompt connectivities that allows her to views HTML files from the
local host 'port' 1180 on the internet. 
*/
const port = 1180; 

/*
Sarai Hannah Ajai has assigned her 'iVoteBallot' express object in order to starts and listen onto the 'port' server 1180 from the internet connectivities which has specified a error callback function which will invoked whenever there
is a server connection problems.
*/

iVoteBallot.listen(port, function(err) {
	if (err) {
		console.log('There is a problem loading iVoteBallot prototype port 1180' + err);
	} else {	
		console.log('The Nodejs in conjunction with Express framework is listening onto port ' + port + ' for iVoteBallot prototype.');
	}
});

iVoteBallot.use(express.static(path.join(__dirname, '/public')));
iVoteBallot.use('/views', express.static(path.join(__dirname, 'public')));
iVoteBallot.use(express.static(__dirname + '/public/views'));

/*
Sarai Hannah Ajai has used the 'iVoteBallot' Express object in order to set her middleware for server static or
public files which will invokes her 'accouNetricsApp.use()' method which is a method to confirgure her middlewares used
by those specified routes of the Express HTTP server object. Specifically, 'iVoteBallot.use()' acts, as a
middleware in an Express module library.
*/
iVoteBallot.use(express.json());
iVoteBallot.use(express.urlencoded({ extended: true }));