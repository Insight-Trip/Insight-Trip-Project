var database = require("../database/config");

function buscarDados(json){
    console.log(json)

    let parametro = ""

    if(json.estado){
        parametro = ` WHERE uf.CodigoIBGE = '${json.estado}';`
    }

    if(json.evento){
        parametro = `WHERE v.dtViagem >= ev.data AND v.dtViagem <= ev.dataFim`
    }


    var instrucaoSql = `SELECT uf.nome, v.QtdPassageirosPagos AS 'Pagos', v.QtdPassageirosGratis AS "Gratis" FROM viagem as v 
    join aeroporto as a on fkAeroportoDestino = idAeroporto join uf on fkEstado = CodigoIBGE join eventos as ev on ev.fkEstado = uf.CodigoIbge;`
    console.log("executando a instrução sql:", instrucaoSql + parametro)

    return database.executar(instrucaoSql + parametro);
}


function adicionarContexto(json){

    if(json.periodoInicial && !json.periodoFinal){
        `WHERE dtViagem BETWEEN '${json.periodoInicial}' AND '${json.periodoFinal}'`
    }


    if(json.periodoInicial || json.periodoFinal){
    }

}


module.exports = {
    buscarDados
}