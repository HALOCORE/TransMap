function f_gold(arr, pieces) {
    var mapper = {};
    for (var piece of pieces) {
        mapper[piece[0]] = piece;
    }
    var i = 0;
    var n = arr.length;
    while (i < n) {
        if (!(arr[i] in mapper)) {
            return false;
        }
        var vals = mapper[arr[i]];
        for (var val of vals) {
            if (arr[i] != val) {
                return false;
            }
            i++;
        }
    }
    return true;
}

