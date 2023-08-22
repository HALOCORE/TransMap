
function f_gold(operations) {
    return operations.reduce((acc, curr) => {
        return acc + (curr[1] === '+' ? 1 : -1);
    }, 0);
}

