var dashboardModel = require("../models/dashboardModel.js");

function construirDashboard(req, res){
    const { estado, clima, evento, periodo, user } = req.params;

    // Validação dos parâmetros recebidos
    if (!estado && !clima && !evento && !periodo && !user) {
        res.status(400).send("Nenhum parâmetro foi fornecido para construir a dashboard");
        return;
    }

    const json = {
        estado : estado, 
        clima : clima,
        evento : evento,
        periodo : periodo,
        user : user
    }

    // Chamada ao modelo para buscar os dados
    dashboardModel.buscarDados(json)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json({
                    mensagem: "Dados da dashboard recuperados com sucesso",
                    dados: resultado,
                    parametros: {
                        estado,
                        clima, 
                        evento,
                        periodo,
                        user
                    }
                });
            } else {
                res.status(404).json({
                    mensagem: "Nenhum dado encontrado para os parâmetros fornecidos",
                    parametros: {
                        estado,
                        clima,
                        evento, 
                        periodo,
                        user
                    }
                });
            }
        }).catch(function (erro) {
            console.log("Erro ao buscar dados da dashboard:", {
                mensagem: erro.message,
                sqlMessage: erro.sqlMessage,
                stack: erro.stack
            });
            res.status(500).json({
                erro: "Erro interno do servidor",
                detalhes: erro.sqlMessage
            });
        });
}

module.exports = {
    construirDashboard
}