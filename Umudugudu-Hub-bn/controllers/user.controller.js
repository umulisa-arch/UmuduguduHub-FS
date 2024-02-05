const sendEmail = require('../middlewares/sendEmail');
const { UserSigninSchema } = require('../middlewares/user.validation');
const UserModel = require('../models/user.model');

const addUser = async (req,res,next)=>{
    try {
        // console.log(req.body.nationalId);
        const {email,password,nationalId} = req.body;

        const result= await UserSigninSchema.validateAsync({nationalId:req.body.nationalId,phoneNumber:req.body.phoneNumber,email:req.body.email});
        var existUser= await UserModel.findOne({nationalId:req.body.nationalId})
        if (existUser){
            res.status(401).send({message:"User already exists"})
        }
        else {
            var newUser= await UserModel.create(req.body);
       
            

            signUpLink=`<h1> click the link to finish sign up </h1> <a href="http://localhost:5174/signup">Sign in to continue</a>`;

            sendEmail(newUser.email,'Signup into Umudugudu hub',signUpLink);

            res.json({
            message:"User created successfully"
            });
            // res.json({message:"Email sent successfully"});
        }
        
        
    } catch (error) {
        res.status(500).send({message:"Error adding user try again",error:error.message})  
    }


};
const deleteUser = async (req,res,next)=>{
    try {
        var id =req.query.id;
        var tobeRemoved = await UserModel.findOne({_id:id});
        var deletedUser = await UserModel.findByIdAndDelete({_id:id});
        if(!deletedUser){
            res.status(401).send({message:"User not found"})
        }
        else{
            res.status(200).send({message:"User deleted successfully",tobeRemoved})
        }
        
    } catch (error) {
        res.status(500).send({message:"Error deleting user try again",error:error.message})
    }
};
const listAll = async (req,res,next)=>{
    try {
        var allUser = await UserModel.find({});
        var total = allUser.length;
        res.status(200).send({allUser:allUser,total:total, message:"all users" }) ;
        
    } catch (error) {
        res.status(500).send({message:"Error getting all users try again",error:error.message})
    }

};
const updateUser = async (req,res,next)=>{
    try {
        var id = req.body.id;
        
        // var toUpdate =  from Agnes 
        await UserModel.findOneAndUpdate({_id:id},req.body);
        // console.log(toUpdate);  from Agnes
        res.status(200).send({message:"User updated successfully"});
    } catch (error) {
        res.status(500).send({message:"Failed to update try again",error:error.message})
    }
};

const findByNationalId= async (req,res,next) => {
    try {
        var nationalId= req.body.nationalId;
        var foundUser= await UserModel.findOne({nationalId:nationalId});
        if (!foundUser){
            res.status(404).send({message:"User not found"});
        }
        res.json({
            message:"User found",
            foundUser,
            

        })
        
    } catch (error) {
        res.status(500).send({message:"Search unsuccessful try again",error:error.message})
    }

};



module.exports = {
    addUser,
    deleteUser,
    listAll,
    updateUser,
    findByNationalId
};