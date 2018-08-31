
var timeline;

app.animation = (function () {

  function init() {
    timeline = new TimelineMax();
    masterTimeline();
    removeElement('preloader')
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
