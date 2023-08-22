function move_one_ball(arr) {
    if (arr.length == 0) {
        return true;
    }
    var sorted_array = arr.sort();
    var my_arr = [];
    var min_value = Math.min.apply(Math, arr);
    var min_index = arr.indexOf(min_value);
    my_arr = arr.slice(min_index).concat(arr.slice(0, min_index));
    for (var i = 0; i < arr.length; i++) {
        if (my_arr[i] != sorted_array[i]) {
            return false;
        }
    }
    return true;
}

