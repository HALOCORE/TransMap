function f_gold(sentence, discount) {
    var ans = [];
    for (var w of sentence.split()) {
        if (w[0] == '$' && w[1:].isdigit()) {
            var t = parseInt(w[1:]) * (1 - discount / 100);
            ans.push('$' + '{:.2f}'.format(t));
        }
        else {
            ans.push(w);
        }
    }
    return ' '.join(ans);
}

