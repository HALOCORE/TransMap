function f_gold(wordsDict, word1, word2) {
    var i1 = -1, i2 = -1;
    var shortest_distance = wordsDict.length;
    for (var i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] == word1) {
            i1 = i;
        }
        else if (wordsDict[i] == word2) {
            i2 = i;
        }
        if (i1 != -1 && i2 != -1) {
            shortest_distance = Math.min(shortest_distance, Math.abs(i1 - i2));
        }
    }
    return shortest_distance;
}

