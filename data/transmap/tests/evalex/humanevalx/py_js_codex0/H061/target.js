function correct_bracketing(brackets) {
    let depth = 0;
    for (let b of brackets) {
        if (b == "(") {
            depth += 1;
        } else {
            depth -= 1;
        }
        if (depth < 0) {
            return false;
        }
    }
    return depth == 0;
}

