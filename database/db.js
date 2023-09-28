const mongoose = require('mongoose')
const dotenv =require('dotenv')
dotenv.config()
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://pronobroy3601:miBCBfKYOcBmJJvn@cluster0.pfn3ise.mongodb.net/`)

    console.log(`MongoDB Connected: `)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB