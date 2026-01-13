import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import'./config/mongodb.js'
import connectCloudinary from './config/cloudinary.js';

// app Config
const app = express();
const port = process.env.PORT || 4000
connectCloudinary()


// middleware
app.use(express.json())
app.use(cors())

// api endpoint
app.get('/', (req, res)=>{
    res.send("hello world")
})

app.listen(port, ()=> console.log('Server started on PORT : ' + port))