var test =  require('./utils');

var timeline;
var animation = (function () {

  function init() {
    timeline = new TimelineMax();
    masterTimeline();
    test.removeElement('preloader');
  }

  function masterTimeline(){
    timeline.addLabel('start')
      .add(intro())
  }

  function intro(){
    var tl = new TimelineMax();
    tl.to('#preloader',1,{opacity:0})
    return tl
  }

  return {
    init:init
  }
})();

module.exports = animation;
