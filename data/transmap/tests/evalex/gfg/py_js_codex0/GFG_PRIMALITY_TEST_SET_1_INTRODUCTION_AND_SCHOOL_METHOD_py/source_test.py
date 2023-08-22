def test():
  "--- test function ---"
  param =[(37,),(39,),(73,),(8,),(28,),(66,),(20,),(36,),(6,),(51,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
