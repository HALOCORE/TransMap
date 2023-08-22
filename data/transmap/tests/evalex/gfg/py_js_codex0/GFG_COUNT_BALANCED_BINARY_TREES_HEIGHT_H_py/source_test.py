def test():
  "--- test function ---"
  param =[(75,),(50,),(93,),(87,),(35,),(25,),(43,),(61,),(54,),(91,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
