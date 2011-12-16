var win = Titanium.UI.currentWindow;

var initString = 
  "W........WW.\n"
+ ".WWW.....WWW\n"
+ "....WW...WW.\n"
+ ".........WW.\n"
+ ".........W..\n"
+ "..W......W..\n"
+ ".W.W.....WW.\n"
+ "W.W.W.....W.\n"
+ ".W.W......W.\n"
+ "..W.......W.";

var N = 10, M = 12;

var prac = function (input, N, M) {
	var answer = 0;
	var remove = function (i, j) {
		input[i][j] = '.';
		for ( var vx = -1; vx <= 1; vx++ ) {
			for ( var vy = -1; vy <= 1; vy++ ){
				var x = i + vx, y = j + vy;
				if ( x < 0 || x >= N || y < 0 || y >= M ) continue;
				if ( input[x][y] == 'W' ) remove (x, y);
			}
		}
	}
	for ( var i = 0; i < N; i ++ ) {
		for ( var j = 0; j < M; j++ ) {
			if ( input[i][j] == 'W' ) {
				answer++;
				remove(i, j);
			}
		}
	}
	return answer;
}

var input = [];

function loadString (str){
	var result = [];
	var line = str.split("\n");
	for ( var n in line ) {
		var lineArray = [];
		for ( var i = 0; i < line[n].length; i++ ) {
			lineArray.push(line[n].substring(i, i+1));
		}
		result.push(lineArray);
	}
	return result;
}

input = loadString(initString);

var textarea = Titanium.UI.createTextArea({
	value:initString,
    height:70,
    width:300,
    top:10,
    font:{FontFamily:'Monako'},
    //font:{fontSize:20,fontFamily:'Marker Felt', fontWeight:'bold'},
    color:'#888',
    textAlign:'left',
    appearance:Titanium.UI.KEYBOARD_APPEARANCE_ALERT,       
    keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
    returnKeyType:Titanium.UI.RETURNKEY_EMERGENCY_CALL,
    borderWidth:2,
    borderColor:'#bbb',
    borderRadius:5,
    suppressReturn:false
});

win.add(textarea);

var button = Titanium.UI.createButton({
	title:'START',
	height:40,
	width:200,
	top:90
});

button.addEventListener('click', function()
{
	input = loadString(textarea.value);
	Ti.API.debug(prac(input, N, M));
	//Ti.API.debug(input);
});

win.add(button);