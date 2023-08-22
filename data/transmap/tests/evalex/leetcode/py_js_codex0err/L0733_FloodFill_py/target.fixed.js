function f_gold(image, sr, sc, newColor) {
    function dfs(i, j, oc, nc) {
        if (i < 0 || i >= image.length || j < 0 || j >= image[0].length || image[i][j] != oc || image[i][j] == nc) {
            return;
        }
        image[i][j] = nc;
        for (let [x, y] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
            dfs(i + x, j + y, oc, nc);
        }
    }
    dfs(sr, sc, image[sr][sc], newColor);
    return image;
}

