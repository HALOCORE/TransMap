function f_gold(boxes, n) {
  boxes.sort();
  var ans = 1;
  var prev_width = boxes[0];
  var prev_count = 1;
  var curr_count = 0;
  var curr_width = 0;
  for (var i = 1; i < n; i++) {
    curr_width += boxes[i];
    curr_count += 1;
    if (curr_width > prev_width && curr_count > prev_count) {
      prev_width = curr_width;
      prev_count = curr_count;
      curr_count = 0;
      curr_width = 0;
      ans += 1;
    }
  }
  return ans;
}

