def test():
  "--- test function ---"
  param =[(86, 39,),(81, 87,),(48, 84,),(64, 80,),(56, 20,),(5, 70,),(25, 13,),(94, 83,),(5, 55,),(46, 46,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
