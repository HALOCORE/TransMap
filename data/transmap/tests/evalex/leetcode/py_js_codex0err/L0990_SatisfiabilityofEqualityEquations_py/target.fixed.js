
function f_gold(equations) {
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    let p = Array.from(Array(26).keys());
    for (let e of equations) {
        let a = e.charCodeAt(0) - 'a'.charCodeAt(0);
        let b = e.charCodeAt(e.length - 1) - 'a'.charCodeAt(0);
        if (e[1] == '=') {
            p[find(a)] = find(b);
        }
    }
    for (let e of equations) {
        let a = e.charCodeAt(0) - 'a'.charCodeAt(0);
        let b = e.charCodeAt(e.length - 1) - 'a'.charCodeAt(0);
        if (e[1] == '!' && find(a) == find(b)) {
            return false;
        }
    }
    return true;
}

