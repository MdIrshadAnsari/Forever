import jwt from "jsonwebtoken"

const adminAuth = async(req, res)=>{
    try {
        const {token} = req.headers;
        if(!token){
            return res.json({success: false, message: "Not Authorized Login Again"})
        }
        const tokendecode = jwt.verify(token, process.env.JWT_SECRET)
        if(tokendecode !== process.env.ADMIN_EMAIL){
          return res.json({success: false, message: "Not Authorized"})
        }
        next()
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export default adminAuth