import express from "express";
import validNumber from "../middleware/validNumber";
import Twonumber from "./../controlers/twoNumber";
const router = express.Router();
router.post("/twonumber",validNumber,Twonumber);
export default router;