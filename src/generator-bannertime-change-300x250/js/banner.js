var app = {};
var animation = require('./animation');
var banner;

init();

function init() {
  document.addEventListener('DOMContentLoaded', domContentReady);
  window.addEventListener('load', documentLoadComplete);
}

function domContentReady() {
  console.log('DOM Content Ready');
  banner = document.getElementById('banner');
  addListeners();
  getElements();
}

function getElements() {
  var selectors = document.querySelectorAll('[id]');

  for (var i = 0; i < selectors.length; i++) {
    var item = selectors[i];  // Calling myNodeList.item(i) isn't necessary in JavaScript\
    console.log(item.id);
  }
}

function documentLoadComplete() {
  console.log('All Resources Loaded');
  animation.init();
}

function addListeners(){
  banner.addEventListener('click', function () {window.open(window.clickTag)});
}
