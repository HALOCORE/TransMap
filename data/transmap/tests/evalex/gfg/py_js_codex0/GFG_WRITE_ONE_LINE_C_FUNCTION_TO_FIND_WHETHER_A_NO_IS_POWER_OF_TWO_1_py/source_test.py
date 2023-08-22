def test():
  "--- test function ---"
  param =[(1,),(2,),(8,),(1024,),(24,),(7,),(46,),(61,),(73,),(66,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
