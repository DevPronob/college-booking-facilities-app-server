const express =require("express")
const router =express.Router()
const { setReview,getReview,} = require('../controller/reviewController')
// const {
//     verifyToken,
//     verifyTokenAndAdmin
//   } = require("./verifyToken");
router.post('/review',setReview )
// router.get('/college/:id', getCollegeDetail)
router.get('/review', getReview)
// router.post('/add-room',verifyToken,verifyTokenAndAdmin,setRoom)
// router.get('/:id',verifyToken, getPostDetail)
// router.get('/blog/me',verifyToken, getUserPost)
// router.post('/',verifyToken, setPost)
// router.put('/:id', putPost)
// router.delete('/:id', deletePost)

module.exports = router;