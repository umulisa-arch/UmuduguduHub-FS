const express= require('express');
const { SendSms, seeAll } = require('../controllers/citizen.sms.controller');
const citizenSms = express.Router();

citizenSms.post('/announcement',SendSms);
citizenSms.get('/viewAll', seeAll);


module.exports=citizenSms;