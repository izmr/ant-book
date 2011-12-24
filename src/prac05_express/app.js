
/**
 * Module dependencies.
 */
var input = 
  "#S######.#"
+ "......#..#"
+ ".#.##.##.#"
+ ".#........"
+ "##.##.####"
+ "....#....#"
+ ".#######.#"
+ "....#....."
+ ".####.###."
+ "....#...G#";
var n = 10, m = 10;

var prac05 = function (input, n, m) {
  var INIT_DISTANCE = Number.POSITIVE_INFINITY
    , MAP = []
    , DISTANCE_MAP = []
    , START = {}
    , Q = [];
  var loadMap = function () {
    for (var i = 0; i < n; i++) {
      MAP[i] = [];
      for (var j = 0; j < m; j++) {
        MAP[i].push(input.charAt((i * m) + j));
        if (MAP[i][j] == 'S') START = {x:i, y:j};
      }
    }
  }
  var initMap = function () {
    for (var i = 0; i < n; i++) {
      DISTANCE_MAP[i] = [];
      for (var j = 0; j < m; j++) {
        DISTANCE_MAP[i].push(INIT_DISTANCE);
      }
    }
  }
  var search = function( ) {
    DISTANCE_MAP[START.x][START.y] = 0;

    while( Q.length > 0 ) {
      var next = Q.shift() // This obj has keys x and y
        , x_vector = [ 0, 1, 0, -1 ]
        , y_vector = [ 1, 0, -1, 0 ];

      console.log("Next: x=" + next.x + ", y=" + next.y + ": " + MAP[next.x][next.y]);
      for (var i = 0; i < 4; i++ ) {
        var vx = next.x + x_vector[i], vy = next.y + y_vector[i];
        if ( vx < 0 || vx >= n
            || vy < 0 || vy >= m  
            || MAP[vx][vy] == "#" || DISTANCE_MAP[vx][vy] != INIT_DISTANCE ) continue;
        console.log("  => vx=" + vx + ", vy=" + vy);
        DISTANCE_MAP[vx][vy] = DISTANCE_MAP[next.x][next.y] + 1;
        if ( MAP[vx][vy] == 'G' ) {
          console.log("GOAL: distance=" + DISTANCE_MAP[vx][vy]);
          return DISTANCE_MAP[vx][vy];
        } else {
          Q.push({ x:vx, y:vy });
        }
      }
    }
  }
  loadMap();
  initMap();
  Q.push( { x:START.x, y:START.y } );
  console.log(MAP);
  return search();
}

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration

app.use(express.bodyParser());

app.all('/', function(req, res, next) {
  var map = input;
  if ( req.body.map ) map = req.body.map;

  res.render('index', { title: 'Ant Book: Practice 05!',
                        map: map,
                        answer:prac05(map, n, m)});
});

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
