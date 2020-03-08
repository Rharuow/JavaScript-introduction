let numbers = []
let screen 
let reset = false
let equals

function operation(op) {
    if(numbers.length == 0) {
        numbers.push(parseInt(screen.value, 10))
        screen.value = null
    } else {
        screen.value != null ? numbers.push(parseInt(screen.value, 10)) : numbers.push(numbers[0], 10)
        reset = true
        switch(op) {
            case "sum":
                screen.value = numbers[0] + numbers[1]
                numbers = []
                numbers[0] = parseInt(screen.value)
                equals = "sum"
                break;
            case "sub":
                screen.value = numbers[0] - numbers[1]
                numbers = []
                numbers[0] = parseInt(screen.value)
                equals = "sub"
                break;
            case "mul":
                screen.value = numbers[0] * numbers[1]
                numbers = []
                numbers[0] = parseInt(screen.value)
                equals = "mul"
                break;
            case "div":
                screen.value = numbers[0] / numbers[1]
                numbers = []
                numbers[0] = parseInt(screen.value)
                equals = "div"
                break;
            case "clean":
                numbers = []
                screen.value = 0
                break;
            case "eq":
                operation(equals)
                break; 
        }
    }
}

function setValue(value) {
    screen = document.querySelector("#screen")    
    screen.value == "0" || reset ? screen.value = value : screen.value += value
    reset = false
}