 /*
Sarai Hannah Ajai has created a constant ('express') in order to import an Express module library application that connect
with HTTP and middleware in Node.js back-end server (index.js) for accepting HTTP requests and responses.
 */
const express = require('express');

/* 
Sarai Hannah Ajai has imported the 'bodyParser' by way of creating a constant object which will return the middleware that
only parses the urlendcoded bodies and only looks at the requests where Content-Type header matches the type option than 
a new body object containing the parsed data is populated on the request object after, the middleware (i.e. req.body). 
This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type 
(when extended is true). And, the extended option allows to choose between parsing the URL-encoded data with the querystring
library (when false) or the querystring library (when true). The 'extended' syntax allows for rich objects and arrays to be
encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
*/
const bodyParser = require('body-parser');

 /*
Sarai Hannah Ajai has created an 'alabama_SignUp_Controller'constant; in order to import the 'alabama_SignUp_Controller.js'
file/module which will call the controller function to the URL router from the server ('index.js').
 */
const alabamaSignUp_Controller = require('../Controllers/alabamaSignUp_Controller');



const router = express.Router();

// Post Middleware Body_Parser in order to pass data
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router    
    .post('/alabamasignup', alabamaSignUp_Controller.createAlabamaSignUpDatabase);


module.exports = router; 

