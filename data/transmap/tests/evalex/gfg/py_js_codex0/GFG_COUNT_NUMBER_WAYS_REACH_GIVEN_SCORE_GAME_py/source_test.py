def test():
  "--- test function ---"
  param =[(83,),(29,),(17,),(12,),(93,),(55,),(97,),(75,),(22,),(52,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
