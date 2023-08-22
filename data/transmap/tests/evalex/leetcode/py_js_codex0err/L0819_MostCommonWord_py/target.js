const f_gold = (paragraph, banned) => {
    let s = new Set(banned);
    let p = new Map(re.findall('[a-z]+', paragraph.toLowerCase()));
    return next(word for word, _ in p.most_common() if word not in s);
}

