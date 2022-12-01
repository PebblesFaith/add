const views_Routers = require('../models/views_Routers');
const path =require('path');

const view_Home = (req, res) => {
    res.sendFile(path.join(__dirname, './views/view_Home.html'));
};

const Alabama_SignUp_Voters = (req, res) => {
    res.sendFile(path.join(__dirname, './views/view_Alabama_SignUp_Voters.html'));
};


module.exports = {    
    view_Home,
    view_Alabama_SignUp_Voters
    

}




