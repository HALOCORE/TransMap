def test():
  "--- test function ---"
  param =[(49, 7, 63, 7,),(31, 75, 82, 61,),(29, 10, 82, 15,),(26, 59, 12, 13,),(10, 76, 14, 53,),(18, 40, 71, 78,),(48, 21, 41, 91,),(17, 35, 78, 80,),(49, 73, 69, 86,),(22, 85, 6, 8,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
