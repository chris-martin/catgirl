(function($) {

  $(function() {
    var svg = $('svg');
    var catgirl = $('.catgirl');
    var frame = 0;
    var loopDuration = 0.8; // second
    var frameRate = 20; // fps
    var framesPerLoop = Math.floor(frameRate * loopDuration);
    var biggestTime = 0.4;
    function sin(x) { return (1 + Math.sin((x+Math.PI/2)*Math.PI)) / 2; }
    function easeIn(x) { return Math.sin(x); }
    function easeOut(x) { return Math.sin(x); }
    setInterval(function() {
      var progress = frame / framesPerLoop;
      var scale = progress < biggestTime
        ? sin(progress / biggestTime)
        : 1-sin((progress - biggestTime) / (1-biggestTime));
      var size = (2 + 2 * scale) * 0.12 * Math.min(svg.width(), svg.height());
      catgirl.children()[1].style.opacity = Math.max(0, Math.min(1, 3*scale - 0.8));
      var x = Math.floor((svg.width() - size) / 2);
      var y = Math.floor((svg.height() - size) / 2);
      catgirl.attr('transform', 'translate(' + x + ',' + y + ') scale(' + size + ')'
        + ' rotate(' + (scale * -8 + 2) + ' ' + 0.5 + ' ' + 0.5 + ')');
      frame = (frame + 1) % framesPerLoop;
    }, 1000 / frameRate);
  });
})(jQuery);