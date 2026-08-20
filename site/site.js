(function(){
  var nav = document.querySelector('[data-nav]');
  if (nav) {
    var base = nav.style.background, baseBorder = nav.style.borderBottomColor;
    var onScroll = function(){
      var past = window.scrollY > 8;
      nav.style.background = past ? 'rgba(13,13,13,.78)' : base;
      if (baseBorder) nav.style.borderBottomColor = past ? 'rgba(247,247,245,.18)' : baseBorder;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  }

  var rail = [].slice.call(document.querySelectorAll('[data-rail]'));
  var sections = [].slice.call(document.querySelectorAll('[data-section]'));
  if (rail.length && sections.length) {
    var ON = '#ff5c39', OFF = 'rgba(247,247,245,.38)';
    var paint = function(i){ rail.forEach(function(a,n){ a.style.color = n === i ? ON : OFF; }); };
    var sync = function(){
      var line = window.scrollY + 140, idx = 0;
      sections.forEach(function(s,n){ if (s.offsetTop <= line) idx = n; });
      paint(idx);
    };
    sync();
    window.addEventListener('scroll', sync, {passive:true});
    window.addEventListener('resize', sync);
  }
})();
