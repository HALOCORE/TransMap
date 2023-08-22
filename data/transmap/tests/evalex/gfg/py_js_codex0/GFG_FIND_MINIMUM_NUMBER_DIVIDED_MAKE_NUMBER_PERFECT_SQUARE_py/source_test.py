def test():
  "--- test function ---"
  param =[(95,),(48,),(3,),(10,),(82,),(1,),(77,),(99,),(23,),(61,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
