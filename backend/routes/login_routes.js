import express from 'express';
import { singUp, logIn } from '../controllers/login_controller.js'; // Import logIn function
const router = express.Router();

router.route('/signup').post(singUp); // Corrected this line
router.route('/login').post(logIn);

export default router;

