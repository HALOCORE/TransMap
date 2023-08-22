def test():
  "--- test function ---"
  param =[(11, 2, 1),(41, 3, 3),(5, 4, 3),(1, 2, 4),(24, 1, 5),(5, 2, 3),(66, 5, 8),(7, 10, 3),(77, 30, 10),(60, 50, 1)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
