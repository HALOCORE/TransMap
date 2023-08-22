def test():
  "--- test function ---"
  param =[(79, 84,),(61, 29,),(39, 77,),(39, 65,),(61, 78,),(86, 73,),(7, 92,),(86, 50,),(86, 63,),(11, 2,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
