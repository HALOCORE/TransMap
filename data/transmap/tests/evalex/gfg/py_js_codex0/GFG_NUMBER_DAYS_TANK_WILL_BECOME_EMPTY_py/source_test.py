def test():
  "--- test function ---"
  param =[(91, 29,),(99, 55,),(11, 56,),(23, 56,),(12, 97,),(1, 64,),(18, 5,),(14, 37,),(13, 55,),(36, 99,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
