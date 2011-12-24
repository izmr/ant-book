var COINS = [1, 5, 10, 50, 100, 500];
var prac = function(input, A) {
  var answer = 0;

  for ( var n = input.length-1; n >= 0; n-- ) {
    while ( input[n]-- > 0 ) {
      if ( A - COINS[n] >= 0 ) {
        console.log("USED COIN: " + COINS[n]);
        answer++;
        A -= COINS[n];
        if (A == 0 ) return answer;
      }
    }
  }

  return -1;
};

var input = [3, 2, 1, 3, 0, 2];
var A = 620;

console.log(prac(input, A));
