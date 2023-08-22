function f_gold(finalSum) {
    if (finalSum % 2) {
        return [];
    }
    var i = 2;
    var ans = [];
    while (i <= finalSum) {
        ans.push(i);
        finalSum -= i;
        i += 2;
    }
    ans[ans.length - 1] += finalSum;
    return ans;
}

