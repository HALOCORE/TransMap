function Strongest_Extension(class_name, extensions) {
    let strong = extensions[0];
    let my_val = extensions[0].split("").filter(x => x.match(/[A-Z]/)).length - extensions[0].split("").filter(x => x.match(/[a-z]/)).length;
    for (let s of extensions) {
        let val = s.split("").filter(x => x.match(/[A-Z]/)).length - s.split("").filter(x => x.match(/[a-z]/)).length;
        if (val > my_val) {
            strong = s;
            my_val = val;
        }
    }
    let ans = class_name + "." + strong;
    return ans;
}

