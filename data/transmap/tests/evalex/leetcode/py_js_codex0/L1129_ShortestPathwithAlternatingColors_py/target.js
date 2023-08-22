
function f_gold ( n, redEdges, blueEdges ) {
    var red = new Map();
    var blue = new Map();
    for ( var i = 0; i < redEdges.length; i++ ) {
        if ( red.has(redEdges[i][0]) ) {
            red.get(redEdges[i][0]).push(redEdges[i][1]);
        }
        else {
            red.set(redEdges[i][0], [redEdges[i][1]]);
        }
    }
    for ( var i = 0; i < blueEdges.length; i++ ) {
        if ( blue.has(blueEdges[i][0]) ) {
            blue.get(blueEdges[i][0]).push(blueEdges[i][1]);
        }
        else {
            blue.set(blueEdges[i][0], [blueEdges[i][1]]);
        }
    }
    var vis_blue = Array(n).fill(false);
    var vis_red = Array(n).fill(false);
    var q = [ [0, true], [0, false] ];
    var ans = Array(n).fill(-1);
    var d = -1;
    while ( q.length > 0 ) {
        d += 1;
        for ( var _ = 0; _ < q.length; _++ ) {
            var i = q[0][0];
            var b = q[0][1];
            q.shift();
            if ( ans[i] == -1 || ans[i] > d ) {
                ans[i] = d;
            }
            var vis = vis_blue;
            if ( !b ) {
                vis = vis_red;
            }
            vis[i] = true;
            var ne = red.get(i);
            if ( !b ) {
                ne = blue.get(i);
            }
            var v = vis_red;
            if ( b ) {
                v = vis_blue;
            }
            for ( var j = 0; j < ne.length; j++ )