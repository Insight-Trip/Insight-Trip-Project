const listaFuncionariosContainer = document.querySelector('.lista-funcionarios');


function listarFuncionarios(){
    listaFuncionariosContainer.innerHTML = ""
    fetch("../../usuarios/listar", {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then(listaFuncionarios => {
                listaFuncionarios.forEach(funcionario => {
                    // Obtém o container onde serão inseridos os funcionários


                    // Cria a estrutura do funcionário
                    const containerFuncionario = document.createElement('section');
                    containerFuncionario.className = 'container-funcionario';

                    // Define o HTML interno com os dados do funcionário
                    containerFuncionario.innerHTML = `
                <div class="caixa-nome-funcionario">
                    <img src="./imagens/pessoa.png">
                    <p class="nome-funcionario">${funcionario.nome}</p>
                    <p class="cargo-funcionario">${funcionario.area}</p>
                </div>
                <div class="caixa-alterar-funcionario">
                    <img src="./imagens/edit.png" class="botao-icone">
                    <img src="./imagens/delete.png" class="botao-icone">
                </div>
            `;

                    // Adiciona o novo container à lista
                    listaFuncionariosContainer.appendChild(containerFuncionario);
                });
            });
        }).catch(error => "Houve um erro de retorno ao listar os funcionarios \n" + error);
}

listarFuncionarios();



function buscarFuncionario(char, view){
    view.innerHTML = ""
    fetch("../../usuarios/buscar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            busca: char
        })
    })
    .then(function (resposta) {
        resposta.json().then(listaFuncionariosBuscados =>{
            listaFuncionariosBuscados.forEach(funcionarioBuscado =>{
                console.log(funcionarioBuscado.nome)

                view.innerHTML = `
                <div class="caixa-nome-funcionario">
                    <img src="./imagens/pessoa.png">
                    <p class="nome-funcionario">${funcionarioBuscado.nome}</p>
                    <p class="cargo-funcionario">${funcionarioBuscado.area}</p>
                </div>
                <div class="caixa-alterar-funcionario">
                    <img src="./imagens/edit.png" class="botao-icone">
                    <img src="./imagens/delete.png" class="botao-icone">
                </div>`

            })
        })
    })

}







const btnBuscar = document.getElementById('button_buscar');

btnBuscar.addEventListener('click', ()=>{
    const searchBar = document.getElementById('input_busca')

    searchBar.addEventListener('input', buscarFuncionario(searchBar.value, listaFuncionariosContainer));

    if(!searchBar.value || searchBar.value.trim().length === 0){
        listarFuncionarios();
    }
})

    