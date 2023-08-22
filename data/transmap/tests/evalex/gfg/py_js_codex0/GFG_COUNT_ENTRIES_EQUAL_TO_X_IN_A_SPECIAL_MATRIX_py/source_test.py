def test():
  "--- test function ---"
  param =[(47, 30,),(57, 16,),(55, 63,),(11, 23,),(55, 49,),(63, 64,),(64, 98,),(28, 30,),(49, 61,),(48, 64,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
