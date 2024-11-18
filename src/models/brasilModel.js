var mysql = require("../database/config")

// Configuração do banco
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'sua_senha',
  database: 'InsightTrip'
};

function buscarEstadosDestaque(filtroEstado, filtroPeriodo, dataInicio, dataFim) {
    let query = `
        SELECT UF.Nome AS estado, 
               COUNT(E.idEventos) AS tendencia, 
               SUM(C.QtdVitimas) AS seguranca
        FROM UF
        LEFT JOIN EstadoHasEventos E ON E.fkEstado = UF.CodigoIBGE
        LEFT JOIN Criminalidade C ON C.fkEstado = UF.CodigoIBGE
    `;

    if (filtroEstado) {
        query += ` WHERE UF.CodigoIBGE = ?`;
    }

    if (filtroPeriodo === 'proximo-semestre') {
        query += ` AND E.dataEvento BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 6 MONTH)`;
    } else if (filtroPeriodo === 'proximos-2-anos') {
        query += ` AND E.dataEvento BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 2 YEAR)`;
    }

    if (dataInicio && dataFim) {
        query += ` AND E.dataEvento BETWEEN ? AND ?`;
    }

    query += ` GROUP BY UF.Nome`;

    return mysql.createConnection(dbConfig)
        .then(function (connection) {
            return connection.execute(query, [filtroEstado, dataInicio, dataFim].filter(Boolean))
            .then(function ([rows]) {
                connection.end();
                return rows; 
            })
            .catch(function (erro) {
                connection.end(); 
                console.error("Erro ao executar a query buscarEstadosDestaque:", erro.message);
                throw erro; 
            });
        })
        .catch(function (erro) {
            console.error("Erro ao conectar ao banco de dados:", erro.message);
            throw erro; 
        });
}

function buscarTendenciasEstrangeiras(filtroPeriodo, filtroEstado, dataInicio, dataFim) {
    let query = `
        SELECT P.Nome AS pais, 
               COUNT(V.idPassagem) AS viagens
        FROM Pais P
        JOIN Aeroporto A ON A.fkPais = P.idPais
        JOIN Viagem V ON V.fkAeroportoOrigem = A.idAeroporto
    `;

    if (filtroEstado) {
        query += ` WHERE A.fkEstado = ?`;
    }

    if (filtroPeriodo === 'proximo-semestre') {
        query += ` AND V.dtViagem BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 6 MONTH)`;
    } else if (filtroPeriodo === 'proximos-2-anos') {
        query += ` AND V.dtViagem BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 2 YEAR)`;
    }

    if (dataInicio && dataFim) {
        query += ` AND V.dtViagem BETWEEN ? AND ?`;
    }

    query += ` GROUP BY P.Nome`;

    return mysql.createConnection(dbConfig)
        .then(function (connection) {
            return connection.execute(query, [filtroEstado, dataInicio, dataFim].filter(Boolean))
            .then(function ([rows]) {
                connection.end();
                return rows; 
            })
            .catch(function (erro) {
                connection.end(); 
                console.error("Erro ao executar a query buscarTendenciasEstrangeiras:", erro.message);
                throw erro; 
            });
        })
        .catch(function (erro) {
            console.error("Erro ao conectar ao banco de dados:", erro.message);
            throw erro; 
        });
}

function buscarViagensPorEstacao(filtroPeriodo, filtroEstado, dataInicio, dataFim) {
    let query = `
        SELECT C.EstacaoAno AS estacao, 
               COUNT(V.idPassagem) AS totalViagens
        FROM Clima C
        JOIN Viagem V ON V.dtViagem BETWEEN C.DtInicio AND C.DtFim
    `;

    if (filtroEstado) {
        query += ` WHERE V.fkEstado = ?`;
    }

    if (filtroPeriodo === 'proximo-semestre') {
        query += ` AND V.dtViagem BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 6 MONTH)`;
    } else if (filtroPeriodo === 'proximos-2-anos') {
        query += ` AND V.dtViagem BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 2 YEAR)`;
    }

    if (dataInicio && dataFim) {
        query += ` AND V.dtViagem BETWEEN ? AND ?`;
    }

    query += ` GROUP BY C.EstacaoAno`;

    return mysql.createConnection(dbConfig)
        .then(function (connection) {
            return connection.execute(query, [filtroEstado, dataInicio, dataFim].filter(Boolean))
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
    buscarEstadosDestaque,
    buscarTendenciasEstrangeiras,
    buscarViagensPorEstacao
};
