
//1 import express
const express= require('express')
//4 import userController
const userController = require('../Controllers/userController')

const projectController =require('../Controllers/projectController')
const multerConfig = require('../MiddleWares/multerMiddleware')
const jwtMiddleware = require('../MiddleWares/jwtMiddleware')


//2 Create Router from express
const router = express.Router()

//3 Create route for each requests
//1 Register route : http://localhost:3000/api/register
router.post('/api/register',userController.register)

//2 Login route : http://localhost:3000/api/login
router.post('/api/login',userController.login)

//3 add projects route 
router.post('/api/addProject',jwtMiddleware,multerConfig.single('projectImg'),projectController.addProject)

//4 get all project - find()
router.get('/api/getAllProjects',jwtMiddleware,projectController.getAllProjects)

//5 get all projects of particular user - find({userId})
router.get('/api/getUserProjects',jwtMiddleware,projectController.getuserProjects)

//6 get home project(3) find.limit(3)
router.get('/api/getHomeProjects',projectController.getHomeProjects)

//update
router.put('/api/update/:projectId',jwtMiddleware,multerConfig.single('projectImg'),projectController.editProject)

module.exports =router