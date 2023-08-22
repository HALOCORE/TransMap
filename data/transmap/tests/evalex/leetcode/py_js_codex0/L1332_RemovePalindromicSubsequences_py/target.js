function f_gold(s) {
    if (!s) {
        return 0;
    }
    if (s.split("").reverse().join("") == s) {
        return 1;
    }
    return 2;
}

