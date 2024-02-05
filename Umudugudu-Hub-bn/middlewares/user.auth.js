const UserModel = require('../models/user.model');
var bcrypt = require('bcryptjs');
const sendEmail = require('./sendEmail');
const { UserValSchema, resetPasswordSchema } = require('./user.validation');
const jwt = require("jsonwebtoken");
const userModel = require('../models/user.model');
const SignUp = async (req, res, next) => {


    try {
        const { email, password } = req.body;
        const result = await UserValSchema.validateAsync(req.body);
        // console.log(result);


        const userA = await UserModel.findOne({ email: email });
        // console.log(userA);
        if (!userA) {
            res.status(401).json({ message: "You are not allowed to sign up" });


        }
        else {
            if (userA.password !== null) {
                res.status(401).json({ message: "Account already exists" });
            }
            else {
                var encryPW = bcrypt.hashSync(password, 10);
                var newUser = {
                    email: email,
                    password: encryPW
                }


                // var savedUser = await newUser.save();
                var savedUser = await UserModel.findOneAndUpdate({ email: req.body.email }, newUser);

                res.status(201).json({ message: "User password saved successfully" });
            }


        }

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
};

const login = async (req, res, next) => {

    const { email, password } = req.body;

    
    
    try {
        const validUser = await UserModel.findOne({ email: email });
        if (!validUser) return res.status(500).json({ message: "Wrong password or email!" });


        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) return res.status(500).json({ message: "Wrong password or email!" });

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);

        const { password: hashedPassword, ...rest } = validUser._doc;



        res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json({user:rest,token:token,message:"The User loged in successfully!!"});

    } catch (error) {
        res.status(500).json({ message: "Error try again", error: error.message });
    }
};

const forgotPassword = async (req, res, next) => {
    try {
        // console.log(req.body.email);
        const validUser = await UserModel.findOne({ email:req.body.email });
        // console.log(validUser);
        if (!validUser) {
            res.status(401).json({ message: "User not found", error: error.message });
        }
        else {
            var token = jwt.sign({ email: req.body }, process.env.JWT_SECRET_KEY, { expiresIn: 1200 });

            var recoveryLink = `http://localhost:5174/reset-password/${token}/${validUser._id}`;

            await sendEmail(validUser.email, 'Reset Password', recoveryLink);

            res.status(200).json({ message: `Password reset link sent to your email!`});
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error try again", error: error.message });
    } 

}

const logout = (req, res, next) => {

    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/login')
};

const updatePassword = async (req, res, next) => {
    try {
        var hp= bcrypt.hashSync(req.body.newPassword, 10);
        var result = await resetPasswordSchema.validateAsync(req.body);
        var validemail = await UserModel.findOne({email:req.body.email});
        if (validemail) {
            var updatePasswrd = await UserModel.findOneAndUpdate({email:req.body.email},{password:hp});
            res.status(200).send("successfully saved");
        } else {
            res.status(400).send("user does not exist!");
        }
        
    } catch (error) {
        res.status(500).json({message:"failed to change password, please try again", error: error.message});
    }
}



module.exports = {
    SignUp,
    login,
    logout,
    forgotPassword,
    updatePassword


};
