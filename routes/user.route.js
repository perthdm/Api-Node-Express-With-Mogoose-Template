const express = require('express');
const userCon = require('../controllers/user.controller');


module.exports = function(app){
    app.post('/register' , userCon.register);
  
  };
  
