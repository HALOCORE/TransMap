def test():
  "--- test function ---"
  param =[(9,),(43,),(50,),(32,),(37,),(51,),(33,),(49,),(1,),(75,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
