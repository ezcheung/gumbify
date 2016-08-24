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
  var index = ctrl.targetImage.indexOf('imgmorganify');
  if(index < 0) ctrl.targetImage.push('imgmorganify');
  else ctrl.targetImage.splice(index, 1);
  //ctrl.gramie = Math.floor(Math.random() * ctrl[ctrl.targetImage[ctrl.targetImage.length - 1]].length);
}

Zamboni.modifiers = ["Laurify", "Morganify"];
