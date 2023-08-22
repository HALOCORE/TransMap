function check_dict_case(dict) {
    if (Object.keys(dict).length === 0) {
        return false;
    } else {
        var state = "start";
        for (var key in dict) {
            if (typeof key !== "string") {
                state = "mixed";
                break;
            }
            if (state === "start") {
                if (/^[A-Z]+$/.test(key)) {
                    state = "upper";
                } else if (/^[a-z]+$/.test(key)) {
                    state = "lower";
                } else {
                    break;
                }
            } else if ((state === "upper" && !/^[A-Z]+$/.test(key)) || (state === "lower" && !/^[a-z]+$/.test(key))) {
                state = "mixed";
                break;
            } else {
                break;
            }
        }
        return state === "upper" || state === "lower";
    }
}

