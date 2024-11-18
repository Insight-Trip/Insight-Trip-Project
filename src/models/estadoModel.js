var mysql = require("../database/config");

function buscarCidadesVisitadas(ano) {
    return mysql.createConnection(dbConfig)
        .then(function (connection) {
            return connection.execute(`
                SELECT NomeCidade, 
                       PercentualVisitantes
                FROM UF
                WHERE YEAR(PercentualVisitantesData) = ?
            `, [ano])
            .then(function ([rows]) {
                connection.end();
                return rows;
            })
            .catch(function (erro) {
                connection.end();
                console.error("Erro ao executar a query buscarCidadesVisitadas:", erro.message);
                throw erro;
            });
        })
        .catch(function (erro) {
            console.error("Erro ao conectar ao banco de dados:", erro.message);
            throw erro;
        });
}

function buscarEventosComTuristas(ano) {
    return mysql.createConnection(dbConfig)
        .then(function (connection) {
            return connection.execute(`
                SELECT E.Nome AS evento, 
                       (SUM(V.QtdPassageirosPagos) / (SELECT SUM(QtdPassageirosPagos) FROM Viagem WHERE YEAR(dtViagem) = ?) * 100) AS turistas_percentual
                FROM Eventos E
                LEFT JOIN EstadoHasEventos EH ON EH.fkEventos = E.idEventos
                LEFT JOIN Viagem V ON V.fkAeroportoOrigem = EH.fkEstado
                WHERE YEAR(V.dtViagem) = ?
                GROUP BY E.Nome;
            `, [ano, ano])
            .then(function ([rows]) {
                connection.end();
                return rows;
            })
            .catch(function (erro) {
                connection.end();
                console.error("Erro ao executar a query buscarEventosComTuristas:", erro.message);
                throw erro;
            });
        })
        .catch(function (erro) {
            console.error("Erro ao conectar ao banco de dados:", erro.message);
            throw erro;
        });
}

function buscarCidadesPerigosas(ano) {
    return mysql.createConnection(dbConfig)
        .then(function (connection) {
            return connection.execute(`
                SELECT U.Nome AS cidade, 
                       COUNT(C.idCriminalidade) AS qtd_crimes
                FROM UF U
                LEFT JOIN Criminalidade C ON C.fkEstado = U.CodigoIBGE
                WHERE YEAR(C.DtCrime) = ?
                GROUP BY U.Nome
                ORDER BY qtd_crimes DESC;
            `, [ano])
            .then(function ([rows]) {
                connection.end();
                return rows;
            })
            .catch(function (erro) {
                connection.end();
                console.error("Erro ao recuperar as cidades mais perigosas:", erro.message);
                throw erro;
            });
        })
        .catch(function (erro) {
            console.error("Erro ao conectar ao banco de dados:", erro.message);
            throw erro;
        });
}

function buscarSegurasVisitadas(ano) {
    return mysql.createConnection(dbConfig)
        .then(function (connection) {
            return connection.execute(`
                SELECT U.Nome AS cidade, 
                       COUNT(V.idPassagem) AS turistas_percentual,
                       (SELECT COUNT(C.idCriminalidade) 
                        FROM Criminalidade C 
                        WHERE C.fkEstado = U.CodigoIBGE AND YEAR(C.DtCrime) = ?) AS qtd_crimes
                FROM UF U
                LEFT JOIN Aeroporto A ON A.fkEstado = U.CodigoIBGE
                LEFT JOIN Viagem V ON V.fkAeroportoOrigem = A.idAeroporto OR V.fkAeroportoDestino = A.idAeroporto
                WHERE YEAR(V.dtViagem) = ?
                GROUP BY U.Nome
                ORDER BY turistas_percentual DESC;
            `, [ano, ano])
            .then(function ([rows]) {
                connection.end();
                return rows;
            })
            .catch(function (erro) {
                connection.end();
                console.error("Erro ao buscar cidades seguras e visitadas:", erro.message);
                throw erro;
            });
        })
        .catch(function (erro) {
            console.error("Erro ao conectar ao banco de dados:", erro.message);
            throw erro;
        });
}

function buscarProximosEventos(ano) {
    return mysql.createConnection(dbConfig)
        .then(function (connection) {
            return connection.execute(`
                SELECT evento, percentual_participantes 
                FROM EventosGlobais
                WHERE YEAR(data_evento) = ?
                AND data_evento > CURDATE()
                ORDER BY data_evento;
            `, [ano])
            .then(function ([rows]) {
                connection.end();
                return rows;
            })
            .catch(function (erro) {
                connection.end();
                console.error("Erro ao buscar próximos eventos globais:", erro.message);
                throw erro;
            });
        })
        .catch(function (erro) {
            console.error("Erro ao conectar ao banco de dados:", erro.message);
            throw erro;
        });
}

function buscarViagensPorEstacao(ano) {
    return mysql.createConnection(dbConfig)
        .then(function (connection) {
            return connection.execute(`
                SELECT C.EstacaoAno AS estacao, 
                       COUNT(V.idPassagem) AS totalViagens
                FROM Clima C
                JOIN Viagem V ON V.dtViagem BETWEEN C.DtInicio AND C.DtFim
                WHERE YEAR(V.dtViagem) = ?
                GROUP BY C.EstacaoAno;
            `, [ano])
            .then(function ([rows]) {
                connection.end();
                return rows;
            })
            .catch(function (erro) {
                connection.end();
                console.error("Erro ao executar a query buscarViagensPorEstacao:", erro.message);
                throw erro;
            });
        })
        .catch(function (erro) {
            console.error("Erro ao conectar ao banco de dados:", erro.message);
            throw erro;
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
