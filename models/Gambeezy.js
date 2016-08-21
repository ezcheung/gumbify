var Gambeezy = module.exports;

/*
* Makes speech Darcified. TODO: Change image if filter is set to Darcy
*/
var Darcify = function(gumbo){
  var count = Math.floor(Math.random() * 20 ) + 1;
  for(var i = 0; i < count; i++){
    var coin = Math.floor(Math.random() * 2);
    if(coin === 0) gumbo += ' :D';
    else gumbo += '!';
  }
  return gumbo;
}

//Names used for creating the dropdown menu
Darcify.name = "Darcify";

var Krishanify = function(gumbo){
  var chars = gumbo.split("");

  for(var i = 1; i < chars.length; i++){
    if(Math.random() <= .25){
      var tmp = chars[i - 1]; //swapping 2 letters
      chars[i - 1] = chars[i];
      chars[i] = tmp;
      i++; //won't double swap letters
    }

    if(Math.random() <= .1){
      chars[i] = mistypes[chars[i]][Math.floor(Math.random() * mistypes[chars[i]].length)];
    }
  }

  return chars.join("").toLowerCase();
}

Krishanify.name = 'Krishanify';
var mistypes = {
  'a': [],
  'b': ['n', 'v', 'g'],
  'c': ['x', 'd', 'v'],
  'd': ['s', 'c', 'f', 'e'],
  'e': [],
  'f': ['d', 'v', 'g', 'r'],
  'g': ['f', 'b', 'g', 't'],
  'h': ['g', 'n', 'j', 'y'],
  'i': ['u', 'k', 'o'],
  'j': ['h', 'u', 'k', 'm'],
  'k': ['j', 'l', 'i'],
  'l': ['k', 'o'],
  'm': ['n', 'j'],
  'n': ['b', 'h', 'm'],
  'o': ['i', 'k', 'p'],
  'p': ['o'],
  'q': ['a', 'w'],
  'r': ['e', 'f', 't'],
  's': ['a', 'w', 'd', 'x'],
  't': ['r', 'g', 'y'],
  'u': ['y', 'j', 'i'],
  'v': ['c', 'f', 'b'],
  'w': ['q', 's', 'e'],
  'x': ['z', 's', 'c'],
  'y': ['t', 'h', 'u'],
  'z': ['a', 'x']
}
Gambeezy.Darcify = Darcify;
Gambeezy.Krishanify = Krishanify;
Gambeezy.modifiers = [Darcify, Krishanify];
