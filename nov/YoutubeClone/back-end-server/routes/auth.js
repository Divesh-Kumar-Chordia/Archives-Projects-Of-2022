import express from 'express';

import { googleAuth, signIn, signup } from '../controllers/auth.js';
const router =express.Router()
//POST request 
//CREATE A USER 
router.post("/signup",signup);
//SIGN IN
router.post("/signIn",signIn);
//GOOGLE AUTHENITCATION
router.post("/google",googleAuth);
// 
export default router;