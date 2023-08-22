def test():
  "--- test function ---"
  param =[(34, 55,),(63, 22,),(15, 26,),(56, 58,),(63, 94,),(28, 45,),(54, 97,),(2, 58,),(94, 91,),(82, 40,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
