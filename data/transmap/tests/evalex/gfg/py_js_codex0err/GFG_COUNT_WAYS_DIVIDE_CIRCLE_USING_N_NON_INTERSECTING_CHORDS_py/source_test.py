def test():
  "--- test function ---"
  param =[(32,),(52,),(52,),(32,),(73,),(31,),(29,),(75,),(39,),(49,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
