import express from "express";
import { createProduct , getAllProducts }  from "../Controllers/seuNegocioControllers";

const router = express.Router();

router.post("/seu-negocio" , createProduct);
router.get("/seu-negocio" , getAllProducts);

export default router;
