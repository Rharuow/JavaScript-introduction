let numbers = []
let result = 0
let screen 

function sum() {
    numbers.push(parseInt(screen.value, 10))
    result = numbers.reduce(function(accumulator, current) {
        return accumulator + current
    })
    screen.value = null
}

function sub() {
    numbers.push(parseInt(screen.value, 10))
    result = numbers.reduce(function(accumulator, current) {
        return accumulator - current
    })
    screen.value = result
}

function mul() {
    numbers.push(parseInt(screen.value, 10))
    result = numbers.reduce(function(accumulator, current) {
        return accumulator * current
    })
    screen.value = result
}

function div() {
    numbers.push(parseInt(screen.value, 10))
    result = numbers.reduce(function(accumulator, current) {
        return accumulator / current
    })
    screen.value = result
}

function equals() {
    screen = document.querySelector("#screen")
    screen.value = result
}

function clean() {
    screen = document.querySelector("#screen")
    numbers = []
    screen.value = null
}

function setValue(value, reset = false) {
    screen = document.querySelector("#screen")    
    reset ? screen.value = null : screen.value += value
}