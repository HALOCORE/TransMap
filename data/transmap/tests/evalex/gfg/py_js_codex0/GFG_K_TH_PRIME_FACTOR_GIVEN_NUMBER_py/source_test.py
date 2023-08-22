def test():
  "--- test function ---"
  param =[(94, 0),(99, 1),(64, 3),(27, 3),(24, 4),(84, 6),(69, 98),(69, 39),(22, 60),(39, 57)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
