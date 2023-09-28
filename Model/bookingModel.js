const mongoose = require('mongoose');

// Define the user schema
const bookingSchema = new mongoose.Schema({
  imageFile: String,
  collegeValue: String,
  userNameValue: String,
  dateOfBirthValue: String,
  addressValue: String,
  phoneValue: String,
  emailValue: String,
});

// Create a User model based on the schema
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;