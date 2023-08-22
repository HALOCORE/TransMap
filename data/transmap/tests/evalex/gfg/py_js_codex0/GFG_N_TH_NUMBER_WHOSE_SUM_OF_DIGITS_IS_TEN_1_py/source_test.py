def test():
  "--- test function ---"
  param =[(93,),(10,),(55,),(94,),(2,),(5,),(37,),(4,),(11,),(46,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
