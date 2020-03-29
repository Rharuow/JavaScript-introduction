let itens = []
let input = document.getElementById("input")
let lista = document.getElementById("lista")
let dobro = document.getElementById("dobro")
let odds  = document.getElementById("odd")


function add() {
    let liNova = document.createElement("li")
    
    itens.push(parseInt(input.value, 10))

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
    //     dobro.appendChild(elemento)
    //     return (parseInt(el,10) * 2)
    // } )

    let dobros = itens.map( el => el * 2 )

    dobros.forEach(valor => {
        var elemento = document.createElement("li")
        elemento.innerHTML = valor
        dobro.appendChild(elemento)
    })
}

function total() {
    const result = itens.reduce((atual, proximo) => atual += proximo)
    document.getElementById("somatorio").innerHTML = "Somatório = " + result
}

function odd() {
    let valores = itens.filter( el => el % 2 != 0 )

    valores.forEach(valor => {
        var elemento = document.createElement("li")
        elemento.innerHTML = valor
        odds.appendChild(elemento)
    })
}