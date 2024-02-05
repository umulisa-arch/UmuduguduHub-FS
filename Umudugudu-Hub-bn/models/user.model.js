const {Schema,model} = require ('mongoose');

const UserModel = new Schema({

    firstName:{
        type:String,
        required:true,
    },
    middleName:{
        type:String,
        required:false,
    },
    lastName:{
        type:String,
        required:true,
    },
    nationalId:{
        unique:true,
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        unique:true,
        type:String,
        required:true,
    },
    password:{
        type:String,
        default:null,

    },

    dateOfBirth:{
        type:Date,
        required:false,
        
    },
    role:{
        type:String,
        required:true,
        enum:{
            values:['admin','user'],
            message:'{value} is not valid  role'
        }
    },
    residenceInfo:{
        discrict:{
            type:String,
            required:true,
        },
        sector:{
            type:String,
            required:true,
        },
        cell:{
            type:String,
            required:true,
        },
        village:{
            type:String,
            required:true,
        },
        
    },
    maritalStatus:{
        type:String,
        required:true,
        enum:{
            values:['single','married'],
            message:"{value} is not valid "
        }

    },

    

},{
  timestamps:true,  
});

module.exports = model("UserModel",UserModel)