function f_gold(features, responses) {
    var feature_set = new Set(features);
    var counter = new Map();
    for (var resp of responses) {
        for (var feat of new Set(resp.split(' '))) {
            if (feature_set.has(feat)) {
                if (counter.has(feat)) {
                    counter.set(feat, counter.get(feat) + 1);
                }
                else {
                    counter.set(feat, 1);
                }
            }
        }
    }
    var order = new Map();
    for (var i = 0; i < features.length; i++) {
        order.set(features[i], i);
    }
    return features.sort(function (feat1, feat2) {
        if (counter.get(feat1) > counter.get(feat2)) {
            return -1;
        }
        else if (counter.get(feat1) < counter.get(feat2)) {
            return 1;
        }
        else {
            if (order.get(feat1) < order.get(feat2)) {
                return -1;
            }
            else if (order.get(feat1) > order.get(feat2)) {
                return 1;
            }
            else {
                return 0;
            }
        }
    });
}

