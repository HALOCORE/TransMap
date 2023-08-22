function f_gold(arr1, arr2, arr3) {
    function find(arr, val) {
        var left = 0;
        var right = arr.length - 1;
        while (left < right) {
            var mid = (left + right) >> 1;
            if (arr[mid] >= val) {
                right = mid;
            }
            else {
                left = mid + 1;
            }
        }
        return arr[left] == val;
    }
    var res = [];
    for (var num of arr1) {
        if (find(arr2, num) && find(arr3, num)) {
            res.push(num);
        }
    }
    return res;
}

