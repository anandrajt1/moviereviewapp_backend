const express = require('express')
const {getAllReviews, addReview}=require('../controllers/reviewController')
const router = express.Router()


router.get('/',getAllReviews)

router.post('/review',addReview)

module.exports = router