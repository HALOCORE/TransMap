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
                if (key.isupper()) {
                    state = "upper";
                } else if (key.islower()) {
                    state = "lower";
                } else {
                    break;
                }
            } else if ((state === "upper" && !key.isupper()) || (state === "lower" && !key.islower())) {
                state = "mixed";
                break;
            } else {
                break;
            }
        }
        return state === "upper" || state === "lower";
    }
}

