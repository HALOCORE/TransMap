def test():
  "--- test function ---"
  param =[([2, 8, 9, 13, 13, 19, 19, 21, 21, 24, 28, 28, 29, 29, 29, 32, 34, 38, 39, 43, 45, 46, 57, 59, 62, 63, 67, 67, 68, 69, 70, 70, 71, 72, 74, 74, 76, 78, 79, 81, 90, 90, 95, 96, 98], 36,),([28, 92, - 16, 0, 6, 12, - 88, 42, - 48, 72, 2, - 38, 80, 82, 96, 32, - 42, - 38, 62, - 76, 20, - 10, 2, - 48, 4, 88, - 24, - 72, 32, - 42, - 48, - 62, 38], 20,),([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 39,),([70, 83, 9, 51, 11, 81, 27, 26, 37, 46], 7,),([50, 88], 1,),([0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1], 6,),([96], 0,),([18, 78, 14, 60, - 12, - 86, 32, 74, 74, 96, 58, 28, - 42, 28, - 18, - 58, - 82, - 58, 22, 6, 2, - 6, - 4, - 98], 21,),([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 19,),([58, 22, 15, 85, 8, 74, 93, 76, 44, 51, 43, 93, 20, 51, 52, 35, 17, 13, 96, 82, 23, 51, 44, 18, 45, 79, 66, 48, 16, 31, 62, 99, 46, 66, 53, 89, 87, 2, 87, 20, 30], 24,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
