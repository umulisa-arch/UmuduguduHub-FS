var {SignUp, login, logout, forgotPassword, updatePassword}=require('../middlewares/user.auth');
var express = require('express');
var authRouter = express.Router();

authRouter.put('/signup', SignUp);
authRouter.post('/login', login); //change from get tp post by Claude and Agnes
authRouter.post('/logout', logout);
authRouter.post('/forgotpassword',forgotPassword);
authRouter.put('/updatepassword', updatePassword);


module.exports = authRouter;