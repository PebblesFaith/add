const express = require('express');
const views_Controller = require('../controllers/views_Controller');
const router = express.Router();

router
    .get('/', views_Controller.view_AboutUs);

router
    .get('/', views_Controller.view_Alabama_SignUp_Registrations);

router
    .get('/', views_Controller.view_Alabama_SignUp_Voters);

router
    .get('/', views_Controller.view_Home);

router
    .get('/', views_Controller.view_Login_Voters);

router
    .get('/', views_Controller.view_LoginRegistrationsConfirm_ByEmail);

router
    .get('/', views_Controller.view_Verify_Link);

router
    







module.exports = router;
