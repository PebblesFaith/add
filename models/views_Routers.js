const express = require('express');
const views_Controller = require('../controllers/views_Controller');
const router = express.Router();

router
    .get('/', views_Controller.view_AboutUs);

router
    .get('/', views_Controller.view_Alabama_SignUp_Registration);

router
    .get('/', views_Controller.view_Alabama_SignUp_Voters);

router
    .get('/', views_Controller.view_Home);




module.exports = router;
