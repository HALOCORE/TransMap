function f_gold(image, sr, sc, newColor) {
    function dfs(i, j, oc, nc) {
        if (i < 0 || i >= image.length || j < 0 || j >= image[0].length || image[i][j] != oc || image[i][j] == nc) {
            return;
        }
        image[i][j] = nc;
        for (let x = 0; x < 2; x++) {
            for (let y = 0; y < 2; y++) {
                dfs(i + x, j + y, oc, nc);
            }
        }
    }
    dfs(sr, sc, image[sr][sc], newColor);
    return image;
}

