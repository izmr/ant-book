var prac = function(input, W) {
  console.log("START ... W: " + W + ", INPUT: " + input);
  var answers = [];
  var solve = function(input, weight, value) {
    if ( input.length == 0 ) { 
      answers.push(value);
      return;
    }

    var item = input[0];
    if ( weight + item[0] > W ) {
      answers.push(value);
    } else {
      solve(input.slice(1), weight, value);
      solve(input.slice(1), weight + item[0], value + item[1]);
    }
  }
  solve(input, 0, 0);
  return Math.max.apply(null, answers);
};

var input = [[2,3],[1,2],[3,4],[2,2]];
var W = 5;
console.log(prac(input, W));
