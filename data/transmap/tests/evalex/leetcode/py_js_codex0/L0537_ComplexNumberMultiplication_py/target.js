function f_gold(num1, num2) {
    var a = parseInt(num1.split("+")[0]);
    var b = parseInt(num1.split("+")[1].split("i")[0]);
    var c = parseInt(num2.split("+")[0]);
    var d = parseInt(num2.split("+")[1].split("i")[0]);
    return (a * c - b * d) + "+" + (a * d + c * b) + "i";
}

