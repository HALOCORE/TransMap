def test():
  "--- test function ---"
  param =[(5,),(16,),(8,),(61,),(59,),(88,),(67,),(28,),(58,),(42,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
