function f_gold(data) {
    let n = 0;
    for (let v of data) {
        if (n > 0) {
            if (v >> 6 != 0b10) {
                return false;
            }
            n -= 1;
        }
        else if (v >> 7 == 0) {
            n = 0;
        }
        else if (v >> 5 == 0b110) {
            n = 1;
        }
        else if (v >> 4 == 0b1110) {
            n = 2;
        }
        else if (v >> 3 == 0b11110) {
            n = 3;
        }
        else {
            return false;
        }
    }
    return n == 0;
}

