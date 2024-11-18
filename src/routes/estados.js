const express = require("express");
const router = express.Router();
const estadoController = require("../controllers/estadoController");

router.get("/cidades-visitadas", function (req, res) {
    estadoController.buscarCidadesVisitadas(req, res);
});

router.get("/eventos-com-turistas", function (req, res) {
    estadoController.buscarEventosComTuristas(req, res);
});

router.get("/cidades-perigosas", function (req, res) {
    estadoController.buscarCidadesPerigosas(req, res);
});

router.get("/seguras-visitadas", function (req, res) {
    estadoController.buscarSegurasVisitadas(req, res);
});

router.get("/proximos-eventos", function (req, res) {
    estadoController.buscarProximosEventos(req, res);
});

router.get("/viagens-por-estacao", function (req, res) {
    estadoController.buscarViagensPorEstacao(req, res);
});

module.exports = router;
