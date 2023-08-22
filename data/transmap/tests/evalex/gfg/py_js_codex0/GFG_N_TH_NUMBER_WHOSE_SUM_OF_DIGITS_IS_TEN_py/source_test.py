def test():
  "--- test function ---"
  param =[(37,),(13,),(51,),(69,),(76,),(10,),(97,),(40,),(69,),(4,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
