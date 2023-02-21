const views_Routers = require('../models/views_Routers');
const path =require('path');

const view_AboutUs = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/view_AboutUs'));
};

const view_Alabama_SignUp_Registrations = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/view_Alabama_SignUp_Registrations'));
};

const view_Alabama_SignUp_Voters = (req, res) => {
    res.sendFile(path.join(__dirname, './views/view_Alabama_SignUp_Voters'));
};

const view_Home = (req, res) => {
    res.sendFile(path.join(__dirname, './views/view_Home.html'));
};

const view_Login_Voters = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/view_Login_Voters'));
};

const view_LoginRegistrationsConfirm_ByEmail = (req, res) => {
    res.sendFile(path.join(__dirname, './views/view_LoginRegistrationsConfirm_ByEmail'));
};

// Define a route for handling email verfification.
const view_Verify_Link = (req, res) => {
    res.sendFile(path.join(__dirname, './views/view_Verify_Link'));
};


module.exports = {  
    view_AboutUs,
    view_Alabama_SignUp_Registrations,
    view_Alabama_SignUp_Voters,
    view_Home,
    view_Login_Voters, 
    view_LoginRegistrationsConfirm_ByEmail,
    view_Verify_Link  
    

}




