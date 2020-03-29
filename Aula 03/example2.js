function start() {

}

function cleanInput(input) {
    input.value = ""
    input.placeholder = "DIGITE OUTRO"

}

function escreverNoHTML(valores, elemento, parente = 0) { 
    valores.forEach(valor => {
        elemento.innerHTML = valor
        elemento.className = "lista-original"
        parente.appendChild(elemento)
    })
}