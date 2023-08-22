
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 11, ["num", 4], ["num", 24]], ["num", 7]], ["list", 2, ["list", 30, ["num", 14], ["num", 8]], ["num", 29]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:-1", ["list", 1, [["string", 17, " No Triplet Found"]]]], ["MYLOGEX:2", ["list", 2, [["list", 11, [["num", 4], ["num", 24], ["num", 27], ["num", 34], ["num", 39], ["num", 41], ["num", 67], ["num", 69], ["num", 84], ["num", 91], ["num", 94]]], ["num", 7]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:-1", ["list", 3, [["num", -36], ["num", -26], ["num", 62]]]], ["MYLOGEX:-1", ["list", 3, [["num", -36], ["num", -6], ["num", 42]]]], ["MYLOGEX:-1", ["list", 3, [["num", -32], ["num", -32], ["num", 64]]]], ["MYLOGEX:-1", ["list", 3, [["num", -32], ["num", -16], ["num", 48]]]], ["MYLOGEX:-1", ["list", 3, [["num", -32], ["num", 8], ["num", 24]]]], ["MYLOGEX:-1", ["list", 3, [["num", -32], ["num", -16], ["num", 48]]]], ["MYLOGEX:-1", ["list", 3, [["num", -32], ["num", 8], ["num", 24]]]], ["MYLOGEX:-1", ["list", 3, [["num", -26], ["num", -20], ["num", 46]]]], ["MYLOGEX:-1", ["list", 3, [["num", -26], ["num", -16], ["num", 42]]]], ["MYLOGEX:-1", ["list", 3, [["num", -26], ["num", 2], ["num", 24]]]], ["MYLOGEX:-1", ["list", 3, [["num", -16], ["num", 2], ["num", 14]]]], ["MYLOGEX:-1", ["list", 3, [["num", -16], ["num", 8], ["num", 8]]]], ["MYLOGEX:-1", ["list", 3, [["num", -6], ["num", -2], ["num", 8]]]], ["MYLOGEX:2", ["list", 2, [["list", 30, [["num", -36], ["num", -32], ["num", -32], ["num", -26], ["num", -20], ["num", -16], ["num", -6], ["num", -2], ["num", 2], ["num", 8], ["num", 8], ["num", 8], ["num", 14], ["num", 24], ["num", 40], ["num", 42], ["num", 46], ["num", 46], ["num", 46], ["num", 48], ["num", 50], ["num", 62], ["num", 64], ["num", 70], ["num", 72], ["num", 76], ["num", 92], ["num", 92], ["num", 96], ["num", 98]]], ["num", 29]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:2", ["list", 2, [["list", 22, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 15]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:-1", ["list", 1, [["string", 17, " No Triplet Found"]]]], ["MYLOGEX:2", ["list", 2, [["list", 7, [["num", 36], ["num", 42], ["num", 47], ["num", 65], ["num", 69], ["num", 82], ["num", 84]]], ["num", 3]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:-1", ["list", 1, [["string", 17, " No Triplet Found"]]]], ["MYLOGEX:2", ["list", 2, [["list", 6, [["num", -98], ["num", -74], ["num", -62], ["num", -60], ["num", -60], ["num", -32]]], ["num", 5]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:2", ["list", 2, [["list", 38, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 35]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:-1", ["list", 1, [["string", 17, " No Triplet Found"]]]], ["MYLOGEX:2", ["list", 2, [["list", 29, [["num", 1], ["num", 4], ["num", 4], ["num", 9], ["num", 20], ["num", 23], ["num", 24], ["num", 27], ["num", 28], ["num", 29], ["num", 31], ["num", 35], ["num", 42], ["num", 45], ["num", 46], ["num", 47], ["num", 49], ["num", 52], ["num", 55], ["num", 57], ["num", 62], ["num", 67], ["num", 72], ["num", 78], ["num", 79], ["num", 82], ["num", 86], ["num", 86], ["num", 88]]], ["num", 26]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:-1", ["list", 1, [["string", 17, " No Triplet Found"]]]], ["MYLOGEX:2", ["list", 2, [["list", 29, [["num", -98], ["num", -92], ["num", -90], ["num", -88], ["num", -86], ["num", -86], ["num", -80], ["num", -58], ["num", -46], ["num", -44], ["num", -40], ["num", -38], ["num", -16], ["num", -10], ["num", -10], ["num", -6], ["num", 0], ["num", 18], ["num", 24], ["num", 40], ["num", 44], ["num", 56], ["num", 68], ["num", 72], ["num", 90], ["num", 90], ["num", 92], ["num", 98], ["num", 98]]], ["num", 15]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:2", ["list", 2, [["list", 18, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 17]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:-1", ["list", 1, [["string", 17, " No Triplet Found"]]]], ["MYLOGEX:2", ["list", 2, [["list", 30, [["num", 3], ["num", 4], ["num", 4], ["num", 6], ["num", 7], ["num", 7], ["num", 7], ["num", 9], ["num", 9], ["num", 18], ["num", 19], ["num", 21], ["num", 26], ["num", 27], ["num", 30], ["num", 31], ["num", 34], ["num", 37], ["num", 40], ["num", 47], ["num", 51], ["num", 54], ["num", 56], ["num", 57], ["num", 59], ["num", 60], ["num", 62], ["num", 69], ["num", 85], ["num", 93]]], ["num", 28]]]]];
let _console_log = console.log;
let mylog_callcount = 0;
function _list_compare(ls1, ls2) {
  if (ls1.length !== ls2.length) return false;
  if (ls1.length > 0 && ls1[0] === "num" && ls2.length > 0 && ls2[0] === "num") {
    if (ls1[1] === ls2[1]) return true;
    else {
      try {
        if (Math.abs(ls1[1]) > 1e-6 && Math.abs(ls2[1]) > 1e-6) {
          if (Math.abs(ls1[1]) > 2 * Math.abs(ls2[1])) return false;
          else if (2 * Math.abs(ls1[1]) < Math.abs(ls2[1])) return false;
          else if (Math.abs(Math.abs(ls1[1] / ls2[1]) - 1) > 1e-6) return false;
          else return true;
        } 
        else if (Math.abs(ls1[1]) <= 1e-6 && Math.abs(ls2[1]) <= 1e-6) return true;
        else return false;
      } catch (e) {
        throw Error("MyLogError _list_compare num error: " + ls1 + " <==> " + ls2 + " " + e);
      }
    }
  }
  let anyDiff = false;
  for (let i = 0; i < ls1.length; i++) {
    let ls1e = ls1[i], ls2e = ls2[i];
    if (Array.isArray(ls1e) && Array.isArray(ls2e)) {
      let elem_anydiff = !_list_compare(ls1e, ls2e);
      anyDiff = anyDiff || elem_anydiff;
    }
    else anyDiff = anyDiff || (ls1e !== ls2e);
    if (anyDiff) break;
  }
  return !anyDiff;
}
function mylog_obj_to_comp(is_exact, arg) {
  let typearg = typeof arg;
  if (arg === true || arg === false) return ["bool", arg];
  else if (typearg === "number") return ["num", arg];
  else if (typearg === "string") {
    if (is_exact) return ["string", arg.length, arg];
    else return ["string", arg.length, arg.length < 10 ? arg : arg.slice(0,10)];
  }
  else if (Array.isArray(arg)) {
    if (is_exact) return ["list", arg.length, arg.map(x => mylog_obj_to_comp(is_exact, x))];
    else return ["list", arg.length, arg.length > 0 ? mylog_obj_to_comp(is_exact, arg[0]) : "EMPTY", arg.length > 1 ? mylog_obj_to_comp(is_exact, arg[1]) : "EMPTY"];
  }
  else if (arg === null || arg === undefined) return ["none"];
  else return ["Unknown"];
}
function _mylog() {
  let is_exact = arguments[0];
  let prefix = is_exact ? "MYLOGEX:" : "MYLOGAP:";
  let info_list = [prefix + arguments[1]];
  if (SKIP_LOGGING === true && arguments[1] === -1) return;
  for (let i = 2; i < arguments.length; i++) {
    info_list.push(mylog_obj_to_comp(is_exact, arguments[i]));
  }
  _console_log("\n" + JSON.stringify(info_list));
  while (SKIP_LOGGING === true && mylog_callcount < MYLOG_LIST.length && MYLOG_LIST[mylog_callcount][0].endsWith(":-1")) {
    mylog_callcount += 1;
  }
  if (mylog_callcount >= MYLOG_LIST.length) {
    throw Error("MyLogError MYLOG_LENGTH_EXCEEDED COUNT:" + String(mylog_callcount) + " CALL_ID:" + String(arguments[0]));
  }
  else {
    if (_list_compare(info_list, MYLOG_LIST[mylog_callcount])) {
      mylog_callcount += 1;
      return;
    } else {
      throw Error("MyLogError MISMATCH CALL_ID:" + String(arguments[1]) 
        + " MISMATCH_IDX:" + String(mylog_callcount) 
        + " OBSERVED:" + JSON.stringify(info_list) 
        + " EXPECTED:" + JSON.stringify(MYLOG_LIST[mylog_callcount]));
    }
  }
}
function mylog() {
  _mylog(false, ...arguments);
}
function myexactlog() {
  _mylog(true, ...arguments);
}
console.log = function () {
  myexactlog(-1, [...arguments]);
  _console_log(...arguments);
}
function test() {
    "--- test function ---";
    let param = [
        [
            [4, 24, 27, 34, 39, 41, 67, 69, 84, 91, 94], 7
        ],
        [
            [14, 8, 92, 46, 62, 8, 8, 70, 98, -20, -16, -6, -2, -36, 46, 46, -26, 50, 76, 96, -32, 2, -32, 72, 48, 24, 64, 42, 40, 92], 29
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 15
        ],
        [
            [47, 69, 42, 36, 82, 65, 84], 3
        ],
        [
            [-98, -74, -62, -60, -60, -32], 5
        ],
        [
            [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0], 35
        ],
        [
            [1, 4, 4, 9, 20, 23, 24, 27, 28, 29, 31, 35, 42, 45, 46, 47, 49, 52, 55, 57, 62, 67, 72, 78, 79, 82, 86, 86, 88], 26
        ],
        [
            [92, 0, 56, 90, -10, -46, 44, -86, -16, -90, -92, -44, -88, 24, -80, -98, 68, -86, 98, -10, 18, -40, 98, 40, -58, -6, -38, 72, 90], 15
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 17
        ],
        [
            [7, 3, 37, 60, 6, 26, 30, 21, 7, 59, 18, 69, 40, 47, 34, 19, 51, 27, 4, 7, 56, 4, 57, 62, 54, 9, 93, 31, 9, 85], 28
        ]
    ];
    mylog(0, param);
    for (let i = 0; i < param.length; i++) {
        let parameters_set = param[i];
        let idx = i;
        myexactlog(1, idx);
        f_gold(...parameters_set);
        let result = parameters_set;
        myexactlog(2, result);
    }
}
"-----------------"

//TESTED_PROGRAM

"-----------------"

test()
