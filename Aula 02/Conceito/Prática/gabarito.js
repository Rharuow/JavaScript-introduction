function getValue(value) {
    
}


const showElement = (value) => {

    let input = document.querySelector("#screen")

    return input.value = value

}

const operation = (num1, operation, num2) => {
    switch(operation) {
        case "sum":
            return showElement(num1 + num2)
        case "sub":
            return showElement(num1 - num2)
        case "mul":
            return showElement(num1 * num2)
        case "div":
            return showElement(num1 / num2)
    }

}