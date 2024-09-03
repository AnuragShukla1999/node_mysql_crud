import express from 'express';
import { change_password, forget_password, login, register, reset_password } from '../controllers/userController.js';
import { userAuth } from '../middlewares/userAuth.js';


const router = express.Router();

router.post('/signin', login);
router.post('/register', register);
router.post('/forget_password', userAuth, forget_password);
router.post('/reset_password/:id', userAuth, reset_password);
router.post('/change_password', userAuth, change_password);

export default router;