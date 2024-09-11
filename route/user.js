const express=require("express");
const router=express.Router();
// const User = require("../models/users.js");
const passport = require("passport");
const { saveRedirectUrl} = require("../middleware.js");
const userController=require("../controller/users.js")


router.route("/signup").
get(userController.renderSignup)
.post(userController.signUp)

router.route("/login")
.get(userController.renderLogin)
.post(
    saveRedirectUrl,
    passport.authenticate("local",
        {failureRedirect:'/login', 
            failureFlash:true}),
            userController.login
        );

router.get("/logout",userController.logout);
module.exports=router;