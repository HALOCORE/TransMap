function prime_length(string) {
    let l = string.length;
    if (l === 0 || l === 1) {
        return false;
    }
    for (let i = 2; i < l; i++) {
        if (l % i === 0) {
            return false;
        }
    }
    return true;
}

