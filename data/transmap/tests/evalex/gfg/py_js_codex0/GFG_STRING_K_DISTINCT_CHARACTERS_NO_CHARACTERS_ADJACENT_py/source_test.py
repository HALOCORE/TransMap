def test():
  "--- test function ---"
  param =[(60, 71,),(56, 17,),(16, 16,),(42, 60,),(55, 56,),(64, 59,),(68, 24,),(88, 2,),(64, 94,),(42, 79,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
