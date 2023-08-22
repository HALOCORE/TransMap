
function words_string(s) {
    if (!s) {
        return [];
    }

    let s_list = [];

    for (let letter of s) {
        if (letter === ',') {
            s_list.push(' ');
        } else {
            s_list.push(letter);
        }
    }

    s_list = s_list.join('');
    return s_list.split(' ');
}

