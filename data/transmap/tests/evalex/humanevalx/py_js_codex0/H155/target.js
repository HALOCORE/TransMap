function even_odd_count(num) {
    let even_count = 0;
    let odd_count = 0;
    for (let i of String(Math.abs(num))) {
        if (Number(i)%2==0) {
            even_count +=1;
        } else {
            odd_count +=1;
        }
    }
    return [even_count, odd_count];
}

