import express from "express"
import { countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
//CREATE
router.post("/",verifyAdmin,createHotel);
//UPDATE
router.put("/:id",verifyAdmin,updateHotel);
//DELETE
router.delete("/:id",verifyAdmin,deleteHotel);
//GET
// router.get("/find/:id",getHotel);
//GETALL
router.get("/",getHotels);
//count by city
router.get("/countByCity",countByCity);
//count by Type
//router.get("/countByType",countByType);
export default router