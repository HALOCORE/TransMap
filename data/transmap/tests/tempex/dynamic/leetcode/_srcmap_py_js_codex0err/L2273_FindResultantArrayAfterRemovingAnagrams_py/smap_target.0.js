const removeAnagrams = (words) => {
    return words.filter((w, i) => {
        return i === 0 || w.split('').sort().join('') !== words[i - 1].split('').sort().join('');
    });
};

