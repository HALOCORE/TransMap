def test():
  "--- test function ---"
  param =[(58,),(92,),(73,),(52,),(24,),(14,),(58,),(11,),(8,),(52,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
