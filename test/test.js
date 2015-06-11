
var generator = require('../generator');
var findSpecialUser = require('../solutions/findSpecialUser');
var benchmark = require('../benchmark');

var list = [
  { _id: 9, _follows: [ 3, 8, 7, 6, 5, 4, 2, 1, 0 ] },
  { _id: 8, _follows: [ 0, 6, 3, 1, 4 ] },
  { _id: 7, _follows: [ 5, 4 ] },
  { _id: 6, _follows: [ 2, 0, 7, 8 ] },
  { _id: 5, _follows: [] },
  { _id: 4, _follows: [ 3, 8, 0, 9 ] },
  { _id: 3, _follows: [ 9, 1 ] },
  { _id: 2, _follows: [ 0 ] },
  { _id: 1, _follows: [ 2, 4, 8, 5, 7, 6 ] },
  { _id: 0, _follows: [ 6 ] } 
];

var list2 = [
  { _id: 9, _follows: [ 3, 8, 7, 6, 5, 4, 2, 1, 0 ] },
  { _id: 8, _follows: [ 0, 6, 3, 1, 4 ] },
  { _id: 7, _follows: [ 5, 4 ] },
  { _id: 6, _follows: [ 2, 0, 7, 8 ] },
  { _id: 5, _follows: [] },
  { _id: 4, _follows: [ 3, 8, 0 ] },
  { _id: 3, _follows: [ 1 ] },
  { _id: 2, _follows: [ 0 ] },
  { _id: 1, _follows: [ 2, 4, 8, 5, 7, 6 ] },
  { _id: 0, _follows: [ 6 ] } 
];

var list3 = [
  { _id: 49, _follows: [ 32, 6, 46, 23 ] },
  { _id: 48, _follows: [ 41, 34, 4, 25 ] },
  { _id: 47, _follows: [ 46, 31, 44 ] },
  { _id: 46, _follows: [ 34 ] },
  { _id: 45, _follows: [ 9, 30 ] },
  { _id: 44, _follows: [ 27, 9, 2, 11, 37 ] },
  { _id: 43, _follows: [ 15, 14, 35, 41 ] },
  { _id: 42, _follows: [ 30, 48, 18, 6, 37 ] },
  { _id: 41, _follows: [ 34, 38, 10 ] },
  { _id: 40, _follows: [ 41, 23 ] },
  { _id: 39, _follows: [ 9, 49, 30, 25, 43, 47 ] },
  { _id: 38, _follows: [ 46, 36 ] },
  { _id: 37, _follows: [ 31, 48, 0, 6, 38 ] },
  { _id: 36, _follows: [] },
  { _id: 35, _follows: [ 4 ] },
  { _id: 34, _follows: [ 2 ] },
  { _id: 33, _follows: [ 3, 19, 28 ] },
  { _id: 32, _follows: [ 24, 3, 33 ] },
  { _id: 31, _follows: [ 37, 36, 14 ] },
  { _id: 30, _follows: [ 43, 31, 28, 11, 40, 46, 21, 45 ] },
  { _id: 29, _follows: [ 8, 28, 17 ] },
  { _id: 28, _follows: [ 21, 23, 41, 13 ] },
  { _id: 27, _follows: [ 25, 42 ] },
  { _id: 26, _follows: [ 45, 13 ] },
  { _id: 25, _follows: [ 23, 41, 37 ] },
  { _id: 24, _follows: [ 23 ] },
  { _id: 23, _follows: [ 32, 9 ] },
  { _id: 22,
    _follows:
     [ 33,
       29,
       49,
       48,
       47,
       46,
       45,
       44,
       43,
       42,
       41,
       40,
       39,
       38,
       37,
       36,
       35,
       34,
       32,
       31,
       30,
       28,
       27,
       26,
       25,
       24,
       23,
       21,
       20,
       19,
       18,
       17,
       16,
       15,
       14,
       13,
       12,
       11,
       10,
       9,
       8,
       7,
       6,
       5,
       4,
       3,
       2,
       1,
       0 ] },
  { _id: 21, _follows: [] },
  { _id: 20, _follows: [ 12, 30, 25 ] },
  { _id: 19, _follows: [ 16, 24, 0, 23 ] },
  { _id: 18, _follows: [ 48, 47 ] },
  { _id: 17, _follows: [ 37, 24, 46 ] },
  { _id: 16, _follows: [ 14, 29, 5 ] },
  { _id: 15, _follows: [ 26, 23, 31, 17 ] },
  { _id: 14, _follows: [ 27, 19, 6 ] },
  { _id: 13, _follows: [ 16, 42, 27, 33 ] },
  { _id: 12, _follows: [ 33, 34, 26, 9, 29, 14 ] },
  { _id: 11, _follows: [ 49, 31, 42 ] },
  { _id: 10, _follows: [ 6 ] },
  { _id: 9, _follows: [ 12, 42, 17, 6, 28 ] },
  { _id: 8, _follows: [ 11, 27 ] },
  { _id: 7, _follows: [ 29 ] },
  { _id: 6, _follows: [ 1 ] },
  { _id: 5, _follows: [ 27 ] },
  { _id: 4, _follows: [ 7, 21, 35 ] },
  { _id: 3, _follows: [ 2, 8 ] },
  { _id: 2, _follows: [ 33, 24, 19 ] },
  { _id: 1, _follows: [ 36 ] },
  { _id: 0, _follows: [ 33, 46, 34 ] }
];

