
function poly(xs, x) {
    return xs.reduce((acc, coeff, i) => acc + coeff * Math.pow(x, i), 0);
}

function find_zero(xs) {
    let begin = -1, end = 1;
    while (poly(xs, begin) * poly(xs, end) > 0) {
        begin *= 2;
        end *= 2;
    }
    while (end - begin > 1e-10) {
        let center = (begin + end) / 2;
        if (poly(xs, center) * poly(xs, begin) > 0) {
            begin = center;
        } else {
            end = center;
        }
    }
    return begin;
}

