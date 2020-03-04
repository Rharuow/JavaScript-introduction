let numbers = []
let operation

const createNumber = (value) => {    
    let screen = document.querySelector("#screen")
    return screen.value += value

}

const operation = (nums, operation = "eq", funçao) => {
    switch(operation) {
        case "sum":
            return createNumber(nums[0] + nums[1])
        case "sub":
            return createNumber(nums[0] - nums[1])
        case "mul":
            return createNumber(nums[0] * nums[1])
        case "div":
            return createNumber(nums[0] / nums[1])
    }
}

const clean = () => {
    let screen = document.querySelector("#screen")
    screen.value = 0;
}
