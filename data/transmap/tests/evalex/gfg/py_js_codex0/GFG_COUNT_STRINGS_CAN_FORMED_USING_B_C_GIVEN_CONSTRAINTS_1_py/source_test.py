def test():
  "--- test function ---"
  param =[(55,),(36,),(69,),(92,),(73,),(16,),(88,),(19,),(66,),(68,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
