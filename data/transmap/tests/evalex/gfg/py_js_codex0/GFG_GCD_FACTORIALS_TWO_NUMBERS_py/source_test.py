def test():
  "--- test function ---"
  param =[(81, 39,),(19, 94,),(49, 37,),(40, 88,),(36, 28,),(11, 46,),(82, 94,),(80, 37,),(82, 75,),(56, 9,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
