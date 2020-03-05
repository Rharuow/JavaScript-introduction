let numbers = [null, null].fill(0)
let operation

const createNumber = (value) => {    
    numbers.forEach(num => console.log(num))
    let screen = document.querySelector("#screen")
    return screen.value += value
}

const sum = (nums) => {
    return createNumber(nums[0] + nums[1])
}

const sub = (nums) => {
    return createNumber(nums[0] + nums[1])
}

const mul = (nums) => {
    return createNumber(nums[0] + nums[1])
}

const div = (nums) => {
    return createNumber(nums[0] + nums[1])
}

const eq = (nums) => {
    return createNumber(nums[0] + nums[1])
}

const clean = () => {
    let screen = document.querySelector("#screen")
    screen.value = 0;
}
