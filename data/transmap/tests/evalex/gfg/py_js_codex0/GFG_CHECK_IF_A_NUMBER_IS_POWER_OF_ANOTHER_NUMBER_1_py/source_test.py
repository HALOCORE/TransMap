def test():
  "--- test function ---"
  param =[(57, 1,),(3, 9,),(10, 101,),(10, 10000,),(6, 46656,),(2, 2048,),(2, 40,),(20, 79,),(96, 98,),(25, 5,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
