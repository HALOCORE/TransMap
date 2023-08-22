
function f_gold(arr) {
    function find(cnt) {
        var s = 0;
        for (var i = 0; i < arr.length; i++) {
            s += arr[i];
            if (s == cnt) {
                return i;
            }
        }
        return -1;
    }
    var n = arr.length;
    var cnt = arr.reduce((a, b) => a + b) / 3;
    var mod = arr.reduce((a, b) => a + b) % 3;
    if (mod) {
        return [-1, -1];
    }
    if (cnt == 0) {
        return [0, n - 1];
    }
    var i = find(1);
    var j = find(cnt + 1);
    var k = find(cnt * 2 + 1);
    while (k < n && arr[i] == arr[j] == arr[k]) {
        i = i + 1;
        j = j + 1;
        k = k + 1;
    }
    if (k == n) {
        return [i - 1, j];
    }
    return [-1, -1];
}

