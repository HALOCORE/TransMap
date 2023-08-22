function f_gold(grid) {
    var rmx = [max(row) for row in grid];
    var cmx = [max(col) for col in zip(*grid)];
    return sum(
        (min(rmx[i], cmx[j]) - grid[i][j])
        for i in range(len(grid))
        for j in range(len(grid[0]))
    )
}

