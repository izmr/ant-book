var prac = function(input) {
  var answer = "";
  while( input.length != 0 ) {
    if ( input.charAt(0) < input.charAt(input.length-1) ) {
      answer += input.charAt(0);
      input = input.substr(1, input.length);
    } else {
      answer += input.charAt(input.length-1);
      input = input.substr(0, input.length-1);
    }
  }
  return answer;
};

var input = "ACDBCB";
console.log(prac(input));
