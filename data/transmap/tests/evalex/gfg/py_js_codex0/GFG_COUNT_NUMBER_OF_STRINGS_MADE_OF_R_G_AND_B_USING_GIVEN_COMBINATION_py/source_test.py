def test():
  "--- test function ---"
  param =[(90, 75, 22, 66,),(32, 65, 5, 46,),(94, 17, 44, 2,),(50, 23, 92, 49,),(16, 10, 72, 71,),(37, 91, 7, 9,),(75, 97, 38, 69,),(88, 51, 32, 79,),(27, 4, 20, 17,),(67, 99, 53, 70,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
