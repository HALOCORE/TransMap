function f_gold(input, unlock_code) {
  let rotation = 0;
  while (input > 0 || unlock_code > 0) {
    let input_digit = input % 10;
    let code_digit = unlock_code % 10;
    rotation += Math.min(Math.abs(input_digit - code_digit), 10 - Math.abs(input_digit - code_digit));
    input = Math.floor(input / 10);
    unlock_code = Math.floor(unlock_code / 10);
  }
  return rotation;
}

