let buttons = document.querySelectorAll(".btn")

function ableButtons(buttons, state = true) {
    buttons.forEach( btn => {
        btn.disabled = state
    })
}

function start() {
    ableButtons(buttons)
}

function checkValue(value) {
    if( value.length != 0 ) {
        ableButtons(buttons, false)
    } else {
        ableButtons(buttons, true)
    }
}

function cleanInput(input) {
    buttons[0].disabled = true
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