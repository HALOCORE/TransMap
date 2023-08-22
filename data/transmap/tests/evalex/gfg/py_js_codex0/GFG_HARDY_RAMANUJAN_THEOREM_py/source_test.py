def test():
  "--- test function ---"
  param =[(99,),(33,),(50,),(17,),(18,),(69,),(23,),(18,),(94,),(16,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
