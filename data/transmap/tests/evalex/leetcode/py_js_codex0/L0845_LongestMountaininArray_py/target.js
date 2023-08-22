
function f_gold(arr) {
    var left = 0;
    var right = 1;
    var status = -1;
    var ans = 0;
    while (right < arr.length) {
        if (status == -1 || status == 1) {
            if (arr[right] == arr[right - 1]) {
                status = -1;
            }
            if (status == -1) {
                if (arr[right] > arr[right - 1]) {
                    status = 1;
                } else {
                    left = right;
                }
            }
            if (status == 1 && arr[right] < arr[right - 1]) {
                status = 2;
            }
        } else {
            if (arr[right] == arr[right - 1]) {
                status = -1;
                ans = Math.max(ans, right - left);
                left = right;
            } else if (arr[right] > arr[right - 1]) {
                status = 1;
                ans = Math.max(ans, right - left);
                left = right - 1;
            }
        }
        right += 1;
    }
    if (status == 2) {
        ans = Math.max(right - left, ans);
    }
    return ans;
}

