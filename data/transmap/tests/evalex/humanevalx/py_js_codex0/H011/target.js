
function string_xor(a, b) {
    function xor(i, j) {
        if (i == j) {
            return '0';
        }
        else {
            return '1';
        }
    }
    return Array.from(a, (x, i) => xor(x, b[i])).join('');
}

