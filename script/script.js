const form = document.getElementById('formularios')

let quantidadePessoas = document.getElementById('quantidade')

const nomes = []
const numeros = []

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()


    criarLinhas()
    atualizarTabela()
    quantidadeDePessoas()
})

function criarLinhas() {
    const nomeUsuario = document.getElementById('nome')
    const telefoneUsuario = document.getElementById('telefone')

    if (nomes.includes(nomeUsuario.value) && numeros.includes(telefoneUsuario.value)) {
        alert('Nome e Número já cadastrado no banco de dados!')
    } else {
        nomes.push(nomeUsuario.value)
        numeros.push(telefoneUsuario.value)

        let linha = `<tr>`
        linha += `<td>${nomeUsuario.value}</td>`
        linha += `<td>${telefoneUsuario.value}</td>`
        linha += `</tr>`

        linhas += linha
    }

    nomeUsuario.value = ''
    telefoneUsuario.value = ''
}

function atualizarTabela() {
    const tabelas = document.querySelector('tbody')
    tabelas.innerHTML = linhas
}

function quantidadeDePessoas() {
    const quantidade = nomes.length

    quantidadePessoas.innerHTML = quantidade

    console.log(quantidade)
}