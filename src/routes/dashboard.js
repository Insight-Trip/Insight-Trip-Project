var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController")

router.get(
    "/construir/:tipo?/:valor?/:user?/:userValue?",
    function (req, res) {
        // Extrair os parâmetros da URL
        const tipo = req.params.tipo;
        const valor = req.params.valor;
        const userParam = req.params.userValue;

        // Mapear para o formato esperado pelo controller
        const params = {
            estado: tipo === 'estado' ? valor : null,
            clima: tipo === 'clima' ? valor : null,
            evento: tipo === 'evento' ? valor : null,
            periodo: tipo === 'periodo' ? valor : null,
            user: userParam
        };

        // Atualizar req.params com os valores mapeados
        req.params = params;

        dashboardController.construirDashboard(req, res);
    }
);

module.exports = router;
