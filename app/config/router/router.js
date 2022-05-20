import express from "express";
import maincontroller from "../../controllers/main"
const router = express.Router();

//MainController
router.get("/", maincontroller.index);

export default router;