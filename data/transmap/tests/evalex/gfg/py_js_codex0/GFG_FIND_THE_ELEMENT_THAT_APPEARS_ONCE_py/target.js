function f_gold(arr, n) {
  let ones = 0;
  let twos = 0;
  for (let i = 0; i < n; i++) {
    twos = twos | (ones & arr[i]);
    ones = ones ^ arr[i];
    let common_bit_mask = ~(ones & twos);
    ones &= common_bit_mask;
    twos &= common_bit_mask;
  }
  return ones;
}

