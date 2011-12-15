var prac = function (input, n, m) {
  var answer = 0;

  // 8方向のマスのWをremove
  var remove = function ( i, j ) {
    input[i][j] = '.';

    for ( x_vector = -1; x_vector <= 1; x_vector++ ){
      for ( y_vector = -1; y_vector <= 1; y_vector++ ) {
        var x = i + x_vector;
        var y = j + y_vector;
        if ( x < 0 || x >= n || y < 0 || y >= m ) continue;
        if ( input[x][y] == 'W' ) remove(x, y);
      }
    }
  }

  // 連続するWを探してremove & count
  for ( i = 0; i < n; i++ ) {
    for ( j = 0; j < m; j++ ) {
      if ( input[i][j]  == 'W' ) {
        answer++;
        remove(i, j);
      }
    }
  }

  return answer;
};

var input = [
['W','.','.','.','.','.','.','.','.','W','W','.'],
  ['.','W','W','W','.','.','.','.','.','W','W','W'],
  ['.','.','.','.','W','W','.','.','.','W','W','.'],
  ['.','.','.','.','.','.','.','.','.','W','W','.'],
  ['.','.','.','.','.','.','.','.','.','W','.','.'],
  ['.','.','W','.','.','.','.','.','.','W','.','.'],
  ['.','W','.','W','.','.','.','.','.','W','W','.'],
  ['W','.','W','.','W','.','.','.','.','.','W','.'],
  ['.','W','.','W','.','.','.','.','.','.','W','.'],
  ['.','.','W','.','.','.','.','.','.','.','W','.'],
  ];
console.log(prac(input, 10, 12));
