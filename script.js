(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('.panel'));

  function activate(tab, opts) {
    var moveFocus = opts && opts.focus;

    tabs.forEach(function (t) {
      var isActive = t === tab;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      t.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach(function (p) {
      var isActive = p.id === tab.dataset.target;
      p.classList.toggle('active', isActive);
      if (isActive) {
        p.hidden = false;
      } else {
        p.hidden = true;
      }
    });

    if (moveFocus) tab.focus();

    if (history.replaceState) {
      history.replaceState(null, '', '#' + tab.dataset.target.replace('panel-', ''));
    }
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { activate(tab); });

    tab.addEventListener('keydown', function (e) {
      var idx = i;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        idx = (i + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        idx = (i - 1 + tabs.length) % tabs.length;
      } else if (e.key === 'Home') {
        idx = 0;
      } else if (e.key === 'End') {
        idx = tabs.length - 1;
      } else {
        return;
      }
      e.preventDefault();
      activate(tabs[idx], { focus: true });
    });
  });

  // Deep-link support: #youtube, #social, #info
  var hash = (window.location.hash || '').replace('#', '');
  if (hash) {
    var match = tabs.filter(function (t) { return t.dataset.target === 'panel-' + hash; })[0];
    if (match) activate(match);
  }
})();
