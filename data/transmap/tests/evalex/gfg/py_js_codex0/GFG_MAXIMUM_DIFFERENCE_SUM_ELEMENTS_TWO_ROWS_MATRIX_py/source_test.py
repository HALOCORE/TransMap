def test():
  "--- test function ---" ;
  param = [
        ([[1, 5, 5, 6, 6, 7, 7, 11, 12, 15, 17, 24, 25, 27, 30, 33, 35, 36, 38, 41, 42, 44, 44, 46, 50, 53, 53, 56, 58, 67, 71, 71, 77, 78, 85, 85, 87, 87, 89, 91, 94, 96, 97, 98, 99, 99], [1, 3, 3, 6, 7, 12, 18, 19, 21, 21, 23, 25, 25, 26, 33, 37, 38, 39, 39, 39, 41, 42, 43, 46, 49, 50, 54, 56, 57, 60, 66, 67, 67, 68, 69, 71, 75, 76, 85, 86, 88, 90, 91, 93, 98, 98], [2, 2, 3, 9, 15, 18, 21, 21, 23, 24, 27, 28, 28, 28, 30, 34, 36, 38, 40, 43, 45, 46, 46, 49, 53, 53, 55, 58, 66, 66, 67, 68, 70, 72, 73, 73, 75, 77, 78, 80, 83, 84, 88, 89, 95, 98], [1, 3, 6, 6, 7, 7, 8, 11, 15, 21, 21, 24, 28, 28, 29, 30, 31, 31, 33, 34, 36, 46, 47, 49, 51, 58, 64, 65, 69, 70, 70, 76, 78, 81, 86, 86, 87, 89, 90, 92, 93, 94, 97, 97, 97, 99], [10, 11, 12, 12, 17, 19, 23, 24, 25, 26, 28, 31, 31, 33, 35, 39, 41, 42, 42, 45, 49, 50, 53, 56, 57, 60, 60, 62, 63, 64, 64, 65, 66, 68, 71, 77, 77, 80, 80, 81, 84, 84, 86, 86, 90, 92], [2, 2, 3, 7, 8, 10, 11, 12, 13, 19, 20, 22, 24, 24, 27, 29, 30, 32, 34, 35, 37, 37, 37, 38, 39, 39, 39, 44, 54, 54, 57, 62, 63, 64, 64, 70, 72, 73, 84, 84, 85, 87, 89, 94, 95, 95], [1, 1, 4, 4, 6, 7, 20, 22, 24, 25, 26, 31, 31, 35, 38, 41, 41, 42, 47, 48, 48, 50, 51, 56, 56, 57, 57, 58, 61, 62, 67, 68, 72, 75, 75, 77, 80, 81, 83, 83, 84, 87, 88, 97, 97, 98], [2, 3, 10, 13, 16, 23, 26, 27, 29, 30, 35, 35, 36, 39, 41, 42, 45, 48, 49, 49, 56, 56, 59, 59, 59, 60, 60, 61, 62, 64, 67, 67, 71, 73, 76, 78, 81, 83, 86, 87, 87, 88, 89, 92, 97, 99], [8, 13, 14, 15, 16, 16, 19, 25, 25, 28, 29, 30, 30, 34, 36, 38, 40, 41, 41, 43, 46, 48, 49, 49, 49, 50, 53, 55, 57, 63, 64, 64, 66, 70, 74, 74, 77, 77, 78, 83, 84, 92, 93, 93, 96, 99], [2, 3, 5, 5, 6, 6, 6, 8, 8, 14, 15, 19, 22, 23, 27, 28, 31, 32, 33, 34, 34, 36, 38, 42, 43, 49, 55, 57, 58, 68, 71, 71, 74, 77, 81, 85, 85, 87, 90, 91, 92, 94, 96, 97, 97, 98], [1, 4, 5, 8, 9, 9, 16, 16, 19, 20, 21, 24, 25, 25, 26, 29, 30, 34, 38, 39, 40, 46, 48, 49, 55, 56, 57, 57, 59, 62, 63, 64, 64, 69, 70, 73, 77, 78, 78, 85, 85, 91, 92, 93, 95, 97], [1, 5, 11, 11, 15, 15, 15, 23, 30, 31, 34, 37, 39, 39, 44, 44, 46, 47, 47, 47, 48, 49, 50, 53, 54, 58, 62, 64, 66, 67, 68, 69, 73, 74, 80, 82, 82, 84, 85, 89, 91, 91, 93, 96, 97, 98], [2, 3, 5, 7, 8, 9, 9, 10, 14, 18, 20, 21, 25, 28, 31, 33, 33, 34, 34, 39, 45, 47, 48, 49, 49, 54, 58, 64, 71, 74, 74, 75, 78, 82, 82, 83, 84, 88, 92, 92, 93, 94, 95, 95, 98, 99], [1, 2, 6, 9, 9, 9, 15, 15, 17, 17, 24, 25, 26, 27, 28, 28, 30, 30, 33, 34, 36, 39, 41, 42, 46, 46, 53, 59, 62, 65, 68, 69, 70, 71, 72, 74, 76, 78, 83, 84, 90, 92, 96, 98, 98, 99], [1, 1, 3, 5, 7, 8, 8, 10, 11, 18, 18, 18, 21, 30, 35, 36, 43, 51, 51, 53, 54, 57, 58, 58, 58, 59, 60, 60, 60, 61, 63, 68, 70, 74, 76, 82, 83, 87, 87, 87, 91, 91, 92, 93, 97, 99], [3, 3, 3, 6, 11, 13, 13, 14, 16, 16, 22, 28, 29, 29, 32, 35, 38, 51, 51, 52, 53, 57, 58, 62, 67, 70, 71, 73, 73, 76, 76, 76, 80, 80, 83, 84, 84, 86, 87, 91, 92, 95, 95, 96, 96, 99], [1, 3, 7, 7, 7, 9, 9, 10, 16, 21, 23, 23, 24, 24, 26, 27, 36, 37, 43, 44, 48, 50, 51, 52, 53, 56, 57, 58, 59, 66, 68, 69, 72, 73, 74, 76, 77, 77, 80, 81, 81, 81, 84, 84, 90, 98], [1, 1, 2, 6, 10, 12, 13, 14, 15, 16, 20, 22, 22, 22, 24, 25, 26, 30, 34, 35, 35, 37, 38, 39, 43, 43, 43, 49, 50, 56, 57, 62, 64, 66, 67, 68, 71, 78, 82, 84, 86, 86, 89, 90, 94, 96], [2, 5, 6, 7, 7, 9, 9, 12, 20, 21, 23, 25, 30, 32, 37, 40, 41, 43, 43, 45, 45, 45, 57, 60, 61, 61, 61, 63, 66, 67, 67, 68, 69, 70, 73, 74, 75, 78, 82, 83, 84, 87, 89, 90, 99, 99], [8, 11, 12, 16, 22, 23, 23, 27, 28, 29, 31, 38, 39, 41, 42, 42, 48, 48, 52, 52, 57, 58, 60, 60, 63, 66, 66, 67, 69, 72, 74, 75, 75, 76, 76, 78, 79, 80, 84, 86, 92, 92, 94, 94, 96, 98], [2, 3, 4, 6, 6, 14, 14, 16, 17, 20, 22, 23, 26, 28, 28, 29, 29, 31, 32, 32, 38, 40, 42, 45, 51, 52, 54, 56, 62, 65, 66, 68, 73, 79, 80, 81, 87, 87, 88, 89, 89, 89, 91, 93, 96, 97], [4, 6, 9, 12, 13, 14, 16, 17, 18, 23, 25, 25, 26, 27, 29, 33, 34, 45, 45, 46, 49, 51, 51, 51, 52, 53, 59, 59, 64, 66, 67, 67, 70, 71, 72, 77, 77, 78, 82, 82, 84, 90, 93, 94, 96, 99], [1, 2, 7, 8, 9, 11, 19, 20, 23, 23, 24, 29, 29, 34, 41, 46, 48, 51, 51, 53, 54, 59, 61, 65, 67, 72, 74, 76, 76, 77, 80, 81, 81, 84, 87, 88, 90, 91, 92, 92, 93, 95, 96, 96, 97, 99], [
         1, 3, 4, 6, 8, 9, 9, 9, 9, 10, 15, 23, 24, 24, 25, 32, 34, 35, 38, 42, 43, 44, 45, 45, 48, 49, 53, 57, 57, 60, 60, 68, 70, 72, 72, 73, 74, 76, 76, 77, 79, 80, 83, 85, 94, 96], [2, 5, 7, 11, 12, 12, 14, 15, 16, 18, 20, 21, 25, 25, 26, 29, 35, 41, 43, 44, 47, 47, 50, 52, 52, 55, 57, 58, 60, 62, 67, 68, 69, 73, 74, 76, 78, 85, 86, 87, 87, 87, 90, 91, 94, 96], [1, 3, 5, 7, 7, 8, 10, 11, 13, 17, 24, 25, 26, 29, 30, 32, 33, 35, 36, 40, 41, 43, 44, 47, 49, 51, 54, 57, 59, 65, 69, 73, 74, 80, 80, 82, 82, 82, 84, 85, 85, 87, 90, 94, 95, 97], [1, 4, 6, 8, 13, 13, 13, 17, 17, 18, 22, 23, 23, 24, 24, 30, 32, 33, 36, 36, 36, 39, 40, 41, 43, 43, 45, 49, 51, 55, 55, 56, 57, 61, 63, 65, 65, 68, 69, 71, 72, 72, 77, 80, 96, 99], [1, 2, 3, 6, 7, 8, 10, 12, 13, 14, 17, 18, 19, 22, 23, 25, 28, 29, 31, 33, 34, 36, 36, 38, 41, 42, 42, 45, 48, 49, 49, 49, 50, 53, 54, 62, 70, 72, 77, 79, 84, 85, 92, 92, 93, 99], [1, 1, 6, 7, 11, 14, 17, 17, 21, 28, 29, 31, 32, 37, 40, 43, 44, 46, 47, 52, 56, 58, 59, 60, 63, 65, 68, 70, 75, 81, 81, 81, 82, 84, 85, 85, 88, 92, 92, 93, 94, 95, 95, 95, 99, 99], [1, 4, 4, 7, 9, 11, 12, 14, 14, 14, 19, 24, 26, 28, 29, 31, 36, 39, 41, 45, 45, 46, 47, 49, 58, 60, 60, 62, 63, 71, 72, 76, 76, 76, 77, 78, 80, 81, 83, 84, 84, 85, 89, 94, 97, 98], [1, 7, 10, 13, 15, 16, 16, 18, 19, 22, 26, 28, 33, 35, 36, 37, 38, 40, 41, 42, 42, 45, 46, 47, 48, 54, 54, 54, 58, 64, 65, 66, 67, 67, 68, 70, 71, 72, 74, 77, 78, 84, 85, 88, 88, 93], [2, 2, 2, 5, 8, 8, 20, 22, 27, 28, 30, 31, 32, 33, 34, 36, 37, 38, 39, 41, 42, 50, 50, 55, 59, 63, 65, 66, 71, 73, 74, 76, 78, 81, 86, 89, 90, 91, 93, 94, 94, 94, 95, 96, 98, 98], [1, 1, 2, 3, 5, 5, 7, 7, 7, 9, 10, 10, 14, 16, 20, 24, 26, 31, 36, 40, 44, 46, 49, 50, 50, 50, 54, 56, 58, 60, 62, 62, 63, 66, 67, 74, 75, 75, 79, 82, 90, 91, 91, 93, 93, 95], [3, 7, 9, 9, 10, 13, 15, 16, 19, 20, 22, 24, 28, 32, 36, 37, 39, 40, 42, 43, 43, 43, 45, 46, 50, 50, 52, 57, 58, 61, 69, 70, 71, 72, 74, 76, 78, 83, 83, 87, 87, 89, 91, 96, 98, 99], [1, 8, 8, 9, 16, 17, 18, 20, 20, 20, 22, 27, 28, 29, 29, 30, 31, 34, 36, 41, 43, 47, 51, 52, 55, 56, 58, 66, 67, 67, 68, 70, 71, 75, 76, 78, 79, 80, 80, 85, 87, 90, 94, 94, 95, 96], [4, 4, 5, 7, 7, 18, 19, 21, 22, 24, 24, 26, 29, 31, 33, 36, 37, 38, 47, 50, 50, 51, 51, 52, 53, 53, 53, 53, 55, 55, 55, 57, 58, 73, 76, 76, 80, 81, 83, 85, 86, 87, 89, 90, 91, 97], [1, 3, 5, 12, 15, 18, 18, 20, 22, 26, 26, 27, 28, 29, 31, 32, 32, 35, 36, 39, 40, 42, 47, 47, 49, 51, 51, 51, 51, 57, 62, 62, 64, 66, 70, 71, 72, 73, 74, 84, 84, 88, 89, 94, 96, 97], [10, 11, 13, 15, 15, 17, 17, 18, 21, 22, 24, 24, 26, 28, 32, 33, 34, 35, 39, 40, 45, 46, 48, 50, 54, 55, 55, 56, 57, 60, 62, 62, 63, 63, 67, 67, 68, 68, 71, 72, 78, 79, 80, 90, 97, 98], [1, 5, 7, 7, 9, 11, 14, 22, 25, 26, 28, 31, 34, 37, 38, 44, 46, 47, 47, 48, 48, 52, 52, 53, 54, 54, 54, 57, 60, 61, 67, 74, 75, 77, 78, 80, 80, 81, 81, 86, 91, 92, 94, 97, 98, 99], [2, 3, 11, 15, 15, 16, 22, 22, 24, 31, 32, 32, 32, 33, 33, 35, 36, 41, 43, 44, 46, 46, 47, 50, 54, 55, 55, 57, 59, 65, 67, 67, 68, 70, 70, 73, 74, 79, 82, 84, 84, 86, 87, 87, 94, 97], [1, 2, 2, 3, 5, 7, 9, 12, 12, 12, 13, 16, 19, 19, 22, 23, 23, 27, 30, 32, 33, 38, 43, 47, 47, 47, 50, 53, 53, 56, 57, 59, 60, 64, 67, 70, 73, 78, 81, 82, 88, 88, 92, 95, 97, 98], [2, 3, 3, 5, 6, 8, 20, 23, 24, 26, 27, 28, 35, 38, 38, 40, 43, 44, 44, 46, 47, 49, 51, 53, 56, 58, 59, 63, 63, 64, 65, 67, 68, 68, 69, 70, 76, 80, 82, 85, 86, 87, 88, 92, 92, 96], [1, 1, 2, 2, 4, 5, 8, 10, 11, 14, 15, 17, 17, 18, 23, 31, 35, 36, 42, 44, 48, 49, 51, 52, 52, 61, 64, 66, 67, 68, 70, 72, 75, 77, 78, 81, 84, 85, 87, 95, 97, 98, 98, 98, 98, 99], [2, 6, 6, 7, 9, 11, 16, 17, 26, 26, 28, 35, 36, 43, 44, 46, 48, 50, 51, 53, 53, 54, 56, 57, 58, 67, 68, 68, 68, 73, 73, 74, 75, 77, 78, 78, 78, 79, 80, 85, 86, 91, 92, 92, 98, 99], [3, 9, 9, 12, 15, 19, 19, 30, 31, 34, 35, 35, 39, 40, 47, 49, 49, 53, 58, 58, 59, 61, 61, 63, 64, 66, 67, 69, 70, 70, 71, 74, 77, 77, 78, 82, 84, 90, 90, 90, 91, 92, 92, 94, 95, 97], [3, 4, 8, 8, 8, 9, 10, 23, 27, 27, 31, 31, 36, 38, 38, 39, 40, 41, 41, 41, 46, 48, 51, 54, 55, 55, 65, 65, 67, 74, 74, 77, 79, 83, 83, 84, 86, 87, 89, 89, 90, 92, 93, 97, 98, 99]], 41, 32,),
        ([[-38, -60, 88, -62, 64, -80, -6, -2, 92, 70, -90, 90, -48, 12, -90, 38, -32, -62, -64, -86, 28, -72, 42, -56, 42, 72, 80, 40, -20, -2, 36, -74, 70, -76, -98, 2, 2, 12, -4, -36, 48, -60, -36, -94], [46, -60, -56, -72, 84, 42, -58, 20, 94, 42, 40, 18, -48, 34, -40, -64, 38, 80, 64, -96, -94, 34, -24, -30, 0, -82, -70, 56, -30, -12, -86, -34, 18, 62, 46, 90, -82, -60, -60, 8, 52, 58, 76, -18], [-36, -60, -48, 96, -22, -96, 16, -16, 94, 20, 52, -14, 94, -12, -62, -10, 24, 86, -40, -92, 30, -6, -74, 60, 42, -84, 30, -38, 70, 30, -2, -96, 96, -68, 54, -38, 38, 94, -62, -54, 0, 32, -86, 76], [18, 52, -66, -96, -56, 10, 14, 40, -96, -58, 72, 30, -24, 80, -22, 46, 0, -88, -10, 0, -82, -76, -70, -38, -52, 72, -60, 40, -92, 30, 18, 70, -58, 76, -60, 98, 98, 42, -70, -66, 26, -18, -24, 0], [6, -98, 22, -4, 8, 84, 52, -72, 34, -68, -86, -4, -92, 92, -74, 76, 46, 30, 0, -10, -4, -28, 62, 72, 78, 84, 96, -12, 30, 12, -56, 46, 66, -12, 96, -52, -26, -52, -62, 68, -8, -84, 68, -98], [-90, 42, 78, -70, -6, -82, 68, 26, 20, 18, 30, 64, 12, -98, -90, 22, -64, -60, -34, -24, -30, -76, -62, 28, 6, -58, -70, -52, 34, -72, 80, -6, -66, 58, 28, 30, -38, 80, -58, 26, 72, -46, -18, -74], [-2, -40, -52, -68, -80, 86, -78, 18, -60, -18, -94, -50, -30, -22, -40, -76, 58, 4, -88, -82, 32, -52, 76, 62, -22, 6, 76, -80, 38, 34, 82, -50, 18, -4, -96, 72, -46, 22, -66, 46, -50, -34, 28, 2], [-18, 94, 94, -92, -96, 64, 60, 94, 8, 10, -14, 74, 12, 28, 58, 18, -68, -66, 20, -84, 6, -54, 88, 76, -72, -94, -84, -28, 22, -84, -50, -22, 66, 86, -12, -52, 66, -82, -24, 0, 62, -74, 58, 10], [86, 26, -24, -10, -46, 42, 86, -76, -42, 0, -74, -86, -32, 88, -50, 12, -14, -88, -94, 8, 38, -72, -26, -8, 56, -36, 82, -80, -12, 42, -86, 96, -90, -34, -6, -86, -72, 52, -42, 80, 86, 26, -72, 8], [-26, -10, 44, -70, -22, -40, 4, 82, 40, -18, -64, 72, 10, 36, -76, 78, 52, -58, 4, -60, -52, -32, -58, -68, 32, -82, 82, -80, 6, 58, 44, 26, -44, -48, -98, -42, -48, -46, 4, 48, -36, -84, 10, 0], [50, -64, 98, 0, -90, 80, 80, -24, -84, -22, -84, -6, 76, 26, 36, -82, -46, -92, 86, 54, -18, 22, 76, 98, 16, 64, -32, 62, 84, 58, -16, -22, 46, -76, -58, 40, 26, 28, -62, -66, -60, -20, 72, -68], [-20, 14, -4, -90, 14, 86, 22, 26, 20, -80, 96, -20, -90, 50, -94, 10, -96, 46, -74, 58, 84, 24, -60, 64, -28, -58, 18, -52, -64, -54, 52, -26, 78, -50, -80, -8, -4, -30, 78, -2, 32, 70, 84, -60], [22, 98, 26, -72, 6, -24, 98, 74, -48, -48, 76, -12, -88, 48, -56, -52, 78, -58, 58, -72, 86, -78, -70, 36, 26, 4, -98, -32, 90, -96, -42, -18, 90, -8, -84, -4, 72, 24, -6, 60, 38, -72, 14, -2], [-24, -10, -16, -92, -52, 6, -44, -84, 0, 98, 88, -4, 58, 4, -20, 28, -58, 32, 64, 68, -66, 96, 36, 16, -74, 42, -96, 70, -92, 48, -52, -58, 40, -46, 82, -36, -68, -10, 94, -62, -34, -86, -6, 4], [32, 96, 22, 22, -82, -14, -58, -78, 44, -70, -30, -62, -56, -52, 42, 26, -48, 18, 18, 80, -82, 50, -12, 90, 20, 6, 72, -30, -80, -56, 72, 68, 0, -70, -28, 52, -52, -64, 86, 36, -38, -30, 24, -64], [22, -74, -30, 54, 76, 58, -88, 56, -30, -48, 4, 18, -28, 54, 42, -2, 8, -32, -20, 4, -40, -74, 78, 42, 6, 26, 94, 50, 94, -78, -16, 54, 36, -42, -6, -10, -70, 84, 62, 68, -76, -12, -46, -30], [56, -8, 86, -22, -80, 28, 8, -10, -40, -4, 0, -70, -70, 26, -70, -70, -84, -24, -10, -84, -12, 72, 8, -46, 38, 2, 86, -46, 48, -62, 60, -36, -18, -56, -84, 98, 6, -24, -22, 12, 2, 72, 34, 40], [12, -4, -66, -10, -20, -4, 96, 2, 76, 72, 40, 64, -6, 48, 32, -76, 18, 42, 66, 22, 12, 62, 34, -50, 10, 68, 94, -2, 82, 20, 8, 26, 22, -48, 42, 28, -70, -58, 88, -18, 12, 14, -46, -96], [70, -32, 42, -72, 54, 54, -92, -62, 30, -58, 50, -96, 68, -32, 40, -64, 76, -54, 88, 98, 86, 74, 62, 28, -62, 0, 60, -94, 24, 52, 70, 44, 76, -24, -46, -50, 74, -2, 40, 36, -52, -40, 46, 88], [46, -14, -6, 56, -94, -18, -24, -36, -2, 98, 28, -40, 36, -36, 82, -62, 88, -46, -70, -64, -30, 34, -14, 18, -20, 52, -96, -80, -20, -68, -62, -24, 60, 54, 66, 40, 14, 6, 20, -90, -20, 46, 66, 56], [4, 14, -78, -26, -16, 10, 40, -74, 60, -80, 46, 28, 80, -66, -28, 76, -4, 50, -4, 66, -38, 0, 46, 52, 98, 14, -4, 92, 92, -14, 24, 24, 90, -66, -86, 20, -44, 80, -26, -50, 92, 92, 86, -38], [-44, -74, 44, -46, -32, -50, 52, 94, -86, 46, 8, 56, 6, 12, 54, 66, -22, 18, -74, -54, -88, 42, 16, 8, -22, 96, -78, 98, 18, -16, 72, 44, -46, 36, 4, 72, -70, -68, -64, 20, -60, -50, 84, -64], [8, 82, 24, -
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           46, -62, 78, -72, 94, -8, 42, 18, 74, -40, -94, -86, 70, -34, -20, 58, 32, -14, -42, -46, -14, 6, 2, 74, 16, 92, 20, 6, -62, 40, -40, 88, -12, 82, 18, -22, 22, 38, -88, 28, 90], [82, -92, 96, 88, -64, 38, 14, -22, 56, -84, 2, -16, -88, -4, -50, -74, -10, -36, 68, 22, -92, 50, -12, 54, -84, -24, -50, -72, 12, 38, 74, -32, -26, -96, 38, 14, -50, 94, 74, -78, -56, 96, -68, 14], [-22, 46, -52, 16, 28, -22, -48, -96, 92, -54, -40, 86, 30, -4, -86, -92, -52, -18, -98, -78, 38, 70, -86, 98, 72, 30, 90, -28, 36, 58, 14, 12, 98, -54, 36, -32, -16, -76, 88, 32, -28, -4, 52, 30], [38, -90, 44, 54, -2, 16, -16, -66, 62, 98, 32, -82, -12, 12, -66, 54, -72, 64, -10, 30, 40, 0, -90, 90, -54, -92, -48, 58, 10, -4, -24, -86, -68, 70, 24, -38, -56, -78, -16, 56, 70, 88, 0, 54], [-50, 2, 18, -6, -12, 64, -12, 64, -44, 16, -16, 20, 72, 32, -54, -22, -12, 56, 84, -48, -60, -90, -70, -12, -4, -72, -78, 16, 22, 12, 48, -2, -82, -94, 48, 30, 76, -12, 94, -8, -10, -8, -46, -22], [96, 56, -22, -44, -30, 92, -56, 26, -42, 60, -2, 58, 52, 8, -48, 70, -38, -32, -92, 14, 26, 76, 48, 84, -96, 42, 32, 38, 6, -70, -58, 4, 58, 86, -54, -4, 80, 94, 18, 28, -82, 4, -14, -80], [-70, -4, 88, 20, -96, 64, -64, -66, -44, 50, -72, -56, 90, 38, 46, -84, 68, 66, -42, 52, 2, -6, 94, 78, -48, 84, -78, 82, -78, 96, 24, -12, -78, 60, 54, 26, -20, -80, -26, -42, 66, -40, -8, -74], [-60, -36, -16, 18, 24, 54, -52, -28, -48, 10, -16, -28, -26, -44, 72, 38, -56, 70, 28, 42, -38, 66, -34, -92, -42, 66, -18, 6, -64, 72, -22, -72, 82, 4, -14, -98, 20, -92, 84, 98, 84, -92, -96, 20], [-66, 8, -92, 76, -24, -36, -18, -62, -62, 12, 26, -12, -64, -26, -16, -42, 2, 82, -16, -74, -60, 8, 62, -8, 0, -66, -52, -44, -54, 58, 16, 94, -90, -60, -2, -14, 18, 16, -22, -88, -60, -16, 26, -18], [-22, -42, 20, -58, 72, 86, 2, -94, 32, -16, -68, -96, 10, -74, 40, -78, 96, -92, -94, 6, -26, -50, -28, -34, 62, 10, 74, -82, 0, 4, 58, -62, 28, 14, 26, 2, -40, -68, 42, 42, 80, 4, -48, -74], [-40, 26, -68, -60, -22, -50, 70, -42, 54, 30, -40, -70, 66, -8, -66, 24, 28, -46, 68, 8, -4, 84, 66, 54, 22, -80, -20, -28, 2, 6, 24, 88, -70, -80, 22, -96, -50, 60, -76, -32, 26, -58, 6, 6], [-60, 28, -56, -4, -8, -32, -12, 48, 48, 94, 18, 30, -56, 72, -70, 68, -26, -48, 22, 18, 64, 78, 38, -90, 18, -34, 90, -98, 82, -26, -80, -34, -22, 72, 58, 82, -96, -20, -80, 16, -50, -4, 24, 64], [-18, -62, 54, 32, 82, -22, 70, 16, 88, -34, 70, 16, -6, -80, 34, -42, 78, 30, -36, 96, 96, -62, 22, -96, -6, 0, -60, -70, 40, -62, 8, -92, -62, 90, -88, -78, 86, -38, 26, 18, 82, -96, -42, 30], [-48, -20, -42, -34, 76, 64, 2, 4, 6, 8, 56, -98, -50, -16, 68, -12, 78, -88, 62, 46, 22, 28, 36, 36, -46, 78, -86, -78, -10, -98, -24, -48, -62, -26, -4, 78, -84, -56, -48, -74, -2, 72, -86, 14], [-42, -74, 54, -28, -16, 94, 40, 44, -22, 10, 42, 38, 46, 68, 72, 32, 84, -6, -30, -54, -62, 30, 94, 36, -18, -30, 66, 52, 18, -24, -16, -60, -56, -2, -78, 80, -60, 20, -72, -24, -48, -86, -16, -12], [46, -38, -28, -72, 80, -8, -28, 28, -28, 4, -84, 56, -48, 28, -54, 34, 84, 28, -52, 38, -34, 20, 84, -10, 36, -60, 54, -66, -8, -54, -44, -82, 56, -78, -76, -94, 24, 30, 30, -78, -22, -48, 22, 44], [-10, -84, 66, 60, 40, -56, 86, 16, 44, -50, -62, 34, -44, 30, -62, 96, 76, -98, -50, -50, 36, -74, 42, -82, 44, -32, -48, 58, 22, 82, 82, 94, -70, -92, -96, -78, -70, 84, -44, -70, 82, -92, -96, -50], [40, -86, 66, 64, 98, 86, 18, 20, 54, -92, -26, 56, -96, -28, 16, 52, 42, 36, -64, 44, -96, -56, 78, 94, -54, 24, -62, 82, -36, -90, -40, 50, -72, -54, 80, 12, -24, 30, -48, 2, -64, 96, -66, 94], [80, 4, -82, -24, 18, 24, -78, -4, -14, 38, -10, -70, -78, -26, 6, 46, 78, 16, -48, 94, 4, 46, 54, -84, -56, -76, -50, -30, -94, -58, -96, 32, -2, -16, 76, -94, 54, -96, 96, -18, 80, 60, -82, 74], [12, -4, -66, 54, 82, 24, -84, 62, -58, -52, 8, -74, -62, 56, 86, -82, 30, 86, 46, 78, 94, 24, 44, 2, 62, -48, 58, 34, -74, -52, 32, 46, 92, 28, 72, -36, -14, -98, 68, -92, 12, 56, -40, -64], [-48, -98, 52, -92, 88, 30, 42, 90, 56, 76, 44, -58, -72, -28, -54, 26, -36, -28, -54, 64, 22, 2, -58, 30, 12, -92, 40, 46, 54, -16, -74, -2, 30, 72, 56, 96, -86, 76, -28, -26, 76, 32, -46, -22], [6, 16, 74, -22, -20, -12, 50, 50, 16, 50, 58, -16, -76, 68, 66, 36, -52, 98, 64, 84, -50, 88, -40, -22, -2, -94, 48, 70, 46, -36, 20, 74, -10, 20, -98, -26, -58, 80, 78, -66, -66, -28, 46, -40]], 30, 35,),
        ([[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 1, 1,
                                                                                                                                                                                          1, 1, 1, 1], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]], 10, 9,),
        ([[73, 62, 15, 20, 30, 7, 64, 47, 16, 52, 55, 87, 49, 78, 88, 59, 29, 62, 70], [8, 6, 26, 49, 12, 22, 62, 79, 79, 7, 38, 44, 68, 23, 38, 35, 52, 91, 46], [48, 26, 67, 1, 45, 46, 37, 11, 25, 35, 79, 3, 10, 87, 65, 22, 99, 20, 7], [56, 58, 1, 24, 66, 45, 43, 71, 43, 66, 51, 46, 95, 72, 38, 13, 53, 70, 70], [91, 38, 39, 29, 88, 50, 81, 47, 29, 64, 26, 76, 37, 24, 1, 30, 70, 93, 99], [66, 67, 92, 20, 36, 5, 28, 62, 57, 94, 9, 89, 81, 64, 55, 68, 36, 44, 41], [85, 37, 47, 87, 73, 77, 56, 49, 73, 35, 94, 62, 26, 95, 59, 96, 77, 71, 21], [89, 38, 3, 80, 35, 75, 1, 39, 92, 10, 94, 55, 60, 95, 22, 42, 85, 98, 19], [52, 99, 43, 54, 60, 70, 15, 4, 25, 58, 45, 28, 5, 9, 40, 41, 53, 63, 35], [76, 43, 87, 77, 58, 81, 44, 99, 64, 16,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         55, 17, 76, 20, 81, 74, 1, 61, 10], [14, 44, 60, 78, 72, 24, 31, 26, 86, 50, 77, 35, 64, 87, 57, 13, 79, 7, 51], [6, 35, 77, 25, 14, 30, 30, 88, 60, 63, 60, 30, 97, 14, 44, 75, 15, 82, 74], [16, 3, 1, 29, 70, 16, 42, 45, 86, 16, 77, 93, 69, 19, 20, 93, 14, 62, 84], [9, 40, 39, 99, 39, 51, 6, 26, 71, 73, 41, 40, 29, 69, 48, 8, 98, 81, 45], [52, 50, 89, 89, 99, 72, 84, 49, 86, 70, 48, 34, 35, 25, 79, 21, 47, 68, 99], [15, 71, 84, 46, 30, 57, 73, 52, 96, 40, 99, 16, 68, 51, 58, 48, 65, 7, 29], [55, 2, 13, 73, 91, 76, 24, 80, 39, 2, 34, 62, 90, 81, 96, 67, 31, 37, 34], [56, 7, 51, 88, 69, 1, 28, 68, 19, 8, 26, 36, 27, 96, 80, 49, 55, 8, 79], [74, 90, 52, 48, 12, 13, 9, 94, 61, 8, 7, 49, 53, 79, 99, 71, 81, 18, 55]], 17, 10,),
        ([[-92, -78, -78, -52, -46, -42, -38, -24, -18, -6, 2, 8, 14, 20, 58, 80, 84], [-86, -76, -66, -42, -26, -24, -18, -12, 2, 4, 10, 10, 14, 56, 62, 78, 80], [-82, -76, -60, -40, -40, -34, -22, -8, 0, 10, 16, 24, 56, 64, 68, 80, 92], [-86, -74, -72, -60, -58, -30, -12, -4, 2, 10, 24, 30, 34, 58, 64, 84, 96], [-88, -88, -88, -84, -66, -48, -32, -32, -18, -18, -12, 2, 12, 40, 58, 72, 86], [-80, -70, -64, -50, -48, -44, -26, -24, -20, -16, -8, 16, 24, 26, 48, 48, 76], [-96, -94, -94, -66, -50, -46, -34, -34, -10, 0, 2, 20, 24, 40, 82, 84, 98], [-90, -78, -66, -34, -20, -10, -10, 0, 10, 20, 36, 44, 58, 58, 80, 80, 84], [-96, -92, -56, -46, -44, -20, 16, 20,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     24, 28, 34, 40, 42, 48, 60, 78, 90], [-98, -54, -46, -46, -44, -40, -34, -26, -24, -16, 2, 18, 24, 24, 38, 64, 82], [-80, -68, -66, -56, -46, -28, -24, -22, -16, 18, 20, 22, 24, 52, 64, 82, 98], [-90, -46, -44, -32, -20, -16, 12, 28, 32, 52, 54, 66, 70, 70, 72, 86, 88], [-98, -84, -78, -64, -58, -18, -8, 4, 38, 42, 46, 46, 56, 62, 62, 86, 90], [-98, -52, -52, -36, -8, -6, 22, 24, 26, 38, 40, 44, 56, 60, 66, 80, 94], [-88, -80, -72, -58, -50, -22, -20, -10, -6, 4, 4, 8, 24, 48, 70, 78, 80], [-88, -70, -60, -58, -50, -42, -36, -24, -6, 2, 14, 20, 44, 58, 74, 78, 80], [-76, -50, -46, -40, -30, -24, -10, 4, 10, 14, 28, 36, 40, 40, 46, 56, 60]], 8, 10,),
        ([[0, 0, 1, 0, 0, 1], [1, 1, 1, 0, 0, 0], [0, 1, 0, 1, 0, 1], [
         1, 0, 1, 1, 0, 0], [1, 0, 0, 1, 0, 0], [1, 1, 0, 1, 0, 1]], 5, 3,),
        ([[6, 13, 16, 17, 27, 30, 43, 43, 44, 49, 55, 60, 66, 68, 74, 75, 77, 84], [5, 17, 22, 32, 34, 38, 40, 43, 54, 57, 60, 61, 63, 66, 84, 86, 87, 91], [4, 4, 14, 19, 27, 29, 29, 34, 34, 44, 46, 51, 53, 59, 64, 77, 80, 82], [3, 8, 13, 18, 19, 28, 34, 35, 40, 52, 53, 53, 61, 73, 81, 83, 89, 98], [1, 5, 11, 19, 25, 34, 35, 37, 41, 50, 71, 74, 74, 76, 87, 95, 97, 99], [1, 4, 12, 17, 29, 30, 44, 48, 49, 54, 54, 59, 60, 64, 74, 78, 82, 96], [6, 15, 16, 17, 17, 23, 26, 28, 36, 37, 40, 47, 48, 51, 52, 56, 81, 94], [7, 9, 9, 43, 47, 51, 52, 56, 60, 65, 68, 74, 82, 88, 91, 97, 98, 98], [1, 4, 10, 17, 18, 24, 31, 45, 51, 51, 56, 65, 68, 70, 73, 77, 94, 95], [
         1, 1, 12, 13, 26, 27, 33, 37, 39, 39, 40, 41, 46, 51, 61, 67, 74, 87], [4, 6, 14, 15, 16, 17, 20, 22, 23, 45, 55, 56, 79, 80, 85, 85, 98, 99], [16, 17, 23, 23, 38, 43, 43, 49, 51, 66, 69, 69, 69, 72, 81, 84, 90, 97], [18, 23, 25, 26, 26, 29, 35, 37, 45, 59, 67, 73, 73, 76, 79, 80, 81, 85], [2, 6, 7, 8, 15, 18, 24, 33, 36, 46, 53, 54, 54, 66, 85, 91, 91, 96], [2, 9, 17, 23, 28, 28, 35, 36, 39, 48, 67, 69, 74, 75, 80, 85, 89, 96], [8, 15, 16, 19, 20, 31, 33, 43, 52, 63, 72, 79, 86, 88, 91, 92, 97, 99], [4, 5, 10, 14, 34, 37, 41, 44, 45, 49, 72, 74, 81, 84, 85, 93, 96, 99], [1, 2, 19, 20, 25, 27, 31, 33, 40, 48, 55, 61, 63, 69, 76, 81, 83, 84]], 10, 13,),
        ([[4, 12, -60, -76], [-56, 66, -84, 68],
          [-8, 14, 44, -74], [54, 50, 78, 0]], 2, 3,),
        ([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [
         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], 19, 18,),
        ([[52, 7, 95, 62, 93, 89, 91, 56, 59, 16, 68, 28, 66, 67, 28, 60, 62, 73, 99, 50, 82, 60, 6, 98, 1, 16, 98, 77, 24, 53, 93, 41, 57, 64], [58, 70, 84, 33, 17, 25, 71, 88, 18, 52, 3, 82, 29, 21, 92, 7, 30, 32, 22, 70, 23, 3, 82, 10, 51, 58, 16, 8, 18, 58, 88, 12, 38, 24], [54, 57, 1, 87, 51, 44, 43, 24, 90, 50, 11, 30, 50, 76, 32, 99, 28, 10, 31, 90, 34, 90, 96, 39, 7, 22, 87, 72, 49, 31, 41, 71, 37, 64], [3, 91, 36, 83, 54, 80, 5, 44, 86, 45, 3, 33, 82, 92, 49, 96, 66, 97, 22, 43, 39, 12, 57, 97, 19, 99, 14, 20, 18, 24, 21, 62, 50, 8], [84, 52, 2, 31, 27, 92, 11, 4, 45, 39, 71, 95, 86, 19, 93, 93, 78, 35, 49, 66, 63, 57, 92, 20, 42, 19, 42, 71, 3, 58, 8, 30, 46, 36], [93, 21, 64, 42, 14, 39, 41, 71, 53, 68, 17, 46, 20, 66, 31, 24, 84, 63, 33, 58, 77, 56, 25, 61, 18, 26, 1, 10, 17, 24, 68, 39, 32, 23], [39, 54, 68, 4, 79, 78, 80, 94, 47, 18, 88, 9, 5, 24, 15, 19, 75, 50, 92, 23, 95, 90, 45, 21, 75, 70, 54, 12, 91, 15, 19, 73, 95, 20], [6, 50, 7, 65, 67, 87, 75, 68, 30, 89, 55, 31, 22, 42, 81, 71, 16, 4, 53, 3, 36, 69, 60, 45, 57, 85, 97, 99, 86, 11, 62, 76, 73, 7], [90, 92, 37, 24, 45, 10, 86, 79, 95, 62, 61, 70, 52, 84, 32, 62, 51, 31, 84, 58, 69, 85, 96, 74, 78, 11, 5, 73, 22, 89, 95, 86, 96, 1], [23, 83, 80, 6, 93, 80, 51, 87, 21, 29, 58, 92, 79, 80, 57, 76, 85, 49, 52, 32, 38, 83, 90, 14, 46, 83, 68, 76, 22, 58, 79, 43, 78, 42], [3, 51, 5, 9, 20, 68, 89, 22, 21, 39, 84, 36, 23, 70, 93, 33, 38, 76, 43, 3, 87, 9, 33, 50, 52, 91, 42, 76, 80, 82, 96, 10, 16, 98], [79, 84, 65, 45, 18, 45, 8, 42, 13, 1, 62, 95, 46, 53, 7, 32, 43, 19, 26, 63, 12, 58, 56, 52, 73, 50, 6, 41, 14, 85, 4, 35, 28, 20], [81, 20, 82, 93, 57, 57, 3, 8, 93, 17, 80, 34, 23, 21, 71, 46, 52, 77, 76, 62, 67, 70, 12, 99, 71, 1, 4, 21, 70, 56, 60, 19, 79, 92], [39, 69, 98, 82, 21, 26, 68, 89, 17, 8, 60, 21, 36, 55, 81, 44, 96, 62, 87, 14, 47, 14, 39, 76, 49, 38, 58, 84, 93, 14, 15, 30, 13, 16], [92, 70, 11, 57, 19, 22, 3, 39, 96, 86, 46, 55, 19, 40, 16, 37, 50, 75, 63, 50, 49, 95, 89, 38, 47, 8, 78, 15, 64, 57, 5, 8, 32, 54], [53, 2, 4, 76, 12, 39, 65, 40, 70, 13, 15, 42, 62, 15, 23, 16, 69, 47, 6, 35, 54, 8, 37, 53, 15, 16, 62, 74, 58, 31, 17, 42, 50, 9], [55, 92, 37, 74, 80, 67, 21, 31, 51, 10, 73, 43, 54, 26, 57, 40, 40, 39, 67, 64, 71, 4, 36, 33, 85, 86, 35, 97, 2, 56, 25, 94, 89, 29], [
         76, 13, 35, 51, 17, 13, 31, 6, 83, 31, 5, 71, 92, 2, 49, 11, 89, 83, 61, 82, 8, 48, 91, 71, 95, 55, 19, 60, 85, 89, 66, 25, 15, 30], [54, 94, 58, 73, 99, 27, 74, 6, 89, 46, 3, 16, 70, 44, 6, 30, 37, 50, 92, 17, 79, 77, 82, 69, 19, 57, 95, 39, 10, 13, 79, 50, 20, 96], [78, 2, 85, 80, 62, 28, 17, 28, 51, 37, 91, 31, 99, 98, 3, 19, 3, 91, 12, 37, 33, 18, 5, 39, 93, 21, 57, 71, 47, 62, 76, 35, 79, 6], [1, 90, 92, 4, 33, 68, 68, 31, 76, 18, 81, 20, 50, 97, 17, 8, 38, 80, 85, 56, 36, 76, 20, 57, 20, 5, 56, 61, 2, 14, 22, 8, 86, 14], [71, 45, 94, 34, 98, 3, 65, 8, 88, 17, 20, 98, 19, 63, 11, 89, 34, 62, 54, 26, 94, 7, 27, 28, 28, 12, 7, 4, 77, 12, 9, 24, 65, 85], [70, 14, 10, 88, 9, 7, 56, 53, 18, 17, 22, 82, 79, 89, 26, 52, 39, 74, 21, 57, 70, 71, 78, 67, 27, 37, 65, 90, 73, 28, 78, 31, 94, 91], [10, 99, 56, 64, 46, 65, 8, 74, 81, 76, 44, 82, 37, 84, 31, 30, 93, 45, 79, 35, 37, 61, 51, 99, 67, 19, 59, 8, 28, 9, 82, 88, 62, 4], [37, 6, 2, 45, 24, 60, 77, 78, 78, 25, 73, 25, 46, 56, 99, 26, 2, 59, 50, 86, 18, 32, 3, 82, 45, 96, 88, 90, 53, 91, 72, 52, 20, 24], [51, 11, 26, 53, 77, 33, 83, 46, 32, 63, 22, 48, 64, 5, 29, 95, 28, 16, 5, 51, 43, 27, 38, 22, 5, 29, 54, 54, 23, 13, 80, 45, 96, 85], [26, 54, 77, 95, 90, 59, 70, 7, 96, 65, 33, 29, 88, 79, 15, 74, 52, 36, 74, 56, 63, 4, 42, 8, 98, 55, 24, 60, 68, 99, 18, 86, 46, 92], [16, 81, 86, 22, 79, 79, 30, 7, 77, 68, 77, 50, 98, 76, 98, 27, 59, 10, 95, 53, 55, 91, 11, 18, 12, 5, 22, 48, 84, 3, 83, 41, 7, 72], [62, 72, 56, 90, 49, 13, 25, 29, 85, 47, 6, 30, 59, 30, 74, 55, 98, 86, 75, 7, 50, 34, 92, 71, 28, 27, 73, 76, 96, 92, 67, 78, 73, 36], [68, 91, 8, 18, 61, 91, 37, 26, 32, 81, 77, 7, 72, 88, 4, 29, 67, 61, 5, 23, 72, 50, 79, 24, 23, 72, 88, 90, 51, 74, 8, 2, 7, 82], [75, 25, 11, 60, 42, 36, 10, 26, 11, 97, 13, 77, 14, 25, 39, 48, 22, 39, 70, 85, 42, 47, 79, 96, 45, 15, 10, 79, 6, 93, 50, 67, 66, 99], [43, 58, 67, 95, 47, 79, 13, 66, 90, 52, 35, 18, 87, 7, 99, 6, 17, 5, 84, 25, 23, 46, 49, 71, 23, 5, 97, 50, 30, 12, 99, 58, 45, 19], [66, 54, 34, 82, 61, 60, 61, 18, 71, 81, 67, 2, 10, 90, 31, 66, 54, 27, 82, 58, 69, 16, 30, 78, 62, 66, 30, 79, 86, 98, 49, 43, 46, 74], [60, 3, 19, 15, 90, 29, 28, 90, 96, 62, 51, 37, 3, 88, 71, 77, 44, 40, 92, 41, 96, 69, 53, 41, 82, 42, 49, 99, 79, 21, 56, 28, 7, 46]], 17, 27,)
    ]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