var list4 = [ { _id: 149, _follows: [ 118 ] },
  { _id: 148, _follows: [ 121, 10, 16, 49 ] },
  { _id: 147, _follows: [ 108, 51, 73, 112 ] },
  { _id: 146, _follows: [ 105, 108 ] },
  { _id: 145, _follows: [ 17, 68 ] },
  { _id: 144, _follows: [ 42, 22 ] },
  { _id: 143, _follows: [ 75, 83 ] },
  { _id: 142, _follows: [ 69, 8, 27, 36 ] },
  { _id: 141, _follows: [ 128, 47, 86 ] },
  { _id: 140, _follows: [ 123, 88, 97, 109 ] },
  { _id: 139, _follows: [ 74 ] },
  { _id: 138, _follows: [ 35, 131, 101 ] },
  { _id: 137, _follows: [ 129 ] },
  { _id: 136, _follows: [ 133, 5, 146, 132, 126 ] },
  { _id: 135, _follows: [ 45, 79, 20, 2, 137 ] },
  { _id: 134, _follows: [ 42, 3, 91 ] },
  { _id: 133,
    _follows: [ 120, 149, 60, 100, 121, 67, 15, 117, 68 ] },
  { _id: 132, _follows: [ 147 ] },
  { _id: 131, _follows: [ 108, 81 ] },
  { _id: 130, _follows: [ 94 ] },
  { _id: 129, _follows: [ 23, 136, 114, 67 ] },
  { _id: 128, _follows: [ 105, 2, 8 ] },
  { _id: 127, _follows: [ 1, 47, 38 ] },
  { _id: 126, _follows: [ 50 ] },
  { _id: 125, _follows: [ 103, 46, 72 ] },
  { _id: 124, _follows: [ 111, 89 ] },
  { _id: 123, _follows: [ 12, 117, 115 ] },
  { _id: 122, _follows: [] },
  { _id: 121, _follows: [ 113 ] },
  { _id: 120, _follows: [ 10, 109, 92 ] },
  { _id: 119, _follows: [ 132 ] },
  { _id: 118, _follows: [ 127, 14, 22 ] },
  { _id: 117, _follows: [ 30, 13 ] },
  { _id: 116, _follows: [] },
  { _id: 115, _follows: [ 93, 116, 105, 77, 124 ] },
  { _id: 114, _follows: [ 55, 141 ] },
  { _id: 113, _follows: [ 35, 146 ] },
  { _id: 112, _follows: [ 9, 141, 100 ] },
  { _id: 111, _follows: [ 50, 101, 63 ] },
  { _id: 110, _follows: [ 143, 107 ] },
  { _id: 109, _follows: [ 110, 92, 34, 64, 145 ] },
  { _id: 108, _follows: [ 107, 128, 57, 23, 93 ] },
  { _id: 107, _follows: [ 121, 63, 106, 98 ] },
  { _id: 106, _follows: [ 42, 108, 60 ] },
  { _id: 105, _follows: [ 146, 36, 121, 89, 122, 11 ] },
  { _id: 104, _follows: [ 110, 77, 23, 54 ] },
  { _id: 103, _follows: [ 116, 117, 128 ] },
  { _id: 102, _follows: [] },
  { _id: 101, _follows: [ 72, 111, 73 ] },
  { _id: 100, _follows: [ 120, 12, 72 ] },
  { _id: 99, _follows: [ 140, 139, 105, 142 ] },
  { _id: 98, _follows: [ 130, 93, 61, 50, 38 ] },
  { _id: 97, _follows: [ 122, 101, 16 ] },
  { _id: 96, _follows: [ 131, 55, 12, 62, 83, 144 ] },
  { _id: 95, _follows: [ 7, 5, 78, 50 ] },
  { _id: 94, _follows: [ 69, 116 ] },
  { _id: 93, _follows: [ 129, 36 ] },
  { _id: 92, _follows: [ 115, 97 ] },
  { _id: 91, _follows: [ 54 ] },
  { _id: 90, _follows: [ 18, 66, 27 ] },
  { _id: 89, _follows: [ 130 ] },
  { _id: 88, _follows: [ 71, 81 ] },
  { _id: 87, _follows: [ 31, 97 ] },
  { _id: 86, _follows: [ 82, 8 ] },
  { _id: 85, _follows: [ 5 ] },
  { _id: 84, _follows: [ 20, 98 ] },
  { _id: 83, _follows: [ 65, 107, 112, 54, 90 ] },
  { _id: 82, _follows: [ 78, 127 ] },
  { _id: 81, _follows: [ 2 ] },
  { _id: 80, _follows: [ 10 ] },
  { _id: 79, _follows: [ 108, 118, 11, 107, 24 ] },
  { _id: 78, _follows: [ 68, 128, 38, 97, 4 ] },
  { _id: 77, _follows: [ 7, 93, 131, 129 ] },
  { _id: 76, _follows: [ 10, 77, 59, 117 ] },
  { _id: 75, _follows: [ 60, 4, 53, 69, 103, 31, 118 ] },
  { _id: 74, _follows: [ 10, 107, 125, 56, 70, 137 ] },
  { _id: 73, _follows: [ 59, 139 ] },
  { _id: 72, _follows: [ 123, 62 ] },
  { _id: 71, _follows: [ 89, 148, 102 ] },
  { _id: 70, _follows: [ 104, 80, 106 ] },
  { _id: 69, _follows: [] },
  { _id: 68, _follows: [ 147, 79 ] },
  { _id: 67, _follows: [ 3, 72, 63 ] },
  { _id: 66, _follows: [ 69, 83 ] },
  { _id: 65, _follows: [ 25, 13 ] },
  { _id: 64, _follows: [ 112, 73, 4, 140 ] },
  { _id: 63, _follows: [ 149, 134, 126, 10 ] },
  { _id: 62, _follows: [ 120, 141 ] },
  { _id: 61, _follows: [ 126 ] },
  { _id: 60, _follows: [ 30, 43 ] },
  { _id: 59, _follows: [ 14, 92 ] },
  { _id: 58, _follows: [ 62, 108 ] },
  { _id: 57, _follows: [ 144, 33, 45, 56, 127, 46, 122, 113 ] },
  { _id: 56, _follows: [ 35, 82, 69, 147, 12 ] },
  { _id: 55, _follows: [] },
  { _id: 54, _follows: [ 83, 142 ] },
  { _id: 53, _follows: [ 148, 87, 38 ] },
  { _id: 52, _follows: [ 133, 127, 139, 38, 51, 57 ] },
  { _id: 51, _follows: [ 56, 82, 26 ] },
  { _id: 50, _follows: [ 100, 112 ] },
  { _id: 49, _follows: [ 77, 110 ] },
  { _id: 48, _follows: [ 68, 20, 96, 99 ] },
  { _id: 47, _follows: [ 149, 107 ] },
  { _id: 46, _follows: [ 134, 44, 108 ] },
  { _id: 45, _follows: [ 137, 2, 46 ] },
  { _id: 44, _follows: [ 66 ] },
  { _id: 43, _follows: [ 63, 12 ] },
  { _id: 42, _follows: [ 68, 105, 121, 62, 9 ] },
  { _id: 41, _follows: [ 34, 36, 60, 108 ] },
  { _id: 40, _follows: [ 111, 122, 101, 87, 29 ] },
  { _id: 39, _follows: [ 140, 63, 42, 122 ] },
  { _id: 38, _follows: [ 46, 73, 84 ] },
  { _id: 37, _follows: [ 80, 16, 33, 148 ] },
  { _id: 36, _follows: [ 77, 88, 148, 141 ] },
  { _id: 35, _follows: [ 108 ] },
  { _id: 34, _follows: [ 145, 116, 24, 124, 20 ] },
  { _id: 33, _follows: [ 88, 22, 131, 76, 138, 114 ] },
  { _id: 32, _follows: [ 65, 86 ] },
  { _id: 31, _follows: [] },
  { _id: 30, _follows: [ 102, 135, 118 ] },
  { _id: 29, _follows: [ 124, 23 ] },
  { _id: 28,
    _follows:
     [ 57,
       25,
       71,
       83,
       149,
       148,
       147,
       146,
       145,
       144,
       143,
       142,
       141,
       140,
       139,
       138,
       137,
       136,
       135,
       134,
       133,
       132,
       131,
       130,
       129,
       128,
       127,
       126,
       125,
       124,
       123,
       122,
       121,
       120,
       119,
       118,
       117,
       116,
       115,
       114,
       113,
       112,
       111,
       110,
       109,
       108,
       107,
       106,
       105,
       104,
       103,
       102,
       101,
       100,
       99,
       98,
       97,
       96,
       95,
       94,
       93,
       92,
       91,
       90,
       89,
       88,
       87,
       86,
       85,
       84,
       82,
       81,
       80,
       79,
       78,
       77,
       76,
       75,
       74,
       73,
       72,
       70,
       69,
       68,
       67,
       66,
       65,
       64,
       63,
       62,
       61,
       60,
       59,
       58,
       56,
       55,
       54,
       53,
       52,
       51,
       50,
       49,
       48,
       47,
       46,
       45,
       44,
       43,
       42,
       41,
       40,
       39,
       38,
       37,
       36,
       35,
       34,
       33,
       32,
       31,
       30,
       29,
       27,
       26,
       24,
       23,
       22,
       21,
       20,
       19,
       18,
       17,
       16,
       15,
       14,
       13,
       12,
       11,
       10,
       9,
       8,
       7,
       6,
       5,
       4,
       3,
       2,
       1,
       0 ] },
  { _id: 27, _follows: [] },
  { _id: 26, _follows: [ 2, 22, 51, 143, 142, 14 ] },
  { _id: 25, _follows: [] },
  { _id: 24, _follows: [ 37, 125 ] },
  { _id: 23, _follows: [ 102, 32, 83, 62 ] },
  { _id: 22, _follows: [ 6, 80, 11, 16, 43 ] },
  { _id: 21, _follows: [ 130 ] },
  { _id: 20, _follows: [ 24, 55, 87, 46, 47, 37 ] },
  { _id: 19, _follows: [ 15, 127 ] },
  { _id: 18, _follows: [ 121, 145, 13 ] },
  { _id: 17, _follows: [ 136, 103, 20 ] },
  { _id: 16, _follows: [ 97, 119, 104, 79, 19, 34, 68 ] },
  { _id: 15, _follows: [ 80, 83, 125, 14, 87, 148 ] },
  { _id: 14, _follows: [ 123, 103 ] },
  { _id: 13, _follows: [ 137, 40, 30, 98 ] },
  { _id: 12, _follows: [ 37, 20 ] },
  { _id: 11, _follows: [ 43, 8, 109 ] },
  { _id: 10, _follows: [ 40, 124 ] },
  { _id: 9, _follows: [] },
  { _id: 8, _follows: [ 144, 132 ] },
  { _id: 7, _follows: [ 8 ] },
  { _id: 6, _follows: [ 135, 62, 112, 111, 35 ] },
  { _id: 5, _follows: [ 121, 82, 148, 90 ] },
  { _id: 4, _follows: [ 95 ] },
  { _id: 3, _follows: [ 35, 79 ] },
  { _id: 2, _follows: [ 6 ] },
  { _id: 1, _follows: [] },
  { _id: 0, _follows: [ 115, 16, 17 ] }
];

var users = generator.fromList(list4);

benchmark.start();
console.log(users);
console.log(findSpecialUser(users));
console.log(benchmark.result());

