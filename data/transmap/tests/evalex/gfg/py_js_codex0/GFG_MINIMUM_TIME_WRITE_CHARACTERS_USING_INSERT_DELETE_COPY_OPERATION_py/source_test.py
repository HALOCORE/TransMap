def test():
  "--- test function ---"
  param =[(59, 75, 12, 45,),(66, 68, 32, 41,),(98, 55, 69, 5,),(63, 4, 41, 12,),(99, 37, 98, 55,),(45, 28, 59, 7,),(60, 53, 40, 52,),(11, 96, 50, 50,),(96, 95, 48, 84,),(54, 6, 50, 82,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
