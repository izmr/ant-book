var prac01 = function(input) {
  var n = input.length;
  var ans = 0;
  var is_triangle = function ( a, b, c ) {
    if ( a + b <= c  || b + c <= a || c + a <= b) {
      return false;
    } else {
      return true;
    }
  }

  for ( var i = 0; i < n - 2; i++ ) {
    for ( var j = i + 1; j < n - 1; j++ ) {
      for ( var k = j + 1; k < n; k++ ){
        var a = input[i];
        var b = input[j];
        var c = input[k];
        if ( is_triangle(a, b, c) ) {
          console.log("TRY! a:" + a + " b:" + b + "c:" + c);
          var sum = a + b + c;
          if ( sum > ans ) {
            console.log("Answer updated:" + sum);
            ans = sum;
          }
        }
      }
    }
  }

  return ans;
}

var input = [2, 3, 4, 5, 10];
console.log(prac01(input));
