function f_gold(seats, students) {
    seats.sort();
    students.sort();
    return sum(abs(seats[i] - students[i]) for (i = 0; i < len(seats); i++));
}

