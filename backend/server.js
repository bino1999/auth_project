const express =  require('express');
const app = express()
const db = require('./config/Db')

//middleware
app.use(express.json());

// import route
const auth = require('./routes/auth')
const goal =  require('./routes/goal')
const user = require('./routes/user')

// use route 
app.use('/auth' , auth)
app.use('/goal' , goal)
app.use('/api/user',user)



const port = process.env.PORT || 8000;
app.listen(port , ()=>{
    console.log(`Server is running on ${port}`);
})
db()