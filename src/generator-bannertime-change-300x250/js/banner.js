var app = app || {};
var banner;
var dom = {};
document.addEventListener('DOMContentLoaded', domContentReady);
window.addEventListener('load', documentLoadComplete);

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
  app.animation.init();
}

function removeElement(elementId) {
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
  console.log(elementId, "removed");
}

function addListeners(){
  banner.addEventListener('click', function () {window.open(window.clickTag)});
}
