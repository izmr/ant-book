var prac = function (input, L) {
  var min = function ( ants ) {
    var answer = 0;
    for ( var i = 0; i < input.length; i++ ) {
      answer = Math.max(answer, Math.min(ants[i], L - ants[i]));
    }
    return answer;
  }

  var max = function ( ants ) {
    var answer = 0;
    for ( var i = 0; i < input.length; i++ ) {
      answer = Math.max(answer, Math.max(ants[i], L - ants[i]));
    }
    return answer;
  }

  return [min(input), max(input)];
};

var L = 10;
var input = [2, 6, 7];
console.log(prac(input, L));
