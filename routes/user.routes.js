import express from 'express';
import userController from '../controller/user.controller.js';
const router = express.Router();
router.post('/userr', userController.createUser);
router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getUserById);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);
export default router;