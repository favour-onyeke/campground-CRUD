
const express = require('express');
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');
const Campground = require('../models/campground');
const Review = require('../models/review');
const catchAsync = require('../utils/catchAsync');
const reviewroutes = require('../controllers/reviews')

router.post('/', isLoggedIn, validateReview, catchAsync(reviewroutes.createReview))

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviewroutes.deleteReview))

module.exports = router;