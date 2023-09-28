const express =require("express")
const router =express.Router()
const {setCollege,getCollege,getCollegeDetail,filterRooms} = require('../controller/collegeController')
// const {
//     verifyToken,
//     verifyTokenAndAdmin
//   } = require("./verifyToken");
router.post('/college',setCollege )
router.get('/college/:id', getCollegeDetail)
router.get('/college', getCollege)
// router.post('/add-room',verifyToken,verifyTokenAndAdmin,setRoom)
// router.get('/:id',verifyToken, getPostDetail)
// router.get('/blog/me',verifyToken, getUserPost)
// router.post('/',verifyToken, setPost)
// router.put('/:id', putPost)
// router.delete('/:id', deletePost)

module.exports = router;