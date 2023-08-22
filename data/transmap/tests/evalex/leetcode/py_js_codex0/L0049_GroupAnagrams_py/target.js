function f_gold(strs) {
    var chars = {};
    for (var i = 0; i < strs.length; i++) {
        var k = strs[i].split("").sort().join("");
        if (chars[k] == undefined) {
            chars[k] = [];
        }
        chars[k].push(strs[i]);
    }
    return Object.values(chars);
}

