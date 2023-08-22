def test():
  "--- test function ---"
  param =[(57, 79,),(57, 21,),(31, 37,),(62, 87,),(49, 98,),(82, 76,),(31, 45,),(5, 52,),(76, 43,),(55, 6,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
