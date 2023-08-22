def test():
  "--- test function ---"
  param =[(37, 93,),(58, 13,),(89, 27,),(75, 14,),(59, 47,),(84, 39,),(47, 76,),(37, 75,),(83, 62,),(28, 58,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
