function do_algebra(operator, operand) {
    let expression = operand[0].toString();
    for (let i = 0; i < operator.length; i++) {
        expression += operator[i] + operand[i + 1].toString();
    }
    return eval(expression);
}

