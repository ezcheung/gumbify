var Jambones = require('../models/Jambones.js');
var Gambeezy = require('../models/Gambeezy.js');
var Zamboni = require('../models/Zamboni.js');

var m = require('mithril');

var Gumbo = module.exports;

Gumbo.controller = function(){
  var ctrl = this;

  ctrl.trombone = "Jamie"; //current nickname
  ctrl.targetImage = [];
  ctrl.gramie = 8; //current image index
  ctrl.gamgams = []; //current modifier 

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

  ctrl.imgmorganify = ['https://s-media-cache-ak0.pinimg.com/736x/29/ce/c7/29cec71622db0a6fe0da2b3f4d132b06.jpg'];


  ctrl.zumba = function(){
    ctrl.trombone = Jambones.Gumbify(); //current nickname
    //ctrl.gramie = Math.floor(Math.random() * ctrl[ctrl.targetImage[ctrl.targetImage.length - 1]].length); //current image index
  }

  //TODO: comment ths out/remove it for final version
  // setInterval(function(){
  //   console.log("Current trombone: ", ctrl.trombone);
  //   // console.log("Current gramie: ", ctrl.gramie);
  //   // console.log("Current gamgam: ", ctrl.gamgam);
  //   // console.log("List of options: ", optionList());
  //   //console.log("Gambeezy modifiers: ", Gambeezy.modifiers);
  //   console.log("Current list of modifiers: ", ctrl.gamgams);
  //   console.log("Laurified? ", Zamboni.Laurify);
  //   console.log("Current image array: ", ctrl.targetImage);
  // }, 3000);

}

Gumbo.view = function(ctrl){
  return m('gibbins', {class:'default'}, [
      //m('h1', ctrl.gamgam ? Gambeezy[ctrl.gamgam](ctrl.trombone) : ctrl.trombone),
      m('h1', ctrl.gamgams.length ? ctrl.gamgams.reduce((a, f)=> Gambeezy[f](a), ctrl.trombone) : ctrl.trombone),
      m('div'),
      //m('img', {src: ctrl[ctrl.targetImage[ctrl.targetImage.length - 1]][ctrl.gramie]}),
      m('div', {class:"images"}, images(ctrl)),
      m('div'),
      m('button', {onclick: ctrl.zumba}, ctrl.trombone === "Jamie" ? "Start Jambifying!" : "Gumbo another Gibbins!"),
      m('div', {class: "controls"}, [
          m('label', 'Modifiers: '),
          m('div', optionCheckboxes(ctrl))
        ]),
      /*m('select', {onchange: function(e){
        if(e.currentTarget.value === "No Modifier") ctrl.gamgam = null;
        else ctrl.gamgam = e.currentTarget.value;
      }}, optionList()),*/
    ])
}

var optionList = function(){
  var list = [];
  list.push(m('option', "No Modifier"));
  for(var i = 0; i < Gambeezy.modifiers.length; i++){
    list.push(m('option', Gambeezy.modifiers[i]));
  }
  return list;
}

var optionCheckboxes = function(ctrl){
  var list = [];

  for (let i = 0; i < Gambeezy.modifiers.length; i++){
    list.push(m('label', Gambeezy.modifiers[i]));
    list.push(m('input', {type: 'checkbox', 
                          value: Gambeezy.modifiers[i], 
                          onchange: function(){toggleModifier(Gambeezy.modifiers[i], ctrl)}
                         }))
  }

  for(let j = 0; j < Zamboni.modifiers.length; j++){
    list.push(m('label', Zamboni.modifiers[j]));
    list.push(m('input', {type: 'checkbox',
                          value: Zamboni.modifiers[j],
                          onchange: function(){
                            //Zamboni[Zamboni.modifiers[j]] = !Zamboni[Zamboni.modifiers[j]];
                            Zamboni[Zamboni.modifiers[j]](ctrl);
                            m.redraw();
                          }}))
  }
  return list;
}

var toggleModifier = function(mod, ctrl){
  console.log("Toggling: ", mod);
  var index = ctrl.gamgams.indexOf(mod);
  if(index >= 0) ctrl.gamgams.splice(index, 1);
  else ctrl.gamgams.push(mod); 
}

var getRand = function(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

var images = function(ctrl){
  var list = [];
  list.push(m("img", {class:'images', src: getRand(ctrl.gramieUrls)}));
  for(let i = 0; i < ctrl.targetImage.length; i++){
    console.log("TargetImages: ", ctrl.targetImage);
    list.push(m("img", {class:'over ' + ctrl.targetImage[i], src: getRand(ctrl[ctrl.targetImage[i]])}))
  }
  return list;
}