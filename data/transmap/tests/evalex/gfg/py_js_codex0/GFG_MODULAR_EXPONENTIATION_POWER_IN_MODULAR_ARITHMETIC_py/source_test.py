def test():
  "--- test function ---"
  param =[(45, 5, 68,),(67, 25, 49,),(26, 91, 44,),(33, 61, 9,),(35, 8, 13,),(68, 41, 5,),(14, 76, 20,),(5, 89, 13,),(23, 42, 45,),(37, 63, 56,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
