function f_gold(phrases) {
    var same_first_word = new Map();
    for (var i = 0; i < phrases.length; i++) {
        var phrase = phrases[i];
        var words = phrase.split(" ");
        var first_word = words[0];
        if (same_first_word.has(first_word)) {
            var set = same_first_word.get(first_word);
            set.add(i);
        }
        else {
            var set = new Set();
            set.add(i);
            same_first_word.set(first_word, set);
        }
    }
    var res = new Set();
    for (var i = 0; i < phrases.length; i++) {
        var phrase = phrases[i];
        var words = phrase.split(" ");
        var last_word = words[words.length - 1];
        if (same_first_word.has(last_word)) {
            var set = same_first_word.get(last_word);
            for (var j of set) {
                if (i != j) {
                    var new_phrase = words.slice(0, words.length - 1).concat(phrases[j].split(" ")).join(" ");
                    res.add(new_phrase);
                }
            }
        }
    }
    return Array.from(res).sort((a, b) => a.localeCompare(b));
}

