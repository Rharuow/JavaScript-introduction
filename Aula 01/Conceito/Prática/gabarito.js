function showElement(buttonValue) {
    // let button = document.querySelector(".btn") || let button = document.getElementByClassName("btn") --> Array
    // let button = document.querySelector("#'id'") || let button = document.getElementById("'id'") --> Unique
    // let button = document.querySelector("'tag_name'") || let button = document.getElementByTagName("'tag_name'") --> Array || unique

    let input = document.querySelector("#screen")

    input.value = buttonValue

}