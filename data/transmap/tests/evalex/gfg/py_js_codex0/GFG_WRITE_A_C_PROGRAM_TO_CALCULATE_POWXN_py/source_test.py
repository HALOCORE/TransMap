def test():
  "--- test function ---"
  param =[(46, 92,),(99, 87,),(30, 32,),(1, 86,),(26, 81,),(1, 49,),(27, 46,),(10, 52,),(26, 38,),(29, 80,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
