function f_gold(sentence1, sentence2) {
    if (sentence1 == sentence2) {
        return true;
    }
    var n1 = sentence1.length;
    var n2 = sentence2.length;
    if (n1 == n2) {
        return false;
    }
    if (n1 < n2) {
        [sentence1, sentence2] = [sentence2, sentence1];
        //
    }
    var words1 = sentence1.split(/\s+/);
    var words2 = sentence2.split(/\s+/);
    var i = 0;
    var j = 0;
    var n1 = words1.length;
    var n2 = words2.length;
    while (i < n2 && words1[i] == words2[i]) {
        i++;
    }
    if (i == n2) {
        return true;
    }
    while (j < n2 && words1[n1 - 1 - j] == words2[n2 - 1 - j]) {
        j++;
    }
    return j == n2 || i + j == n2;
}

