var Gambeezy = module.exports;

var Darcify = function(gumbo){
  var count = Math.floor(Math.random() * 20 ) + 1;
  for(var i = 0; i < count; i++){
    var coin = Math.floor(Math.random() * 2);
    if(coin === 0) gumbo += ' :D';
    else gumbo += '!';
  }
  return gumbo;
}

Darcify.name = "Darcify";

Gambeezy.modifiers = {
  Darcify: Darcify,
}