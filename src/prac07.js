var prac = function (tasks) {
  var answer = 0
    , last = 0
    , current = 0;
  tasks.sort(function(a, b) { b[1] - a[1] } );
  last = tasks[tasks.length-1][1];

  for (var i = 0; i < tasks.length; i++) {
    var next = tasks[i];
    if ( next[0] >= current ) {
      console.log("START TASK: " + next[0] + " FINISHED: " + next[1]);
      current = next[1];
      answer++;
    }
  }

  return answer;
};

var tasks = [
  [1, 3],
  [2, 5],
  [4, 7],
  [6, 9],
  [8, 10]
];
console.log(prac(tasks));
