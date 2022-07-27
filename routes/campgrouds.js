
const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const campgroundroutes = require('../controllers/campgrounds');
const {storage} = require('../cloudinary')
const multer  = require('multer')
const upload = multer({ storage })

const Campground = require('../models/campground');

router.route('/')
.get(catchAsync(campgroundroutes.index))
.post(isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgroundroutes.createCampground));


router.get('/new', isLoggedIn, campgroundroutes.renderNewForm);


router.route('/:id')
.get(catchAsync(campgroundroutes.showCampground))
.put(isLoggedIn, isAuthor, upload.array('image'), validateCampground, catchAsync(campgroundroutes.updateCampground))
.delete(isLoggedIn, isAuthor, catchAsync(campgroundroutes.deleteCampground))

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgroundroutes.renderEditForm))

module.exports = router;