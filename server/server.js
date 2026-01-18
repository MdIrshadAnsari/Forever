import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import'./config/mongodb.js'
import connectCloudinary from './config/cloudinary.js';
import userRoute from "./routes/userRoute.js"
import productRoute from "./routes/productRoute.js"
// app Config
const app = express();
const port = process.env.PORT || 4000
connectCloudinary()


// middleware
app.use(express.json())
app.use(cors())

// api endpoint
app.use('/api/user', userRoute)
app.use('/api/product', productRoute)

app.listen(port, ()=> console.log('Server started on PORT : ' + port))