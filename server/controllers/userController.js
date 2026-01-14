import userModel from "../models/userModel.js"
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const createToken = (id)=>{
  return jwt.sign({id}, process.env.JWT_SECRET)
}

//----------------login user---------------
const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await userModel.findOne({email})
    if(!user){
      return res.status(500).json({message: "user doesn't exist"})
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(isMatch){
      const token = createToken(user._id);
      res.status(200).json({success: true, token})
    }
      else{
        res.status(500).json({success: false, message: "Invalid credentials"})
      }
    
  } catch (error) {
    res.status(500).json(error.message)
  }
}


//-----------register user -------------
const registerUser = async(req, res) => {
  try {
    const{name, email, password} = req.body;
    // checking user already exist or not
    const exist = await userModel.findOne({email})
    if(exist){
      return res.status(500).json({success: false, message: "User alreday exist"})
    }
    // validating email format & strong password
    if(!validator.isEmail(email)){
      return res.status(500).json({success:false, message: "Please enter a valid email"})
    }
    if(password.length < 8){
      return res.status(500).json({success:false, message:"Please enter a strong password"})
    }
    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const newuser = new userModel({
        name,
        email,
        password: hashedpassword,
    })
   const user = await newuser.save()
   const token = createToken(user._id)
   res.status(200).send({success: true, token})
    
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export { loginUser, registerUser }
