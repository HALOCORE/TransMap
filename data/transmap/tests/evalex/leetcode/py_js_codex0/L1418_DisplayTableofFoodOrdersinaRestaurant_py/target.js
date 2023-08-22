
function f_gold(orders) {
    var tables = new Set();
    var foods = new Set();
    var mp = new Counter();
    for (var _ = 0; _ < orders.length; _++) {
        var table = orders[_][1];
        var food = orders[_][2];
        tables.add(parseInt(table));
        foods.add(food);
        mp.set(table + "." + food, mp.get(table + "." + food) + 1);
    }
    foods = foods.sort();
    tables = tables.sort();
    var res = [["Table"].concat(foods)];
    for (var table of tables) {
        var t = [table.toString()];
        for (var food of foods) {
            t.push(mp.get(table + "." + food).toString());
        }
        res.push(t);
    }
    return res;
}

