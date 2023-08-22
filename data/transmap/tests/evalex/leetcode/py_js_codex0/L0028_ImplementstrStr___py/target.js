function f_gold(haystack, needle) {
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let p = i;
        let q = 0;
        while (p < haystack.length && q < needle.length && haystack[p] == needle[q]) {
            p++;
            q++;
        }
        if (q == needle.length) {
            return i;
        }
    }
    return -1;
}

