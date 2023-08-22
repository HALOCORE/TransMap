
function f_gold(image, x, y) {
    var m = image.length;
    var n = image[0].length;
    var left = 0;
    var right = x;
    while (left < right) {
        var mid = (left + right) >> 1;
        var c = 0;
        while (c < n && image[mid][c] == '0') {
            c++;
        }
        if (c < n) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    var u = left;
    left = x;
    right = m - 1;
    while (left < right) {
        var mid = (left + right + 1) >> 1;
        var c = 0;
        while (c < n && image[mid][c] == '0') {
            c++;
        }
        if (c < n) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }
    var d = left;
    left = 0;
    right = y;
    while (left < right) {
        var mid = (left + right) >> 1;
        var r = 0;
        while (r < m && image[r][mid] == '0') {
            r++;
        }
        if (r < m) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    var l = left;
    left = y;
    right = n - 1;
    while (left < right) {
        var mid = (left + right + 1) >> 1;
        var r = 0;
        while (r < m && image[r][mid] == '0') {
            r++;
        }
        if (r < m) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }
    var r = left;
    return (d - u + 1) * (r - l + 1);
}

