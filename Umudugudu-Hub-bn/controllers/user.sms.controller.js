const sendEmail = require("../middlewares/sendEmail");
const MessageModel = require("../models/message.model");
// const sendSms = require("../middlewares/sendSMS");
const userModel = require("../models/user.model");



const SendMessage= async(req,res,next)=>{
    try {
        const toSave = new MessageModel({
            to: "Users",
            title: req.body.title,
            text:req.body.message
        });
       var savedMessage = await toSave.save();
       
       const title = req.body.title;
        const text = req.body.message;
    
        const allEmail = [];
        var toRecieve = await userModel.find({});
        console.log(toRecieve);
        for (let i = 0; i < toRecieve.length; i++) {
    
            allEmail.push(toRecieve[i].email);
    
        }
        console.log(allEmail);
    
        for (const email of allEmail) {
    
            sendEmail(email, title, text)
    
        };
        res.status(200).send({ message: "Message  sent to the users" });
        
    } catch (error) {
        res.status(500).send({message:"Error saving message",error:error.message})
    }

};

const viewAll = async (req, res, next) => {
    try {
        const allMessages = await MessageModel.find({ to: "Users" });
        res.status(200).send(allMessages);

    } catch (error) {
        res.status(500).send({ message: "Error getting all messages", error: error.message });
    }

}

module.exports = { SendMessage, viewAll }