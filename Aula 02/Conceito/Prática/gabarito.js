let numbers = []
let screen 


function operation(op) {
    if(numbers.length == 0) {
        numbers.push(parseInt(screen.value, 10))
        screen.value = null
    } else {
        screen.value != null ? numbers.push(parseInt(screen.value, 10)) : numbers.push(numbers[0], 10)
        switch(op) {
            case "sum":
                screen.value = numbers[0] + numbers[1]
                numbers = []
                numbers[0] = parseInt(screen.value)
                break;
            case "sub":
                screen.value = numbers[0] - numbers[1]
                numbers = []
                numbers[0] = parseInt(screen.value)
                break;
            case "mul":
                screen.value = numbers[0] * numbers[1]
                numbers = []
                numbers[0] = parseInt(screen.value)
                break;
            case "div":
                screen.value = numbers[0] / numbers[1]
                numbers = []
                numbers[0] = parseInt(screen.value)
                break;
            case "clean":
                numbers = []
                screen.value = 0
                break;
            case "eq":
                operation(op)
                break; 
        }
    }
}

function setValue(value) {
    screen = document.querySelector("#screen")    
    screen.value == "0" ? screen.value = value : screen.value += value
}