def test():
  "--- test function ---"
  param =[(4, 43, 24,),(60, 48, 98,),(92, 21, 69,),(73, 79, 38,),(58, 38, 30,),(82, 26, 12,),(53, 10, 17,),(57, 37, 26,),(47, 91, 99,),(83, 3, 64,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
