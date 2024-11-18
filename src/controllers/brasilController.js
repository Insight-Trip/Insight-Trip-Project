var brasilModel = require("../models/brasilModel");
  
function buscarEstadosDestaque(req, res) {
    console.log("Recuperando estados em destaque...");

    brasilModel.buscarEstadosDestaque()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado); 
            } else {
                res.status(204).send("Nenhum estado em destaque encontrado!"); 
            }
        })
        .catch(function (erro) {
            console.error("Houve um erro ao buscar estados em destaque:", erro.message);
            res.status(500).json(erro.message); 
        });
}

  
function buscarTendenciasEstrangeiras(req, res) {
    console.log("Recuperando tendências estrangeiras...");

    brasilModel.buscarTendenciasEstrangeiras()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado); 
            } else {
                res.status(204).send("Nenhuma tendência estrangeira encontrada!"); 
            }
        })
        .catch(function (erro) {
            console.error("Houve um erro ao buscar tendências estrangeiras:", erro.message);
            res.status(500).json(erro.message); 
        });
}
  
function buscarViagensPorEstacao(req, res) {
    console.log("Recuperando viagens por estação do ano...");

    brasilModel.buscarViagensPorEstacao()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma viagem registrada por estação do ano!");
            }
        })
        .catch(function (erro) {
            console.error("Houve um erro ao buscar viagens por estação do ano:", erro.message);
            res.status(500).json(erro.message);
        });
}
  
  module.exports = {
    buscarEstadosDestaque,
    buscarTendenciasEstrangeiras,
    buscarViagensPorEstacao
  };
  