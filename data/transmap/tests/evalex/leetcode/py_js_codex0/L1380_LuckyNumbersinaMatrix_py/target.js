function f_gold(matrix) {
    var rows = new Set(matrix.map(function (row) { return Math.min.apply(Math, row); }));
    var cols = new Set(matrix[0].map(function (_, i) { return Math.max.apply(Math, matrix.map(function (row) { return row[i]; })); }));
    return Array.from(rows).filter(function (x) { return cols.has(x); });
}

