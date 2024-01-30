const Review = require("../models/reviewModel")

const addReview=async (req,res,next)=>{
    try {
        const review= new Review(req.body)
        await review.save()
        res.status(201).json(review)
        
    } catch (error) {
        res.status(400).send("Check fields!")
        
    }
}

const getAllReviews=async (req,res,next)=>{
    try {
        const reviews=await Review.find()
         
        res.status(200).json(reviews)
        
    } catch (error) {
        res.status(500).send("Internal server error!")
        
    }
}




module.exports={addReview,getAllReviews,}