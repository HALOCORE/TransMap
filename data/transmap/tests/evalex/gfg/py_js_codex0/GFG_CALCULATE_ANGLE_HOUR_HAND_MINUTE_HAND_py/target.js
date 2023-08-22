function f_gold(h, m) {
  if (h < 0 || m < 0 || h > 12 || m > 60) console.log('Wrong input');
  if (h == 12) h = 0;
  if (m == 60) m = 0;
  var hour_angle = 0.5 * (h * 60 + m);
  var minute_angle = 6 * m;
  var angle = Math.abs(hour_angle - minute_angle);
  angle = Math.min(360 - angle, angle);
  return angle;
}

