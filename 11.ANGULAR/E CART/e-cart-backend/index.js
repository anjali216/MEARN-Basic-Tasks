require('dotenv').config()

const express = require ('express')
const cors =  require('cors')
require('./connection/db')


//create an app using express
const CartServer = express()

const router = require('./Router/router')

CartServer.use(cors())
CartServer.use(express.json())

CartServer.use(router)

const PORT = 3000|| process.env.PORT


CartServer.listen(PORT,()=>{
    console.log("Listening to Port" +PORT)
})


CartServer.get('/',(req,res)=>{
    res.send("E-Cart Server is started....")
})