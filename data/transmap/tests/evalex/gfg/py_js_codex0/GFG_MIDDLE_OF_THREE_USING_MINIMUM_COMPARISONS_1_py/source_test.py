def test():
  "--- test function ---"
  param =[(43, 24, 7,),(76, 54, 66,),(57, 5, 40,),(10, 13, 4,),(59, 47, 56,),(92, 14, 50,),(49, 62, 65,),(16, 95, 12,),(33, 41, 90,),(66, 63, 46,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
