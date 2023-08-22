function f_gold(letters, target) {
    var left = 0;
    var right = letters.length;
    while (left < right) {
        var mid = (left + right) >> 1;
        if (letters[mid].charCodeAt(0) > target.charCodeAt(0)) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return letters[left % letters.length];
}

