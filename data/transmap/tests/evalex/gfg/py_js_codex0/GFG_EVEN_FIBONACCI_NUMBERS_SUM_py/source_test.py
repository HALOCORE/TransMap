def test():
  "--- test function ---"
  param =[(67,),(89,),(12,),(94,),(96,),(25,),(49,),(8,),(33,),(59,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
