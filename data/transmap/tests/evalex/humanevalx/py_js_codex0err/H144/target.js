function simplify(x, n) {
    let a, b = x.split("/");
    let c, d = n.split("/");
    let numerator = parseInt(a) * parseInt(c);
    let denom = parseInt(b) * parseInt(d);
    if (numerator/denom == parseInt(numerator/denom)) {
        return true;
    }
    return false;
}

