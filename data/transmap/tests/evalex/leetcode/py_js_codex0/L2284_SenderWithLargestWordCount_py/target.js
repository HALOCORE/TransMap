function f_gold(messages, senders) {
    var cnt = {};
    for (var i = 0; i < messages.length; i++) {
        if (cnt[senders[i]] == undefined) {
            cnt[senders[i]] = 0;
        }
        cnt[senders[i]] += messages[i].split(" ").length;
    }
    var keys = Object.keys(cnt);
    var max = 0;
    var maxKey = "";
    for (var i = 0; i < keys.length; i++) {
        if (cnt[keys[i]] > max) {
            max = cnt[keys[i]];
            maxKey = keys[i];
        }
    }
    return maxKey;
}

