// guida.js — home (riquadri, elenchi, ricerca) e menu dell'area nella pagina di un compito. 22/10/2026.
// Percorsi sempre relativi: `data-radice` sul <body> dice quanti livelli salire ("" in guida/, "../" in guida/compiti/).
(function () {
  'use strict';
  var COMPITI = window.GLODE_COMPITI || [], AREE = window.GLODE_AREE || {};
  var RADICE = document.body.getAttribute('data-radice') || '';
  var SVG = 'http://www.w3.org/2000/svg';

  function el(tag, attr, figli) {
    var e = document.createElement(tag);
    Object.keys(attr || {}).forEach(function (k) { if (k === 'testo') e.textContent = attr[k]; else e.setAttribute(k, attr[k]); });
    (figli || []).forEach(function (f) { e.appendChild(typeof f === 'string' ? document.createTextNode(f) : f); });
    return e;
  }
  function icona(corpo) {
    var s = document.createElementNS(SVG, 'svg');
    s.setAttribute('viewBox', '0 0 24 24'); s.setAttribute('aria-hidden', 'true'); s.innerHTML = corpo; return s;
  }
  function conta(n) { return n === 1 ? '1 compito' : n + ' compiti'; }
  function href(c) { return RADICE + c.pagina; }
  function perArea(a) { return COMPITI.filter(function (c) { return c.area === a; }); }

  // Ricerca senza accenti e senza maiuscole; «recensioni» trova «recensione» togliendo la vocale finale a
  // entrambe (solo sopra le 3 lettere, così «eta» resta «eta»); basta che il prefisso torni su una parola del compito.
  function norma(s) { return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
  function radice(p) { return p.length > 3 ? p.replace(/[aeio]+$/, '') : p; }
  function parole(s) { return norma(s).split(/[^a-z0-9]+/).filter(Boolean); }
  function cerca(q) {
    var t = parole(q).filter(function (x) { return x.length > 1; }).map(radice);
    if (!t.length) return [];
    return COMPITI.filter(function (c) {
      var pc = parole([c.titolo, c.descrizione].concat(c.parole || []).join(' ')).map(radice);
      return t.every(function (x) { return pc.some(function (p) { return p.indexOf(x) === 0; }); });
    });
  }

  function disegnaHome() {
    // Una colonna per area: il riquadro colorato e, sotto, la lista dei suoi compiti (solo se ce n'è almeno uno).
    // L'id area-<x> sta sulla colonna, che esiste sempre: le ancore dei riquadri e di «Da dove viene?» non si rompono.
    var griglia = document.getElementById('aree');
    if (griglia) Object.keys(AREE).forEach(function (a) {
      var d = AREE[a], lista = perArea(a);
      var colonna = el('div', { 'class': 'colonna-area', id: 'area-' + a }, [
        el('a', { 'class': 'tessera ' + d.classe, href: '#area-' + a }, [
          icona(d.icona),
          el('div', {}, [el('b', { testo: d.titolo }), el('span', {}, [d.descrizione + ' · ', el('span', { 'class': 'non-spezzare', testo: lista.length ? conta(lista.length) : 'in arrivo' })])])
        ])
      ]);
      if (lista.length) {
        var blocco = el('div', { 'class': 'blocco-area' });
        lista.forEach(function (c) {
          // l'ultima parola e la freccia in un pezzo solo: la freccia non resta mai da sola sulla riga dopo
          var parole_ = c.titolo.split(' '), ultima = parole_.pop();
          var a = el('a', { href: href(c) });
          if (parole_.length) a.appendChild(document.createTextNode(parole_.join(' ') + ' '));
          a.appendChild(el('span', { 'class': 'non-spezzare', testo: ultima + '\u00a0→' }));
          blocco.appendChild(a);
        });
        colonna.appendChild(blocco);
      }
      griglia.appendChild(colonna);
    });
    var piu = document.getElementById('piu-cercati');
    if (piu) (window.GLODE_PIU_CERCATI || []).forEach(function (id) {
      var c = COMPITI.filter(function (x) { return x.id === id; })[0];
      if (c) piu.appendChild(el('a', { href: href(c), testo: c.titolo }));
    });
    var form = document.getElementById('form-cerca'), campo = document.getElementById('cerca'), out = document.getElementById('risultati');
    if (form && campo && out) {
      var mostra = function () {
        out.textContent = '';
        if (!parole(campo.value).some(function (x) { return x.length > 1; })) { out.hidden = true; return; }
        var r = cerca(campo.value); out.hidden = false;
        if (!r.length) { out.appendChild(el('p', { 'class': 'nessuno', testo: 'Nessun compito trovato. Provate con un’altra parola, per esempio «prezzo» o «foto».' })); return; }
        r.forEach(function (c) {
          out.appendChild(el('a', { 'class': 'risultato', href: href(c) }, [el('b', { testo: c.titolo }), el('span', { testo: AREE[c.area].titolo + ' · ' + c.descrizione })]));
        });
      };
      campo.addEventListener('input', mostra);
      form.addEventListener('submit', function (ev) { ev.preventDefault(); mostra(); });
    }
  }

  function disegnaMenuArea() {
    var nav = document.getElementById('menu-compiti'), id = document.body.getAttribute('data-compito');
    if (!nav) return;
    var c = COMPITI.filter(function (x) { return x.id === id; })[0];
    if (!c) return;
    nav.appendChild(el('span', { 'class': 'sopra', testo: AREE[c.area].titolo }));
    perArea(c.area).forEach(function (x) {
      var a = el('a', { href: href(x), testo: x.titolo });
      if (x.id === id) a.setAttribute('aria-current', 'page');
      nav.appendChild(a);
    });
  }

  disegnaHome();
  disegnaMenuArea();
})();
