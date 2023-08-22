function f_gold(text, word) {
  var word_list = text.split();
  var result = '';
  var stars = '*'.repeat(word.length);
  var count = 0;
  var index = 0;
  for (var i = 0; i < word_list.length; i++) {
    if (word_list[i] == word) word_list[index] = stars;
    index += 1;
  }
  result = word_list.join(' ');
  return result;
}

