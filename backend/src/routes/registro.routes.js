const express = require("express");
const router = express.Router();
const controller = require("../controllers/registro.controller");

router.post("/", controller.criarRegistro);
router.get("/", controller.listarRegistros);

module.exports = router;
router.get("/:id", controller.obterRegistroPorId);