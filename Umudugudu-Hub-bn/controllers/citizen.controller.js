const { citizen } = require('../middlewares/user.validation');
const CitizenModel = require('../models/citizen.model');

const create = async (req, res, next) => {
    try{
        const {email,password,nationalId} = req.body;

        const result= await citizen.validateAsync({nationalId:req.body.nationalId,phone:req.body.phone,email:req.body.email});
        
        var alreadyExists = await CitizenModel.findOne({'nationalId':req.body.nationalId} );
        console.log(req.body.nationalId);
        if (!alreadyExists) {

            const addedCitizen = await CitizenModel.create(req.body);

            console.log(addedCitizen);
            res.status(201).json({
                message: "Citizen added successfully",
                addedCitizen
            });

        } else {
            res.status(401).send({ message: "This Citizen already exists", error: console.error.message })

        }
    }
        catch (error){
            res.status(500).send(error.message);
        }
    }

    const update = async (req,res,next) => {
        try{
            var updatedCitizen = await CitizenModel.findOneAndUpdate({ _id: req.query.id }, req.body);
            var  citizen = await CitizenModel.findOne(updatedCitizen._id);
            res.status(200).json({citizen});
        } catch(error) {
            res.status(500).send(error);
        }
    }

    const list = async (req,res,next)=>{
        try{
            var citizen = await CitizenModel.find({});
            res.status(200).json({citizen});
        } catch(error) {
            res.status(500).send("Error in listing citizen");
        }
    }

    const findByFullName = async (req,res,next)=>{
        try{
            console.log(req.query);
            let citizenName = req.query.name;
            var foundCitizen = await CitizenModel.findOne({fullNames:citizenName});
            res.status(302).json({
              data : foundCitizen,
            });
        }catch(error) {
            res.status(500).send(error.message);
        }
    }

    const findById = async(req, res, next) => {
        try{
            let citizenId = req.query.id;
            var foundCitizen = await CitizenModel.findById({_id:citizenId});
            res.status(200).json({
                citizen :foundCitizen
            });
        }catch (error) {
            res.status(500).send(error);
        }
    };

    const findByNationalId = async(req, res, next) => {
        try{
            let citizenId = req.body.nationalId;
            var foundCitizen = await CitizenModel.findOne({nationalId:citizenId});
            res.status(200).json({
                citizen :foundCitizen
            });
        }catch (error) {
            res.status(500).send(error);
        }
    }

    const remove = async (req, res, next) =>{
        try{
            var deletedCitizen = await CitizenModel.findByIdAndDelete(req.query.id);
            if(deletedCitizen){
                res.status(200).json({message: "Deleted!" });
            }else {
                res.status(400).json({message: "Citizen not found!"});
            }
        }catch(error){
            res.status(500).send(error);
        }
    }
    module.exports = {
        create,update,list,findByFullName,findById, findByNationalId, remove
    }