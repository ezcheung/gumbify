var Jambones = module.exports;

var starters = [
  'J',
  'G',
  'Z',
  'Qu',
  'Zh',
  'Gr',
];

var firstVowels = [
  'a',
  'o',
  'i',
  'u',
  'ai',
  'oo'
];

var endings = [
  'mie',
  'mmee',
  'mbone',
  'mboo',
  'mboree',
  'mbo',
  'mba',
  'mbeezy',
  'mbone',
  'malaka',
  'mbie',
  'moo',
  'mé',
  'món',
  'mémon',
  'mí',
  'mito',
  'mbito',
  'mbino',
  'mbini',
  'mbinito'
]

var shortEnds = [
  'im',
  'am',
  'um',
  'om',
  'umb'
]

var getRand = function(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

var Zumbo = function(){
  if(Math.floor(Math.random() * 100) === 1) return 'Elliot';
  var gumbo = "";
  gumbo += getRand(starters);
  gumbo += getRand(firstVowels);
  gumbo += getRand(endings);
  return gumbo;
}

var Goomba = function(){
  var gumbo = "";
  gumbo += getRand(starters);
  gumbo += getRand(shortEnds);
  gumbo += " ";
  gumbo += getRand(starters);
  gumbo += getRand(shortEnds);
  return gumbo
}

Jambones.Gumbify = function(){
  return getRand(Jambones.fns)();
}



Jambones.fns = [Zumbo, Goomba];

