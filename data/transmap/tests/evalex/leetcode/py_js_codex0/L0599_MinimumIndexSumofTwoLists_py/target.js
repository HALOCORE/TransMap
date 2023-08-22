
function f_gold(list1, list2) {
    var ans = [];
    var mp = {};
    for (var i = 0; i < list2.length; i++) {
        mp[list2[i]] = i;
    }
    var mi = 2000;
    for (var i = 0; i < list1.length; i++) {
        if (list1[i] in mp) {
            var t = i + mp[list1[i]];
            if (t < mi) {
                mi = t;
                ans = [list1[i]];
            }
            else if (t == mi) {
                ans.push(list1[i]);
            }
        }
    }
    return ans;
}

