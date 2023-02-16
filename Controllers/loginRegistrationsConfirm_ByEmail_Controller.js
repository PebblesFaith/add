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
