const express = require('express');
const { addUser, deleteUser, listAll, updateUser, findByNationalId } = require('../controllers/user.controller');
const userRouter = express.Router();
userRouter.post('/add',addUser);
userRouter.delete('/delete',deleteUser);
userRouter.get('/all',listAll);
userRouter.put('/update',updateUser);
// userRouter.get('/find',findByNationalId);
module.exports = userRouter;