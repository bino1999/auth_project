const mongoose =  require("mongoose")
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type:String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// hash the pasword
userSchema.pre('save' ,async function(next){
  if(!this.isModified('password') ){
    next()
  }
 const salt =  await bcrypt.genSalt(10)
 this.password = await bcrypt.hash(this.password,salt)  
} )

// login user check enterd password is match with hash password 

userSchema.methods.matchPassword = async function ( enterdPassword ) {
  return await bcrypt.compare(enterdPassword, this.password);
}

 

module.exports= mongoose.model("user", userSchema)
 