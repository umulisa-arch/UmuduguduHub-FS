var express = require('express');
const { viewAll, SendMessage } = require('../controllers/user.sms.controller');

var smsRoute = express.Router();


smsRoute.post('/announcement',SendMessage);
smsRoute.get('/viewAll', viewAll);



module.exports = smsRoute;