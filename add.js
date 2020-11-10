function Calculate() {
    num1 = parseInt(document.getElementById("number1").value);
    num2 = parseInt(document.getElementById("number2").value);
    console.log(num1)
    console.log(num2)
    let result;
    if (oper == "+") {
        result = num1 + num2;
    } else if (oper == "-") {
        result = num1 - num2;
    } else if (oper == "*") {
        result = num1 * num2;
    } else if (oper == "/") {
        result = num1 / num2;
    }
    console.log(result.toString())
    document.getElementById("finalResult").value = result.toString();
}