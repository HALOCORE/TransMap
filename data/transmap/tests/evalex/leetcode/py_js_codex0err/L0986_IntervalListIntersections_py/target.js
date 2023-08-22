function f_gold(firstList, secondList) {
    var i = j = 0;
    var ans = [];
    while (i < firstList.length && j < secondList.length) {
        var s1 = firstList[i][0];
        var e1 = firstList[i][1];
        var s2 = secondList[j][0];
        var e2 = secondList[j][1];
        var l = Math.max(s1, s2);
        var r = Math.min(e1, e2);
        if (l <= r) {
            ans.push([l, r]);
        }
        if (e1 < e2) {
            i += 1;
        }
        else {
            j += 1;
        }
    }
    return ans;
}

