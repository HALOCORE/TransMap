function f_gold(ransomNote, magazine) {
    var counter = new Map();
    for (var i = 0; i < magazine.length; i++) {
        if (counter.has(magazine[i])) {
            counter.set(magazine[i], counter.get(magazine[i]) + 1);
        }
        else {
            counter.set(magazine[i], 1);
        }
    }
    for (var i = 0; i < ransomNote.length; i++) {
        if (!counter.has(ransomNote[i]) || counter.get(ransomNote[i]) <= 0) {
            return false;
        }
        counter.set(ransomNote[i], counter.get(ransomNote[i]) - 1);
    }
    return true;
}

