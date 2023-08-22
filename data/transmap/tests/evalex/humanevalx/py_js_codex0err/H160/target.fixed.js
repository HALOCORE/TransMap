function do_algebra(operator, operand) {
    let expression = operand[0].toString();
    for (let i = 0; i < operator.length; i++) {
        expression += operator[i] + operand[i + 1].toString();
    }
    return eval(function(expr){
        const regex = /([0-9]+\/[0-9]+)/;
        let list = expr.replace('//', '/').split(regex);
        expr = '';
        let start = true;
        for(let i in list){
            let index = Number(i);
            expr += list[index];
            if(index !== list.length - 1){
                if(start)
                    expr += 'parseInt(';
                else
                    expr += ')';
                start = !start;
            }
        }
        return expr;
    }(expression));
}

