var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idFuncionario, nome, email, fkAdministrador FROM Funcionario WHERE email = '${email}' AND senha = MD5('${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, fkEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, fkEmpresa);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO Funcionario (nome, email, senha, fk_empresa) VALUES ('${nome}', '${email}', '${senha}', '${fkEmpresa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarFuncionarios() {
    var instrucaoSql = `SELECT funcionario.nome, area.nome AS area, funcionario.email, funcionario.telefone 
FROM funcionario 
JOIN area ON funcionario.fkArea = area.idArea 
`
    console.log("Executando a instrução SQL: \n", instrucaoSql);

    return database.executar(instrucaoSql);
}

function buscarFuncionario(char){
    var instrucaoSql = `SELECT funcionario.nome, area.nome AS area, funcionario.email, funcionario.telefone 
FROM funcionario 
JOIN area ON funcionario.fkArea = area.idArea 
WHERE funcionario.nome LIKE "%${char}%"`

    console.log("Executando a isntrução SQL: \n", instrucaoSql)

    return database.executar(instrucaoSql)
}

function listarAdministradores(){
    var instrucaoSql = `SELECT * FROM Funcionario Where fkAdministrador IS NULL;`

    console.log("Executando a instrução SQL:", instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    autenticar,
    cadastrar,
    listarFuncionarios,
    buscarFuncionario,
    listarAdministradores
};