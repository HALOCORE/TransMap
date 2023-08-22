function f_gold(rectangles) {
    var area = 0;
    var minX = rectangles[0][0];
    var minY = rectangles[0][1];
    var maxX = rectangles[0][2];
    var maxY = rectangles[0][3];
    var cnt = {};
    for (var r of rectangles) {
        area += (r[2] - r[0]) * (r[3] - r[1]);
        minX = Math.min(minX, r[0]);
        minY = Math.min(minY, r[1]);
        maxX = Math.max(maxX, r[2]);
        maxY = Math.max(maxY, r[3]);
        cnt[r[0] + "," + r[1]] = (cnt[r[0] + "," + r[1]] || 0) + 1;
        cnt[r[0] + "," + r[3]] = (cnt[r[0] + "," + r[3]] || 0) + 1;
        cnt[r[2] + "," + r[3]] = (cnt[r[2] + "," + r[3]] || 0) + 1;
        cnt[r[2] + "," + r[1]] = (cnt[r[2] + "," + r[1]] || 0) + 1;
    }
    if (area != (maxX - minX) * (maxY - minY) || cnt[minX + "," + minY] != 1 || cnt[minX + "," + maxY] != 1 || cnt[maxX + "," + maxY] != 1 || cnt[maxX + "," + minY] != 1) {
        return false;
    }
    delete cnt[minX + "," + minY];
    delete cnt[minX + "," + maxY];
    delete cnt[maxX + "," + maxY];
    delete cnt[maxX + "," + minY];
    for (var c in cnt) {
        if (cnt[c] !=