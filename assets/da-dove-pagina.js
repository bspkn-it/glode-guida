// Disegna «Da dove viene?» dai dati di da-dove.js. La pagina scelta sta nell'indirizzo (?p=scheda, ?p=menu…), così un
// link può portare dritto a una pagina e il tasto «indietro» del browser funziona.
(function () {
  var PAGINE = window.GLODE_DA_DOVE || [];
  var $ = function (id) { return document.getElementById(id); };
  function crea(tag, attr, testo) { var e = document.createElement(tag); for (var k in attr) e.setAttribute(k, attr[k]); if (testo != null) e.textContent = testo; return e; }
  function mostra(id) {
    var p = PAGINE.filter(function (x) { return x.id === id; })[0] || PAGINE[0];
    if (!p) return;
    [].forEach.call($('dd-pagine').children, function (a) { a.classList.toggle('scelta', a.dataset.id === p.id); a.setAttribute('aria-current', a.dataset.id === p.id ? 'page' : 'false'); });
    var img = $('dd-img'), fig = $('dd-figura');
    img.src = 'img/' + p.img; img.width = p.w; img.height = p.h;
    img.alt = 'Screenshot del sito: ' + p.titolo + ', con ' + p.punti.length + ' punti numerati';
    [].slice.call(fig.querySelectorAll('.segno')).forEach(function (s) { s.remove(); });
    var leg = $('dd-legenda'); leg.innerHTML = '';
    $('dd-titolo').textContent = p.titolo; $('dd-sotto').textContent = p.sotto;
    p.punti.forEach(function (q, i) {
      var n = String(i + 1), dove = 'compiti/' + q.c + '.html';
      var s = crea('a', { 'class': 'segno numero', style: 'left:' + q.x + '%;top:' + q.y + '%', href: dove, 'aria-label': n + ': ' + q.t, 'data-n': n }, n);
      fig.appendChild(s);
      var li = crea('li'), a = crea('a', { href: dove, 'data-n': n });
      a.appendChild(crea('span', { 'class': 'n' }, n));
      var t = crea('span'); t.appendChild(crea('b', {}, q.t)); t.appendChild(crea('span', { 'class': 'dove' }, q.d));
      a.appendChild(t); li.appendChild(a); leg.appendChild(li);
      // passando su una voce si accende il suo numero, e viceversa
      [s, a].forEach(function (x) {
        x.addEventListener('mouseenter', function () { s.classList.add('acceso'); a.classList.add('acceso'); });
        x.addEventListener('mouseleave', function () { s.classList.remove('acceso'); a.classList.remove('acceso'); });
      });
    });
  }
  PAGINE.forEach(function (p) {
    var a = crea('a', { href: '?p=' + p.id, 'data-id': p.id });
    a.appendChild(crea('img', { src: 'img/' + p.img, alt: '', 'aria-hidden': 'true', loading: 'lazy' }));
    var t = crea('span'); t.appendChild(crea('b', {}, p.titolo)); t.appendChild(crea('span', {}, p.sotto));
    a.appendChild(t); $('dd-pagine').appendChild(a);
  });
  mostra(new URLSearchParams(location.search).get('p'));
})();
