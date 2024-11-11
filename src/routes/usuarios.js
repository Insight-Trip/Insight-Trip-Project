var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/listar", function (req,res) {
    usuarioController.listarFuncionarios(req, res)
});

router.post("/buscar", function(req, res) {
    usuarioController.buscarFuncionario(req, res)
})

router.get("/listarAdm", function(req, res) {
    usuarioController.listarAdministradores(req, res)
})
     

module.exports = router;