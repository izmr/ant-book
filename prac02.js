var prac = function (input, L) {
  var ant_number = input.length;

  var min = function ( ants ) {
    var answer = 0;
    for ( var i = 0; i < L; i++ ) {
      var d = Math.min(ants[i], L - ants[i]);
      if ( answer < d ) answer = d;
    }
    return answer;
  }

  var max = function ( ants ) {
    var answer = 0;
    for ( var i = 0; i < L; i++ ) {
      if ( answer < ants[i] ) answer = ants[i];
      if ( answer < L - ants[i] ) answer = L - ants[i];
    }
    return answer;
  }

  return [min(input), max(input)];
};

var L = 10;
var input = [2, 6, 7];
console.log(prac(input, L));
