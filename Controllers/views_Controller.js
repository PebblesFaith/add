const views_Routers = require('../models/views_Routers');
const path =require('path');

const view_AboutUs = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/view_AboutUs'));
};

const view_Login_Voters = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/view_Login_Voters'));
};

const view_Alabama_SignUp_Registrations = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/view_Alabama_SignUp_Registrations'));
};

const Alabama_SignUp_Voters = (req, res) => {
    res.sendFile(path.join(__dirname, './views/view_Alabama_SignUp_Voters'));
};

const view_Home = (req, res) => {
    res.sendFile(path.join(__dirname, './views/view_Home.html'));
};

module.exports = {  
    view_AboutUs, 
    view_Login_Voters, 
    view_Alabama_SignUp_Registrations,
    view_Alabama_SignUp_Voters,
    view_Home
    
    

}




