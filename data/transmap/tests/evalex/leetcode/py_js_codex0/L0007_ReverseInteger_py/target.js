function f_gold(x) {
    var y = parseInt(String(Math.abs(x)).split("").reverse().join(""));
    var res = -y if (x < 0) else y;
    return 0 if (res < -(Math.pow(2, 31)) || res > Math.pow(2, 31) - 1) else res;
}

