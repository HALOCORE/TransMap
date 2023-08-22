
function check_if_last_char_is_a_letter(txt) {
    let check = txt.split(' ')[-1];
    return (check.length == 1 && (97 <= check.toLowerCase().charCodeAt(0) <= 122)) ? true : false;
}

