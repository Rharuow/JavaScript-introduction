function calculate() {
    let primeiroInput = document.getElementById("num1").value
    let segundoInput = document.getElementById("num2").value
    let resultInput = document.getElementById("result")
    let radios = document.getElementsByName("operation")
    let operation

    radios.forEach( el => {
        if( el.checked ) operation = el.value
    })

    switch(operation) {
        case "sum":
            resultInput.value = parseInt(primeiroInput) + parseInt(segundoInput)
        break
        case "sub":
            resultInput.value = parseInt(primeiroInput) - parseInt(segundoInput)
        break
        case "mult":
            resultInput.value = parseInt(primeiroInput) * parseInt(segundoInput)
        break
        case "div":
            if( segundoInput != 0 ) {
                resultInput.value = parseInt(primeiroInput) / parseInt(segundoInput)
            } else {
                alert("Não é possível dividir nenhum número por 0")
            }
        break
    }
}