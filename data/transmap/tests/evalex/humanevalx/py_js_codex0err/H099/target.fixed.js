
function closest_integer(value) {
    var num = parseFloat(value);
    if (value.slice(value.length-2) == '.5') {
        if (num > 0) {
            res = Math.ceil(num);
        } else {
            res = Math.floor(num);
        }
    } else if (value.length > 0) {
        res = Math.round(num);
    } else {
        res = 0;
    }

    return res;
}

