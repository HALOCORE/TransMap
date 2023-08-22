function f_gold(no) {
    return (no == 0)? 0 : parseInt(no % 10) + f_gold(parseInt(no / 10));
}

