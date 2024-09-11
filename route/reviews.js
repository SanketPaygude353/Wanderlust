const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const Review=require("../models/review.js");
const Listing=require("../models/listing.js");
const {validateReview, isLoggedin,isReviewAuthor}=require("../middleware.js");
const reviewController=require("../controller/reviews.js");

//create route
router.post("/",isLoggedin,validateReview,wrapAsync(reviewController.createReview));

//delete route
router.delete("/:reviewid",isLoggedin,isReviewAuthor,wrapAsync(reviewController.deleteReview));

module.exports=router;