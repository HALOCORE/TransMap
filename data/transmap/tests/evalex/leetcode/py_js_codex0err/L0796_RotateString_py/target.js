function f_gold(s, goal) {
    return s.length == goal.length && goal in s + s;
}

