function f_gold(sentence, discount) {
    var ans = [];
    for (var w of sentence.split(/\s+/)) {
        if (w[0] == '$' && /^\d+$/.test(w.slice(1))) {
            var t = parseInt(w.substring(1)) * (1 - discount / 100);
            ans.push('$' + t.toFixed(2));
        }
        else {
            ans.push(w);
        }
    }
    return ans.join(' ');
}

