
function f_gold ( nums, k ) {
  let s = nums.reduce( ( a, b ) => a + b );
  let target = Math.floor( s / k );
  let m = s % k;
  if ( m != 0 ) return false;
  let cur = new Array( k ).fill( 0 );
  let n = nums.length;
  function dfs ( i ) {
    if ( i == n ) return true;
    for ( let j = 0; j < k; j++ ) {
      if ( j > 0 && cur[ j - 1 ] == cur[ j ] ) continue;
      cur[ j ] += nums[ i ];
      if ( cur[ j ] <= target && dfs( i + 1 ) ) return true;
      cur[ j ] -= nums[ i ];
    }
    return false;
  }
  nums.sort( ( a, b ) => b - a );
  return dfs( 0 );
}

