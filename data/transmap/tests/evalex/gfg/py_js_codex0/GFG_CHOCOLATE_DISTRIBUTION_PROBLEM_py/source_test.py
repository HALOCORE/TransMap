def test():
  "--- test function ---"
  param =[([2, 5, 11, 23, 33, 35, 39, 51, 52, 56, 74, 76, 76, 79, 85, 88, 93, 98], 16, 13,),([- 42, 76, - 34, - 74, 16, 4, 88, - 70, - 88, - 94, - 24, 4, - 14, - 56, 56, - 18, 84, 0, - 48, - 94, 72, 42, 36, 52, 74, - 84, - 50, 16, 30], 15, 28,),([0, 0, 1, 1, 1, 1], 5, 5,),([29, 49, 88, 44, 92, 43, 12, 5, 38, 75, 57, 3, 85, 16, 86, 62, 16, 40, 76, 37, 5, 69, 16, 63, 84, 78, 74, 18, 4, 89, 73, 67, 60], 25, 18,),([- 98, - 80, - 50, - 44, - 42, - 36, - 36, - 28, - 10, - 8, - 4, - 2, 2, 10, 18, 18, 26, 32, 36, 56, 80, 86, 88, 90], 16, 12,),([0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1], 13, 14,),([13, 15, 62, 65, 87], 3, 4,),([- 50, 58, 78, 28, 4, 18, - 8, 18, - 88, - 48, - 26, - 32, 64, 48, 60, 94, - 92, 48, - 36, 30, - 80, - 60, 82, - 62, 32, - 36, - 76, - 88, - 60, 22, - 14, 72, 30], 31, 17,),([0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], 9, 6,),([25, 17, 58, 40, 53, 73, 23, 77, 38], 8, 6,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
