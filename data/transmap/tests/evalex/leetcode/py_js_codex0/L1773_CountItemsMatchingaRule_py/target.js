function f_gold(items, ruleKey, ruleValue) {
    var count = 0;
    var m = {'type': 0, 'color': 1, 'name': 2};
    return items.reduce(function(acc, item) {
        return acc + (item[m[ruleKey]] == ruleValue);
    }, 0);
}

