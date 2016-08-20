window.m = require('mithril');

var Gumbo = require('./components/Gumbo');

m.route(document.getElementById('app'), '/', {
  '/': Gumbo,
});