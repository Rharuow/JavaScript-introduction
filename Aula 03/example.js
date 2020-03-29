let itens = []
let input = document.getElementById("input")
let lista = document.getElementById("lista")
let novaLista = document.getElementById("novaLista")


function add() {
    let liNova = document.createElement("li")
    
    itens.push(input.value)

    escreverNoHTML(itens,liNova,lista)

    cleanInput(input)

}

function drop() {
    let itensList = document.getElementsByClassName("lista-original")

    itensList[itensList.length-1].remove()

    itens.pop()

    cleanInput(input)
}

function dobrar() {
    // let dobros = itens.map( el => {
    //     var elemento = document.createElement("li")
    //     elemento.innerHTML = parseInt(el,10) * 2
    //     novaLista.appendChild(elemento)
    //     return (parseInt(el,10) * 2)
    // } )

    let dobros = itens.map( el => parseInt(el,10) * 2 )

    dobros.forEach(valor => {
        var elemento = document.createElement("li")
        elemento.innerHTML = valor
        novaLista.appendChild(elemento)
    })
}

