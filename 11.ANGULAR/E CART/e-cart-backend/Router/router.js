const express = require('express')

const productController = require('../controllers/productController')
const userController = require('../controllers/userController')
const wishlistController = require('../controllers/wishlistController')
const jwtMiddleware = require('../middlewares/jwtMiddlewares')
const router = express.Router()

//get all products
router.get('/allProducts',productController.getProducts)
//register
router.post('/register',userController.registerAPI)
//login
router.post('/login',userController.loginAPI)
//view a product
router.get('/view/:id',productController.getAProduct)
//add  to wishlist
router.post('/wishlist',jwtMiddleware,wishlistController.addToWishlist)
//get wishlist
router.get('/wishlist',jwtMiddleware,wishlistController.getWishlist)
//delete wishlist
router.delete('/wishlist/:id',jwtMiddleware,wishlistController.deleteWishlist)
//add to cart 
//get cart
//delete cart




module.exports = router