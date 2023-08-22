function f_gold(arr, queries) {
    var xors = [0];
    for (var v of arr) {
        xors.push(xors[xors.length - 1] ^ v);
    }
    return queries.map(function (query) {
        return xors[query[0]] ^ xors[query[1] + 1];
    });
}

