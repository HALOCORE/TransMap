def test():
  "--- test function ---"
  param =[([6, 10, 14, 19, 24, 29, 42, 43, 44, 47, 47, 55, 57, 59, 60, 61, 76, 76, 77, 81, 84, 92, 92, 93, 95, 97], 15,),([- 98, 72, 52, - 62, 74, - 26, - 82, - 74, 90, 58, 94, - 2, 76, - 28, 12, 64, - 94, 86, 56, 10, 40, 20, 92, - 4, - 80, 26, - 40, 36, 66, - 46, 4, - 42, - 76, 76, - 90, - 48, 22, 30, 48, 38, 78], 28,),([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 22,),([96, 96, 38, 26, 2, 36, 15, 51, 78, 98, 94, 31, 62, 21, 7, 68, 37, 4], 10,),([- 8, 12, 68, 78, 78], 4,),([0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], 35,),([1, 15, 16, 17, 28, 28, 28, 30, 31, 37, 38, 38, 45, 45, 46, 46, 50, 51, 53, 53, 55, 55, 56, 58, 58, 64, 78, 82, 82, 85, 87, 89, 89, 90, 94, 95], 29,),([- 56, - 72, - 20, 88, 20, 86, 30, 36, - 44, - 66, - 26, - 88, 12, - 76, 78, 62, 62, 68, - 34, 0, - 22, 64, 72, 56, - 64, - 16, - 4, 86, 0, 98, - 70, 98, - 68, 92, - 84, - 56, 28, - 74, 6, - 10, - 82, 36, - 12, - 26, 66, - 60, - 68, 70, 2], 36,),([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], 11,),([85, 31, 15, 68, 92, 89, 32, 56, 27, 70, 82, 58, 63, 83, 89, 95, 78, 9, 27, 34, 24, 42, 66, 6, 1, 71, 55, 23, 75, 26, 19, 58, 25], 16,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
