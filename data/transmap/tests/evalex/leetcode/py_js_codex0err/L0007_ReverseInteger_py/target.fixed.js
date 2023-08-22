function f_gold(x) {
    var y = parseInt(String(Math.abs(x)).split("").reverse().join(""));
    var res = (x < 0) ? -y : y;
    return (res < -(Math.pow(2, 31)) || res > Math.pow(2, 31) - 1) ? 0 : res;
}

