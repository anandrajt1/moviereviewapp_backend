const express = require('express')
const { getAllMovies, getMoviebySlug, addMovie } = require('../controllers/movieController')
const router = express.Router()


router.get('/',getAllMovies)
router.get('/:slug',getMoviebySlug)
router.post('/movie',addMovie)

module.exports = router
