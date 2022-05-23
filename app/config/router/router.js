import express from "express";
import maincontroller from "../../controllers/main"
const router = express.Router();

//MainController
router.get("/", maincontroller.index);
router.get("/listar/:setor",maincontroller.filtrado);
router.get("/create",maincontroller.create);
router.post("/create",maincontroller.create);
router.get("/update/:id", maincontroller.update);
router.post("/update/:id", maincontroller.update);
router.delete("/remove/:id", maincontroller.remove);

router.get("/init", maincontroller.init);

export default router;