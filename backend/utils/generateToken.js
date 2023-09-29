const jwt = require('jsonwebtoken')

const JWT_SECRET = '1234bino'

const generateToken = (res,userId) =>{
     const token = jwt.sign({ userId }, JWT_SECRET,{
        expiresIn: '30d'
     } );
   
    res.cookie('jwt' , token,{
        httpOnly : true,
        sameSite:'strict',
        maxAge: 60

    })
}
module.exports = generateToken;
