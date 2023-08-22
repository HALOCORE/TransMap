function f_gold(customers) {
    var f = 0, total_waiting_time = 0;
    for (var i = 0; i < customers.length; i++) {
        var arrival = customers[i][0];
        var time = customers[i][1];
        f = Math.max(arrival, f) + time;
        total_waiting_time += f - arrival;
    }
    return total_waiting_time / customers.length;
}

