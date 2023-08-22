function max_fill(grid, capacity) {
    return grid.reduce((acc, arr) => acc + Math.ceil(arr.reduce((acc, val) => acc + val, 0) / capacity), 0);
}

