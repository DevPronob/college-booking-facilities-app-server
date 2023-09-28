const express =require("express");
const app =express()
app.use(express.json());
const cors = require('cors');
app.use(express.urlencoded({ extended : true }));
app.use(cors());
require('dotenv').config();
const connectDB =require('./database/db')



app.use('/api', require('./routes/collegeRoutes'))
// app.use('/api/user', require('./routes/userRoutes'))
app.use('/', require('./routes/reviewRoutes'))
app.use('/api', require('./routes/bookingRoutes'))
app.use('/profile', require('./routes/ProfileRoutes'))
app.get('/', (req,res) =>{
    res.send("pronob")
})
// app.use('/api', require('./routes/userRoutes'))
// app.use('/pay/webhook', require('./routes/cartPaymentRoutes'))
app.listen(5000,() =>{
    console.log("Server is running")
})

connectDB()
// miBCBfKYOcBmJJvn
// pronobroy3601