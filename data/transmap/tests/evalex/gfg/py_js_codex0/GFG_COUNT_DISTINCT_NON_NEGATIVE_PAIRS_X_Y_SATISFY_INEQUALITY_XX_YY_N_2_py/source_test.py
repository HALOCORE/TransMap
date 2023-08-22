def test():
  "--- test function ---"
  param =[(61,),(45,),(53,),(4,),(82,),(86,),(37,),(48,),(81,),(50,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
