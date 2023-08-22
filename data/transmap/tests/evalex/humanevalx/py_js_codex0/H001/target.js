
function separateParenGroups(parenString) {
    var result = [];
    var currentString = [];
    var currentDepth = 0;

    for (var _i = 0, parenString_1 = parenString; _i < parenString_1.length; _i++) {
        var c = parenString_1[_i];
        if (c === '(') {
            currentDepth += 1;
            currentString.push(c);
        }
        else if (c === ')') {
            currentDepth -= 1;
            currentString.push(c);
            if (currentDepth === 0) {
                result.push(currentString.join(''));
                currentString.length = 0;
            }
        }
    }
    return result;
}

