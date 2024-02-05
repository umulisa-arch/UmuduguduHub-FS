const express = require('express');
const {create,update, list,findByFullName, findByNationalId, remove} = require('../controllers/citizen.controller');
const { findById } = require('../models/citizen.model');
const citizenRoutes = express.Router();


citizenRoutes.post('/add', create);
citizenRoutes.put('/update', update);
citizenRoutes.get('/list', list);
citizenRoutes.get('/findByName', findByFullName); 
citizenRoutes.get('/findById', findById);
citizenRoutes.get('/findBynid', findByNationalId);
citizenRoutes.delete('/delete', remove);


module.exports = citizenRoutes;