function is_sorted(lst) {
    var count_digit = {};
    for (var i = 0; i < lst.length; i++) {
        count_digit[lst[i]] = 0;
    }
    for (var i = 0; i < lst.length; i++) {
        count_digit[lst[i]] += 1;
    }
    for (var i = 0; i < lst.length; i++) {
        if (count_digit[lst[i]] > 2) {
            return false;
        }
    }
    for (var i = 1; i < lst.length; i++) {
        if (lst[i - 1] > lst[i]) {
            return false;
        }
    }
    return true;
}

