
function f_gold ( nums ) {
  var n = nums.length;
  function next ( i ) {
    return ( i + nums[i] % n + n ) % n;
  }
  for ( var i = 0; i < n; i++ ) {
    if ( nums[i] == 0 ) {
      continue;
    }
    var slow = i;
    var fast = next(i);
    while ( nums[slow] * nums[fast] > 0 && nums[slow] * nums[next(fast)] > 0 ) {
      if ( slow == fast ) {
        if ( slow != next(slow) ) {
          return true;
        }
        break;
      }
      slow = next(slow);
      fast = next(next(fast));
    }
    var j = i;
    while ( nums[j] * nums[next(j)] > 0 ) {
      nums[j] = 0;
      j = next(j);
    }
  }
  return false;
}

