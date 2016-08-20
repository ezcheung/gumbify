var Jambones = require('../models/Jambones.js');

var m = require('mithril');

var Gumbo = module.exports;

Gumbo.controller = function(){
  var ctrl = this;

  ctrl.trombone = "Jamie";

  ctrl.gramieUrls = 
  [
  'http://imgur.com/uedI0Mc.jpg',
  'http://imgur.com/Y12m1Su.jpg',
  'http://imgur.com/YIL3w9t.jpg',
  'http://imgur.com/JdqXWkm.jpg',
  'http://imgur.com/KM3ZBsA.jpg',
  'http://imgur.com/t4ke0CV.jpg',
  'http://imgur.com/8PLk6pT.jpg',
  'http://imgur.com/EydjEZs.jpg',
  'http://imgur.com/DZ99cIl.jpg',
  'http://imgur.com/FqFXJJ1.jpg',
  'http://imgur.com/rkJxST8.jpg',
  'http://imgur.com/ishfBpk.jpg',
  'http://imgur.com/q8RuHbH.jpg',
  'http://imgur.com/8v7Vui6.jpg'
  ]

  ctrl.gramie = 8;

  ctrl.zumba = function(){
    ctrl.trombone = Jambones.Gumbify();
    ctrl.gramie = Math.floor(Math.random() * ctrl.gramieUrls.length);
  }

  setInterval(function(){
    console.log("Current trombone: ", ctrl.trombone);
    console.log("Current gramie: ", ctrl.gramie);
  }, 3000);

}

Gumbo.view = function(ctrl){
  return m('gibbins', [
      m('h1', ctrl.trombone),
      m('div'),
      m('img', {src:ctrl.gramieUrls[ctrl.gramie]}),
      m('div'),
      m('button', {onclick: ctrl.zumba}, ctrl.trombone === "Jamie" ? "Start Jambifying!" : "Gumbo another Gibbins!"),
    ])
}