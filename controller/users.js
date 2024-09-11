
const User = require("../models/users.js");

module.exports.renderSignup=(req,res)=>{
    res.render("users/signup.ejs")
}


module.exports.signUp=async(req,res)=>{
    try{
        let {username,email,password}=req.body;
        const newUser=new User({email,username});
        const rUser=await User.register(newUser,password);
        // console.log(rUser);
        req.login(rUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Welcome To Wanderlust");
            res.redirect("/listings");
        })
    }catch(e){
      
        req.flash("error",e.message);
        res.redirect("/signup");
    }
}


module.exports.renderLogin=(req,res)=>{
    res.render("users/login.ejs")
}


module.exports.login=async(req,res)=>{
    req.flash("success","Welcome back");
    let redirectUrl=res.locals.redirectUrl||"/listings";
    res.redirect(redirectUrl);
}

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        return next(err);
    })
    req.flash("success","You are logged out");
    res.redirect("/listings");
}

