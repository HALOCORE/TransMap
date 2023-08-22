function f_gold(grid) {
    var xy = sum(v > 0 for (var row in grid) for (var v in row));
    var yz = sum(max(row) for (var row in grid));
    var zx = sum(max(col) for (var col in zip(grid)));
    return xy + yz + zx;
}

