function by_length(arr) {
    var dic = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
    };
    var sorted_arr = [...arr].sort(function (a, b) { return b - a; });
    var new_arr = [];
    for (var _i = 0, sorted_arr_1 = sorted_arr; _i < sorted_arr_1.length; _i++) {
        var var_1 = sorted_arr_1[_i];
        try {
            if(typeof(dic[var_1]) !== "undefined") new_arr.push(dic[var_1]);
        }
        catch (e) {
        }
    }
    return new_arr;
}

