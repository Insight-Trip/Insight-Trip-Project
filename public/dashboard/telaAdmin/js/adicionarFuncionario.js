const selectAdms = document.getElementById('select_admin')

fetch("/../usuarios/listarAdm", {
    method: "GET",
})
.then(resposta => resposta.json())
.then(listaAdms => {
    listaAdms.forEach(adm => {
        selectAdms.innerHTML += `<option value="${adm.idFuncionario}">${adm.Nome}</option>`
        
    });
})
.catch(error => console.error("Houve um erro de retorno ao listar os funcionarios \n" + error));
