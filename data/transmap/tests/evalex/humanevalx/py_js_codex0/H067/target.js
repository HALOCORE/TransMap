function fruit_distribution(s,n){
    let lis = [];
    for (let i of s.split(' ')){
        if (i.match(/^\d+$/)){
            lis.push(parseInt(i));
        }
    }
    return n - lis.reduce((a,b) => a + b);
}

