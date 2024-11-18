const estadoModel = require("../models/estadoModel");

function buscarCidadesVisitadas(req, res) {
    console.log("Buscando cidades mais visitadas...");

    estadoModel.buscarCidadesVisitadas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma cidade encontrada!");
            }
        })
        .catch(function (erro) {
            console.error("Erro ao buscar cidades visitadas:", erro.message);
            res.status(500).json({ error: erro.message });
        });
}

function buscarEventosComTuristas(req, res) {
    console.log("Buscando eventos com mais turistas...");

    estadoModel.buscarEventosComTuristas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum evento encontrado!");
            }
        })
        .catch(function (erro) {
            console.error("Erro ao buscar eventos com turistas:", erro.message);
            res.status(500).json({ error: erro.message });
        });
}

function buscarCidadesPerigosas(req, res) {
    console.log("Buscando cidades perigosas...");

    estadoModel.buscarCidadesPerigosas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma cidade perigosa encontrada!");
            }
        })
        .catch(function (erro) {
            console.error("Erro ao buscar cidades perigosas:", erro.message);
            res.status(500).json({ error: erro.message });
        });
}

function buscarSegurasVisitadas(req, res) {
    console.log("Buscando cidades seguras e mais visitadas...");

    estadoModel.buscarSegurasVisitadas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma cidade segura e visitada encontrada!");
            }
        })
        .catch(function (erro) {
            console.error("Erro ao buscar cidades seguras e visitadas:", erro.message);
            res.status(500).json({ error: erro.message });
        });
}

function buscarProximosEventos(req, res) {
    console.log("Buscando próximos eventos globais...");

    estadoModel.buscarProximosEventos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum evento encontrado!");
            }
        })
        .catch(function (erro) {
            console.error("Erro ao buscar próximos eventos globais:", erro.message);
            res.status(500).json({ error: erro.message });
        });
}

function buscarViagensPorEstacao(req, res) {
    console.log("Buscando viagens por estação...");

    estadoModel.buscarViagensPorEstacao()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma viagem encontrada para as estações.");
            }
        })
        .catch(function (erro) {
            console.error("Erro ao buscar as viagens por estação:", erro.message);
            res.status(500).json({ error: erro.message });
        });
}

module.exports = {
    buscarCidadesVisitadas,
    buscarEventosComTuristas,
    buscarCidadesPerigosas,
    buscarSegurasVisitadas,
    buscarProximosEventos,
    buscarViagensPorEstacao
};
