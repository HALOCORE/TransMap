
function will_it_fly(q, w) {
    if (q.reduce((a, b) => a + b) > w) {
        return false;
    }

    let i = 0;
    let j = q.length - 1;
    while (i < j) {
        if (q[i] != q[j]) {
            return false;
        }
        i += 1;
        j -= 1;
    }
    return true;
}

