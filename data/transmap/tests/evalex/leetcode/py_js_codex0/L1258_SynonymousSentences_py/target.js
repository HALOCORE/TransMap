
function f_gold (synonyms, text) {
    var p = {};
    function find (x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    for (var i = 0; i < synonyms.length; i++) {
        var a = synonyms[i][0];
        var b = synonyms[i][1];
        p[a] = a;
        p[b] = b;
    }
    for (var i = 0; i < synonyms.length; i++) {
        var a = synonyms[i][0];
        var b = synonyms[i][1];
        p[find(a)] = find(b);
    }
    var s = {};
    for (var i = 0; i < synonyms.length; i++) {
        var a = synonyms[i][0];
        var b = synonyms[i][1];
        s[find(a)] = new Set();
        s[find(b)] = new Set();
    }
    for (var i = 0; i < synonyms.length; i++) {
        var a = synonyms[i][0];
        var b = synonyms[i][1];
        s[find(a)].add(a);
        s[find(b)].add(b);
    }
    var res = [];
    for (var i = 0; i < text.split(' ').length; i++) {
        var word = text.split(' ')[i];
        if (!p.hasOwnProperty(word)) {
            if (res.length == 0) {
                res.push([word]);
            }
            else {
                for (var j = 0; j < res.length; j++) {
                    res[j].push(word);
                }
            }
        }
        else {
            var words = Array.from(s[find(word)]).sort();
            if (res.length == 0) {
                for (var j = 0; j < words.length; j++) {
                    res.push([words[