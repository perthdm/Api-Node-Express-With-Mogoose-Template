const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
const userSchena = new Schema ({
    username : {
        type : String,
        unique : true,
        required : true,
        lowercase : true
    },
    password : {
        type : String,
        required :true,
        lowercase : true
    },
    sex : {
        type : String , 
        required : true,
        lowercase : true 
    }
});

const User = mongoose.model('user',userSchena);
module.exports = User;