function f_gold(text, first, second) {
    var words = text.split(' ');
    return [
        words[i + 2]
        for (var i = 0; i < words.length - 2; i++)
        if (words[i] == first && words[i + 1] == second)
    ];
}

