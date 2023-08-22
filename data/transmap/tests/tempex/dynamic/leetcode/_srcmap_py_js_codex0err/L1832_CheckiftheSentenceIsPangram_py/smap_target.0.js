function f_gold(sentence) {
    var res = 0;
    for (var c of sentence) {
        res |= 1 << (ord(c) - ord('a'));
        if (res == 0x3FFFFFF) {
            return true;
        }
    }
    return false;
}

