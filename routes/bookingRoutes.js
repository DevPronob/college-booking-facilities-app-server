const express =require("express")
const router =express.Router()
const {setBooking,getBooking,getCollegeDetail,filterRooms} = require('../controller/bookingController')
// const {
//     verifyToken,
//     verifyTokenAndAdmin
//   } = require("./verifyToken");
router.post('/booking',setBooking )
// router.get('/college/:id', getCollegeDetail)
router.get('/booking', getBooking)
// router.post('/add-room',verifyToken,verifyTokenAndAdmin,setRoom)
// router.get('/:id',verifyToken, getPostDetail)
// router.get('/blog/me',verifyToken, getUserPost)
// router.post('/',verifyToken, setPost)
// router.put('/:id', putPost)
// router.delete('/:id', deletePost)

module.exports = router;