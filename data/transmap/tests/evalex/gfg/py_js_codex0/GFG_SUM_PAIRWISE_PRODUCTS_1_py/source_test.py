def test():
  "--- test function ---"
  param =[(41,),(50,),(67,),(18,),(60,),(6,),(27,),(46,),(50,),(20,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
