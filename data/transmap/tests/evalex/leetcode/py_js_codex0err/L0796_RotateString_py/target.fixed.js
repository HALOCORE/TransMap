function f_gold(s, goal) {
    return s.length == goal.length && (s + s).indexOf(goal) >= 0;
}

