def test():
  "--- test function ---"
  param =[(52,),(75,),(25,),(80,),(18,),(17,),(33,),(8,),(99,),(8,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
