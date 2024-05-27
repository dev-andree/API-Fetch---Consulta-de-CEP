let cep = window.document.getElementById("cep")
let botao = window.document.getElementById("botao")
let resposta = window.document.getElementById("resposta")
botao.addEventListener("click", clicar)


function clicar(){
    let valorCep = cep.value
    const url = `https://viacep.com.br/ws/${valorCep}/json/`
    

    fetch(url)
    .then(response => response.json())
    .then(dados => {
            resposta.innerHTML += `<br>-----------------------`
            resposta.innerHTML += `<br>CEP: ${dados.cep}<br>`
            resposta.innerHTML += `Logradouro: ${dados.logradouro}<br>`
            resposta.innerHTML += `Complemento: ${dados.complemento}<br>`
            resposta.innerHTML += `Bairro: ${dados.bairro}<br>`
            resposta.innerHTML += `Localidade: ${dados.localidade}<br>`
            resposta.innerHTML += `UF: ${dados.uf}<br>`
            resposta.innerHTML += `IBGE: ${dados.ibge}<br>`
            resposta.innerHTML += `GIA: ${dados.gia}<br>`
            resposta.innerHTML += `DDD: ${dados.ddd}<br>`
            resposta.innerHTML += `SIAFI: ${dados.siafi}<br>`
            resposta.innerHTML += `-----------------------`
    })

    
    .catch(error => {
        window.alert('Erro ao buscar o CEP')
    });
}


let limpaTela = window.document.getElementById("limpaTela")
limpaTela.addEventListener("click", limpar)

function limpar(){
    resposta.innerHTML = " "
}

let salvarLocalmente = window.document.getElementById("salvarLocalmente")
salvarLocalmente.addEventListener("click", salvar)


function salvar() {
    const cep = document.getElementById("resposta").innerHTML;
    localStorage.setItem("cep", cep);
    window.alert('Dados salvos localmente com sucesso');
}


window.addEventListener("load", () => {
    const cep = localStorage.getItem("cep");
    if (cep) {
        document.getElementById("resposta").innerHTML = cep;
    }
});