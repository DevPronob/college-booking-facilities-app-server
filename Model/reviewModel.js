const mongoose = require('mongoose');

// Define the college schema
const reviewSchema = new mongoose.Schema({
    comment: String,
    rating: Number,
    college: String,

});

// Create a college model based on the schema
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;