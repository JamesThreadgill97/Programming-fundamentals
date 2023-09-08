function calculate(a, b, c) {
    if (c == "-" || c == "+" || c == "/" || c == "*") {
        if (c = "+") {
            return a + b
        } else if (c= "-") {
            return a - b 
        } else if (c = "/") {
            return a / b 
        } else if (c = "*") {
            return a * b
        }
    } else {
        console.log("ERROR! Please use correct inputs!")
    }
}

console.log(calculate(5, 7, "1"));
