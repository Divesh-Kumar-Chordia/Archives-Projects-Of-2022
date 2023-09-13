import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import {verifyToken ,verifyUser,verifyAdmin} from "../utils/verifyToken.js";


const router = express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
// res.send("HELLO YOU ARE AUTHENTICATED!")
// });

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
// res.send("HELLO USER YOU ARE LOGGED IN AND YOU CAN DELETE YOUR ACCOUNT!")
// });

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
// res.send("HELLO ADMIN YOU ARE LOGGED IN AND YOU CAN DELETE ALL ACCOUNTS!")
// });
//UPDATE
router.put("/:id",verifyUser,updateUser);
//DELETE
router.delete("/:id",verifyUser,deleteUser);
//GET
router.get("/:id",verifyUser,getUser);
//GETALL
router.get("/",verifyAdmin,getUsers);


export default router