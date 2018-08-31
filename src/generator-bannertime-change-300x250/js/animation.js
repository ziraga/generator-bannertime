var test =  require('./utils');

var timeline;
var animation = (function () {

  function init() {
    timeline = new TimelineMax();
    TweenMax.set('#logo',{transformOrigin:"10% 50%"});
    masterTimeline();
  }

  function masterTimeline(){
    test.removeElement('preloader');
    timeline.addLabel('start')
      .add(intro())
  }

  function intro(){
    var tl = new TimelineMax();
    tl.to('#preloader',1,{opacity:0})
      .to('#logo',1,{scale:.5});
    return tl
  }

  return {
    init:init
  }
})();

module.exports = animation;
