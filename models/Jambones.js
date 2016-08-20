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
  'mí'
]

var Zumbo = function(){
  if(Math.random() * 200 === 1) return 'Elliot';
  var gumbo = "";
  gumbo += starters[Math.floor(Math.random() * starters.length)];
  gumbo += firstVowels[Math.floor(Math.random() * firstVowels.length)];
  gumbo += endings[Math.floor(Math.random() * endings.length)];
  return gumbo;
}



Jambones.fns = [Zumbo];

