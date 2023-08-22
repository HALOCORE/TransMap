function f_gold(sx, sy, tx, ty) {
    while (tx > sx && ty > sy && tx != ty) {
        if (tx > ty) {
            tx %= ty;
        }
        else {
            ty %= tx;
        }
    }
    if (tx == sx && ty == sy) {
        return true;
    }
    if (tx == sx) {
        return ty > sy && (ty - sy) % tx == 0;
    }
    if (ty == sy) {
        return tx > sx && (tx - sx) % ty == 0;
    }
    return false;
}

