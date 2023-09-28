const mongoose = require('mongoose');

// Define the college schema
const collegeSchema = new mongoose.Schema({
  name: String,
  image: String,
  admissionDates: String,
  events: [String],
  researchHistory: String,
  sports: [String],
  admissionProcess: {
    howToApply: String,
    steps: [String],
    admissionRequirements: String,
  },
  researchWorks: [
    {
      title: String,
      author: String,
      publicationDate: String,
      link: String,
    },
  ],
});

// Create a college model based on the schema
const College = mongoose.model('College', collegeSchema);

module.exports = College;