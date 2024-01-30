const Movie = require("../models/movieModel")

const addMovie=async (req,res,next)=>{
    try {
        const movie= new Movie(req.body)
        await movie.save()
        res.status(201).json(movie)
        
    } catch (error) {
        res.status(400).send("Check fields!")
        
    }
}

const getAllMovies=async (req,res,next)=>{
    try {
        const movies=await Movie.find()
         
        res.status(200).json(movies)
        
    } catch (error) {
        res.status(500).send("Internal server error!")
        
    }
}

const getMoviebySlug=async (req,res,next)=>{
    try {
        const movie=await Movie.findOne({slug:req.params.slug})
         
        res.status(200).json(movie)
        
    } catch (error) {
        res.status(404).send("Movie with given id not found !")
        
    }
}


module.exports={addMovie,getAllMovies,getMoviebySlug}