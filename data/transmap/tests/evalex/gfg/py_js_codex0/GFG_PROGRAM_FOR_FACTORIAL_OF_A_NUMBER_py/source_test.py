def test():
  "--- test function ---"
  param =[(79,),(95,),(84,),(12,),(72,),(67,),(82,),(14,),(2,),(69,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
