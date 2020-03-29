function calculate() {
    let primeiroInput = document.getElementById("num1").value //documento = DOM
    let segundoInput = document.getElementById("num2").value
    // console.log("primeiro valor = " + primeiroInput)
    // console.log("segundo valor = " + segundoInput)
    let resultInput = document.getElementById("result")
    // console.log("resultInput = " + resultInput)
    let radios = document.getElementsByName("operation")

    let operation

    // console.log("operation Before = " + operation)

    radios.forEach( el => {
        if( el.checked ) operation = el.value
    })

    // console.log("operation After = " + operation)

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