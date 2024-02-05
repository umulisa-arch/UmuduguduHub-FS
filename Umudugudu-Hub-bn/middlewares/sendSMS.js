require('dotenv').config();
const sid = process.env.PHONE_SID;
const phoneNumber = process.env.PHONE_NUMBER;
const authtoken=process.env.PHONE_AUTH_CODE;

const twilio = require('twilio')(sid,authtoken);

const sendSms=async (recipient,text)=>{
    try {
        await twilio.messages.create(
        {
            body: text,
            from:phoneNumber,
            to:recipient
        })

       

        
    } catch (error) {

        console.error('Twilio Error:', error.message, error.code, error.moreInfo);
        
    }


};

module.exports= sendSms