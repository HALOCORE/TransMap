def test():
  "--- test function ---"
  param =[([3, 5, 6, 9, 13, 15, 17, 17, 25, 27, 28, 32, 37, 38, 51, 53, 57, 63, 63, 67, 69, 80, 80, 81, 81, 86, 88, 92, 96, 98], 28,),([80, - 70, 38, - 48, - 96, - 66, 64, - 8, 66, - 2, 66, - 62, - 60, 32, 74, - 86, - 46, - 80, 80, 18, - 48, - 90, - 72, - 62, 84, - 92, - 96, - 22, - 62, 20, 54, 88, - 62, 70, 6, - 36], 18,),([0, 0, 0, 0, 1, 1, 1], 6,),([89, 51, 56, 1], 4,),([- 98, - 98, - 88, - 74, - 72, - 64, - 56, - 42, - 32, - 28, - 26, - 22, - 14, - 6, - 4, - 2, 0, 20, 42, 62, 84, 84, 90, 94, 98], 25,),([0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1], 21,),([3, 6, 10, 11, 12, 13, 14, 19, 19, 20, 20, 23, 28, 37, 38, 38, 39, 41, 43, 45, 48, 49, 51, 52, 53, 55, 56, 56, 58, 62, 65, 69, 73, 74, 75, 82, 89, 97, 97, 99], 28,),([30, 48, 38, 4, 66, 54, - 34, 56, 42, - 36, - 6, - 28, 54, - 38, 18, 58, - 44, - 76, 56, 98, 60, - 6, - 26, 52, - 50, 76, 18, - 78, - 60, 12, 16, 10, - 40, 24, - 42, - 92, 90, 72, - 40, 40, - 62, - 64, - 54, - 4], 36,),([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 12,),([46, 77, 73, 20, 7, 59, 58, 92, 44, 61, 16, 65, 36, 32, 52, 92, 70, 85, 57, 4, 30, 41, 43, 88], 20,)]
  for i, parameters_set in enumerate(param):
    idx = i
    f_gold(* parameters_set)
    result = parameters_set
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
