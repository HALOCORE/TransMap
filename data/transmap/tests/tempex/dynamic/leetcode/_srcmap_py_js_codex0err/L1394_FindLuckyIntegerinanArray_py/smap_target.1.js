function f_gold(arr) {
    var counter = {};
    var ans = -1;
    for (var i = 0; i < arr.length; i++) {
        if (counter[arr[i]] == undefined) {
            counter[arr[i]] = 1;
        }
        else {
            counter[arr[i]] += 1;
        }
    }
    for (var num in counter) {
        if (parseInt(num) == counter[num] && ans < parseInt(num)) {
            ans = num;
        }
    }
    return ans;
}
