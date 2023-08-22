def test():
  "--- test function ---"
  param =[(76, 43,),(77, 91,),(9, 42,),(59, 67,),(8, 52,),(97, 8,),(78, 24,),(41, 88,),(72, 61,),(71, 28,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
