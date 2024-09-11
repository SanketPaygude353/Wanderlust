const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedin, isOwner,validiateListing}=require("../middleware.js");
const listingController=require("../controller/listings.js");
const multer=require("multer");
const {storage}=require("../cloudConfig.js")
const upload=multer({storage});


router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedin,upload.single('listing[image]'),validiateListing,wrapAsync(listingController.createListing))


//New route
router.get("/new",isLoggedin,listingController.renderNewForm);


router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedin,isOwner,upload.single('listing[image]'),validiateListing,wrapAsync(listingController.putListing))
.delete(isLoggedin,isOwner,wrapAsync(listingController.deleteListing))


//edit
router.get("/:id/edit",isLoggedin,isOwner,wrapAsync(listingController.editListing));



module.exports=router;