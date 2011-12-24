var prac = function(input, A) {
  var answer = 0;

  for ( var n = input.length-1; n >= 0; n-- ) {
    while ( input[n][1]-- > 0 ) {
      if ( A - input[n][0] >= 0 ) {
        console.log("USED COIN: " + input[n][0]);
        answer++;
        A -= input[n][0];
        if (A == 0 ) return answer;
      }
    }
  }

  return -1; // no answer
};

var input = [
  [1, 3],
  [5, 2],
  [10, 1],
  [50, 3],
  [100, 0],
  [500, 2]
];
var A = 620;

console.log(prac(input, A));
