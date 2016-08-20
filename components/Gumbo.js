var Jambones = require('../models/Jambones.js');

var m = require('mithril');

var Gumbo = module.exports;

Gumbo.controller = function(){
  var ctrl = this;

  ctrl.trombone = "Jamie";

  ctrl.zumba = function(){
    ctrl.trombone = Jambones.fns[Math.floor(Math.random() * Jambones.fns.length)]();
  }

  /*setInterval(function(){
    console.log("Current trombone: ", ctrl.trombone);
    console.log("A random trombone: ", Jambones.fns[Math.floor(Math.random() * Jambones.fns.length)]());
    console.log("Jambones: ", Jambones);
    console.log("Jambones Fns: ", Jambones.fns);
    console.log("A Zumbo: ", Jambones.fns[0]());
  }, 3000);*/

}

Gumbo.view = function(ctrl){
  return m('gibbins', [
      m('h1', ctrl.trombone),
      m('button', {onclick: ctrl.zumba}, ctrl.trombone === "Jamie" ? "Start Jambifying!" : "Gumbo another Gibbins!")
    ])
}