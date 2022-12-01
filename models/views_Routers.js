const express = require('express');
const views_Controller = require('../controllers/views_Controller');
const router = express.Router();

router
    .get('/', views_Controller.view_Home);

    router
    .get('/', views_Controller.view_Alabama_SignUp_Voters);


module.exports = router;
