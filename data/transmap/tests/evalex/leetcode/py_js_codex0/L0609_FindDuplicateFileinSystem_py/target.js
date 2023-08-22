
function f_gold(paths) {
    let m = new Map();
    for (let path of paths) {
        let a = path.split(" ");
        for (let i = 1; i < a.length; i++) {
            let j = a[i].indexOf("(");
            let content = a[i].substring(j + 1, a[i].length - 1);
            let name = a[0] + "/" + a[i].substring(0, j);
            if (m.has(content)) {
                m.get(content).push(name);
            } else {
                m.set(content, [name]);
            }
        }
    }
    let ans = [];
    for (let names of m.values()) {
        if (names.length > 1) {
            ans.push(names);
        }
    }
    return ans;
}

