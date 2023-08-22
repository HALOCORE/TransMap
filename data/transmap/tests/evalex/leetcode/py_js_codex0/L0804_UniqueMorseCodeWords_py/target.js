function f_gold(words) {
    var codes = [
        ".-",
        "-...",
        "-.-.",
        "-..",
        ".",
        "..-.",
        "--.",
        "....",
        "..",
        ".---",
        "-.-",
        ".-..",
        "--",
        "-.",
        "---",
        ".--.",
        "--.-",
        ".-.",
        "...",
        "-",
        "..-",
        "...-",
        ".--",
        "-..-",
        "-.--",
        "--..",
    ];
    var s = new Set();
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var code = "";
        for (var j = 0; j < word.length; j++) {
            var c = word[j];
            code += codes[c.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        s.add(code);
    }
    return s.size;
}

