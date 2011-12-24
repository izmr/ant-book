var prac = function (input, R) {
  console.log("START: input= " + input);
  var answer = []
    , current = input[0];

  for ( var i = 0; i < input.length; i++ ) {
    if ( input[i] > current + R ) {
      current = input[i-1] + Math.floor(R/2);
      answer.push(input[i-1]);
    }
    if ( i == input.length-1 && input[i] > current + R ) 
      answer.push(input[i]);
    console.log("ANSWER: " + answer);
  }
  return answer.length;
};

var input = [1, 7, 15, 20, 30, 50];
var R = 10;
console.log(prac(input, R));
