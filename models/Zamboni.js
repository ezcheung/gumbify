/*
* Visual modifiers
*/

var $ = require('jquery');

var Zamboni = module.exports

Zamboni.Laurifymus = function(){
  $('body').toggleClass('laurified');
};

Zamboni.Morganify = function(ctrl){
  $('body').toggleClass('morganified');
  var index = ctrl.targetImage.indexOf('imgmorganify');
  if(index < 0) ctrl.targetImage.push('imgmorganify');
  else ctrl.targetImage.splice(index, 1);
  //ctrl.gramie = Math.floor(Math.random() * ctrl[ctrl.targetImage[ctrl.targetImage.length - 1]].length);
}

Zamboni.Joshify = function(ctrl){
  $('body').toggleClass('joshified');
  var index = ctrl.targetImage.indexOf('imgjoshify');
  if(index < 0) ctrl.targetImage.push('imgjoshify');
  else ctrl.targetImage.splice(index, 1);
  //ctrl.gramie = Math.floor(Math.random() * ctrl[ctrl.targetImage[ctrl.targetImage.length - 1]].length);
}

Zamboni.modifiers = ["Laurifymus", "Morganify", "Joshify"];
