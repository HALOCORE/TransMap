
function f_gold(wordsDict, word1, word2) {
    var i1 = -1, i2 = -1;
    var shortest_distance = wordsDict.length;
    var same = word1 == word2;
    for (var i = 0; i < wordsDict.length; i++) {
        if (same) {
            if (word1 == wordsDict[i]) {
                if (i1 != -1) {
                    shortest_distance = Math.min(shortest_distance, i - i1);
                }
                i1 = i;
            }
        } else {
            if (word1 == wordsDict[i]) {
                i1 = i;
            }
            if (word2 == wordsDict[i]) {
                i2 = i;
            }
            if (i1 != -1 && i2 != -1) {
                shortest_distance = Math.min(shortest_distance, Math.abs(i1 - i2));
            }
        }
    }
    return shortest_distance;
}

