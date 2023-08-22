def test():
  "--- test function ---"
  param =[(37, 80,),(10000000000, - 10000000000,),(10000000000, 10000000000,),(999999999, 999999999,),(39, 36,),(92, 56,),(14, 21,),(19, 38,),(14, 82,),(88, 41,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
