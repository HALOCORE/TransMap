function f_gold(s, k) {
    let n = s.length;
    let maxLength = 0;
    for (let i = 1; i < 27; i++) {
        let counter = {};
        let left = 0;
        let right = 0;
        let unique = 0;
        let kCount = 0;
        while (right < n) {
            if (unique <= i) {
                let r = s[right];
                counter[r] = counter[r] + 1 || 1;
                if (counter[r] == 1) {
                    unique += 1;
                }
                if (counter[r] == k) {
                    kCount += 1;
                }
                right += 1;
            }
            else {
                let l = s[left];
                counter[l] = counter[l] - 1 || 0;
                if (counter[l] == 0) {
                    unique -= 1;
                }
                if (counter[l] == k - 1) {
                    kCount -= 1;
                }
                left += 1;
            }
            if (unique == i && kCount == i) {
                maxLength = Math.max(maxLength, right - left);
            }
        }
    }
    return maxLength;
}

