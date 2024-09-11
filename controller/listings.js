const Listing=require("../models/listing.js")
const Review=require("../models/review.js");
const {isLoggedin, isOwner,validiateListing}=require("../middleware.js");



module.exports.index=async(req,res)=>{
    const allListings= await Listing.find({});
    res.render("./listing/index.ejs",{allListings});
};

module.exports.renderNewForm=(req,res)=>{
    res.render("./listing/new.ejs");
}

module.exports.showListing=async(req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id)
    .populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if(!listing){
        req.flash("error","LIsting you are requested for does not exist");
        res.redirect("/listings");
    }
    // console.log(listing);
    res.render("listing/show.ejs",{listing});
}

module.exports.createListing=async(req,res,next)=>{
    let url =req.file.path;
    let filename=req.file.filename;

    let newListing = new Listing(req.body.listing);
    
    newListing.owner=req.user._id;

    newListing.image={url,filename};
    await newListing.save();
    req.flash("success","New Listing Added Successfully");
    res.redirect("/listings");

}

module.exports.editListing=async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","LIsting you are requested for does not exist");
        res.redirect("/listings");
    }

    let originalImgUrl=listing.image.url;
    originalImgUrl=originalImgUrl.replace("/upload","/upload/w_250");

    res.render("./listing/edit.ejs",{listing,originalImgUrl});
}

module.exports.putListing=async(req,res)=>{
    let {id}=req.params;
  
    let listing= await Listing.findByIdAndUpdate(id,{...req.body.listing});

    if(typeof req.file!=="undefined"){
    let url =req.file.path;
    let filename=req.file.filename;
    listing.image={url,filename};
    await listing.save();
    }
    req.flash("success","Listing Successfully Edited");
    res.redirect(`/listings/${id}`)

}

module.exports.deleteListing=async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Successfully Deleted");
    res.redirect("/listings") 
}