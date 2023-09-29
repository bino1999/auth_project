const mongoose  =  require('mongoose');

const goalSchema = mongoose.Schema({
    name: {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('goal' , goalSchema)