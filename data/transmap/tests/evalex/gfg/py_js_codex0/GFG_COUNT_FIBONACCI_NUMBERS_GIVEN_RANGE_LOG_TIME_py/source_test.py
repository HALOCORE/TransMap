def test():
  "--- test function ---"
  param =[(76, 43,),(96, 52,),(19, 79,),(36, 2,),(60, 11,),(20, 15,),(76, 4,),(63, 93,),(2, 25,),(41, 39,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
