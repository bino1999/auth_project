const user =  require('../models/user')
const generateToken = require("../utils/generateToken");

//login route 
const logUser = async (req,res)=>{
    const { email , password} = req.body

    const checkUser = await user.findOne({ email })

    if (checkUser && (await checkUser.matchPassword(password))) {
      generateToken(res, user._id);
      res.status(201).send(`welcome back ${checkUser.name}`);
    } else {
      return res.json("wrong credentials");
    }
}

// register user route
const registerUser =async (req , res) =>{
try{
  const {name,email,password} = await  req.body 
  const userExist = await user.findOne({email});
  if(userExist){
    res.status(400)
    res.send('already exist')
  }
  else {
    const newRegisterdUser = await user.create({
        name:name,
        email : email,
        password:password
    })
    if(newRegisterdUser){ 
        generateToken(res, user._id);
        res.status(200).json( newRegisterdUser )
    }
    else{
        res.send('invalid data')
    }
  }
 
}
catch(error){
    console.log(error)
}
}

const logOut = async (req,res)=>{
res.cookie('jwt_cookie' , '',{
    httpOnly:true, 
    expires:new Date(0)
})
res.status(200).send(`user logged out `)
}

module.exports = {
  logUser,
  registerUser,
  logOut,
};