
function f_gold(watchedVideos, friends, id, level) {
    let n = friends.length;
    let vis = Array(n).fill(false);
    let q = [id];
    vis[id] = true;
    for (let _ = 0; _ < level; _++) {
        let size = q.length;
        for (let _ = 0; _ < size; _++) {
            let u = q.shift();
            for (let v of friends[u]) {
                if (!vis[v]) {
                    q.push(v);
                    vis[v] = true;
                }
            }
        }
    }
    let freq = {};
    for (let _ = 0; _ < q.length; _++) {
        let u = q.pop();
        for (let w of watchedVideos[u]) {
            if (freq[w] == undefined) freq[w] = 0;
            freq[w]++;
        }
    }
    let videos = Object.entries(freq);
    videos.sort((a, b) => {
        if (a[1] == b[1]) return a[0].localeCompare(b[0]);
        return a[1] - b[1];
    });
    return videos.map(v => v[0]);
}

