
function parseNestedParens(parenString) {
    function parseParenGroup(s) {
        let depth = 0;
        let maxDepth = 0;
        for (let c of s) {
            if (c === '(') {
                depth += 1;
                maxDepth = Math.max(depth, maxDepth);
            } else {
                depth -= 1;
            }
        }

        return maxDepth;
    }

    return parenString.split(' ').filter(x => x).map(x => parseParenGroup(x));
}

