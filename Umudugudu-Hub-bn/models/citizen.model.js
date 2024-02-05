const mongoose = require('mongoose');

const CitizenSchema = new mongoose.Schema({

    fullNames:{ 
        required: true, 
        type: String    },
    
    dateOfBirth: {
        type: Date,
        required: true,
        trim: true,
    },
    placeOfBirth:{ required: true, type: String},
    nationalId:{
        type: String,
        required: true,
        unique: true,
    },
    phone:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },


    demoInfo:{
    gender:{
        type:String,
        required: true,
        enum: {
            values: ['Male', 'Female'],  // an array of the values to
            message:"{value} please provide your Gender",
        }
    },
    maritalStatus:{
        type:String,
        required: true,
        enum: {
            values: ['Single','Married','Divorced','Widowed'] , 
            message:"{value} please provide valid marital status",  //
         }
    }
},
    resInfo:{
        isibo: {
            required:true, 
            type: String
        },
        tenure:{
            required: true,
            type: String,
            enum:{
                values:['Owned','Rented'],
                message:"{value} Please enter a valid Tenure",
            }
        }
    },
    citAndImmi:{
        citizenshipStat:{
            required: true,
            type: String,
        },
        countryOrigin:{
            required: true,
            type: String
        },
        immigrationStat:{
            required: true,
            type: String
        }
    },
    empOccupation:{
        empStatus:{
            required: true,
            type: String,
        },
        occupation:{
            type:String,
            required: true
        },
        industryOfWork:{
            type:String,
            required: true
        },
    },

    availableAmenities:{
        type:String,
        required:true,
        enum:{
            values:["Water","Electricity","Sanitation"],
            message:"{VALUE} please provide a valid Amenity",
        }
    },

    houseComp:{
        numberOfChildren:{
            type:Number,
            required:true
    },
        numberOfHousePeople:{
        type:Number,
        required:true
    }
}
});

module.exports = mongoose.model('citizen',CitizenSchema)