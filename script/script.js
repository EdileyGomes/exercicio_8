const form = document.getElementById('fomularios')

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()


    criarLinhas()
    atualizarTabela()
})

function criarLinhas() {
    const nomeUsuario = document.getElementById('nome')
    const telefoneUsuario = document.getElementById('telefone')

    let linha = `<tr>`
    linha += `<td>${nomeUsuario.value}</td>`
    linha += `<td>${telefoneUsuario.value}</td>`
    linha += `</tr>`

    linhas += linha

    nomeUsuario.value = ''
    telefoneUsuario.value = ''
}

function atualizarTabela() {
    const tabelas = document.querySelector('tbody')
    tabelas.innerHTML = linhas
}

console.log(telefoneUsuario.value)