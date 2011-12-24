var prac = function(input) {
  var answer = 0;
  var solve = function(input) {
    console.log("answer= " + answer + ", INPUT= " + input);

    if ( input.length > 1 ) {
      input.sort(function(a, b) { return a - b });
      var cost = input.shift() + input.shift();
      answer += cost;
      input.push(cost);
      solve(input);
    }
  }
  solve(input);
  return answer;
};

//var input = [8, 5, 8];
var input = [3, 4, 5, 1, 2];
console.log(prac(input));
