/*
* Visual modifiers
*/

var $ = require('jquery');

var Zamboni = module.exports

Zamboni.Laurify = function(){
  $('body').toggleClass('laurified');
};

Zamboni.Morganify = function(ctrl){
  $('body').toggleClass('morganified');
  var index = ctrl.targetImage.indexOf('orangeUrl');
  if(index < 0) ctrl.targetImage.push('orangeUrl');
  else ctrl.targetImage.splice(index, 1);
  ctrl.gramie = Math.floor(Math.random() * ctrl[ctrl.targetImage[ctrl.targetImage.length - 1]].length);
}

Zamboni.modifiers = ["Laurify", "Morganify"];
