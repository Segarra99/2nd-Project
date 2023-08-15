const express = require('express');
const router = express.Router();
const ClimbingRoute = require('../models/ClimbingRoute.model');
const User = require('../models/User.model');
const fileUploader = require('../config/cloudinary.config');
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


router.get("/profile/:id", async(req, res) => {
    try{
        let {id} = req.params;
        let user = await User.findById(id)
        res.render("/user/profile", {user: user});
    } 
    catch(error){
        console.log(error);
    }
  });

  module.exports = router;