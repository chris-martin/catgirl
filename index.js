(function($) {

  $(function() {
    var svg = $('svg');
    var catgirl = $('#catgirl');
    var rainbow = $('#rainbow');
    var radialRainbow = $('#radialRainbow');
    var frame = 0;
    var loopDuration = 0.8; // second
    var frameRate = 20; // fps
    var framesPerLoop = Math.floor(frameRate * loopDuration);
    var biggestTime = 0.4;
    function sin(x) { return (1 + Math.sin((x+Math.PI/2)*Math.PI)) / 2; }
    function easeIn(x) { return Math.sin(x); }
    function easeOut(x) { return Math.sin(x); }
    setInterval(function() {
      var w = svg.width(), h = svg.height();
      var progress = frame / framesPerLoop;
      var scale = progress < biggestTime
        ? sin(progress / biggestTime)
        : 1-sin((progress - biggestTime) / (1-biggestTime));
      var size = (2 + 2 * scale) * 0.12 * Math.min(w, h);
      catgirl.children()[1].style.opacity = Math.max(0, Math.min(1, 3*scale - 0.8));
      var x = Math.floor((w - size) / 2);
      var y = Math.floor((h - size) / 2);
      catgirl.attr('transform', 'translate(' + x + ',' + y + ') scale(' + size + ')'
        + ' rotate(' + (scale * -8 + 2) + ' ' + 0.5 + ' ' + 0.5 + ')');
      var bigSide = Math.max(w, h);
      rainbow.attr('width', bigSide);
      rainbow.attr('height', bigSide);
      rainbow.attr('y', w < h ? 0 : Math.floor((w-h)/-2));
      rainbow.attr('x', h < w ? 0 : Math.floor((h-w)/-2));
      radialRainbow.attr('r', progress * 2);
      frame = (frame + 1) % framesPerLoop;
    }, 1000 / frameRate);
  });
})(jQuery);