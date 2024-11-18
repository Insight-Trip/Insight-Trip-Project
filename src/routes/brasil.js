const express = require("express");
const router = express.Router();

const brasilController = require("../controllers/brasilController");

// rota para buscarEstadosDestaque
router.get("/estados-destaque", function (req, res) {
  brasilController.buscarEstadosDestaque(req, res);
});

// rota para buscarTendenciasEstrangeiras
router.get("/tendencias-estrangeiras", function (req, res) {
  brasilController.buscarTendenciasEstrangeiras(req, res);
});

// rota para buscarViagensPorEstacao
router.get("/viagens-estacao", function (req, res) {
  brasilController.buscarViagensPorEstacao(req, res);
});

module.exports = router;
