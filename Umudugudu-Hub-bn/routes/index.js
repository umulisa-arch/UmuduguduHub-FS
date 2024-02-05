const express = require ('express');
const allroute = express.Router();
var authRouter =require('./user.auth.routes');
const userRouter = require('./user.crud');
const smsRoute = require('./user.sms.route');
const citizenRoutes = require('./citizen.routes');
const citizenSms = require('./citizenSms.routes');
const dApp = require('../controllers/dashoardInfo');

allroute.use('/citizen' , citizenRoutes);
allroute.use('/user/auth',authRouter);
allroute.use('/user/crud',userRouter);
allroute.use('/user/sms',smsRoute);
allroute.use('/citizen/sms',citizenSms);
allroute.use('/dashboard',dApp);
module.exports = allroute;