function prod_signs(arr) {
    if (!arr) return null;
    let prod = 0;
    if (arr.includes(0)) {
        prod = 0;
    } else {
        prod = (-1) ** arr.filter(x => x < 0).length;
    }
    return prod * arr.reduce((acc, curr) => acc + Math.abs(curr), 0);
}

