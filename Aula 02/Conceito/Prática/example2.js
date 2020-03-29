function checkedInput(op) {

    switch(op) {
        case "+":
            document.getElementById("sum").checked = true
            document.getElementById("button-sum").className = "btn btn-success"
            document.getElementById("button-sub").className = "btn btn-outline-info"
            document.getElementById("button-mult").className = "btn btn-outline-info"
            document.getElementById("button-div").className = "btn btn-outline-info"
        break
        case "-":
            document.getElementById("sub").checked = true
            document.getElementById("button-sum").className = "btn btn-outline-info"
            document.getElementById("button-sub").className = "btn btn-success"
            document.getElementById("button-mult").className = "btn btn-outline-info"
            document.getElementById("button-div").className = "btn btn-outline-info"
        break
        case "x":
            document.getElementById("mult").checked = true
            document.getElementById("button-sum").className = "btn btn-outline-info"
            document.getElementById("button-sub").className = "btn btn-outline-info"
            document.getElementById("button-mult").className = "btn btn-success"
            document.getElementById("button-div").className = "btn btn-outline-info"
        break
        case "/":
            document.getElementById("div").checked = true
            document.getElementById("button-sum").className = "btn btn-outline-info"
            document.getElementById("button-sub").className = "btn btn-outline-info"
            document.getElementById("button-mult").className = "btn btn-outline-info"
            document.getElementById("button-div").className = "btn btn-success"
        break
    }

}