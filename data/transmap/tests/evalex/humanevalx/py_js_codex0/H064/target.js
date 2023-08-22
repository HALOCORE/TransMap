
const vowels_count = s => {
    const vowels = "aeiouAEIOU";
    let n_vowels = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            n_vowels += 1;
        }
    }
    if (s[s.length - 1] === 'y' || s[s.length - 1] === 'Y') {
        n_vowels += 1;
    }
    return n_vowels;
};

