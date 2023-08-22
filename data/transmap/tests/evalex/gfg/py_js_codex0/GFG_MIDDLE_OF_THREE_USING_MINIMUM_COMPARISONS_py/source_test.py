def test():
  "--- test function ---"
  param =[(56, 5, 82,),(56, 60, 17,),(36, 56, 51,),(71, 54, 6,),(3, 70, 81,),(84, 57, 47,),(30, 80, 85,),(82, 54, 32,),(90, 70, 55,),(38, 4, 5,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
