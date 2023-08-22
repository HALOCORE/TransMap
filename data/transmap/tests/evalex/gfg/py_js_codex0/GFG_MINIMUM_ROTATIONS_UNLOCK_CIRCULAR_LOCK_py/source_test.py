def test():
  "--- test function ---"
  param =[(71, 46,),(90, 65,),(28, 84,),(41, 23,),(32, 58,),(39, 82,),(33, 58,),(89, 32,),(50, 51,),(92, 77,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
