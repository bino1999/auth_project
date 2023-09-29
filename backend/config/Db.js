const mongoose =  require('mongoose')

const connection = async()=>{
    try{
     const con = await mongoose.connect(
       "mongodb+srv://chamodbandara78:YAKAYAKA@cluster0.teoxyn7.mongodb.net/?retryWrites=true&w=majority"
     );
     console.log(`mongo Db connected ${con}`)
    }
    catch(error){
     console.log(error)
    }
}

module.exports = connection;