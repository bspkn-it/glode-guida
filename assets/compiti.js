// compiti.js — l'elenco dei compiti della guida, in un solo posto (22/10/2026).
// La home costruisce da qui riquadri, elenchi e ricerca; la pagina di un compito costruisce il menu dell'area.
// `parole` sono le parole che Elettra potrebbe digitare e che non stanno nel titolo (senza accenti non serve:
// la ricerca li toglie da sola). Un compito nuovo = una voce qui + il suo file in compiti/<id>.html.
window.GLODE_AREE = {
  prodotti: {
    titolo: 'Prodotti', classe: 'navy',
    descrizione: 'Creare, cambiare prezzo e foto, la Mini, togliere dal sito',
    icona: '<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M9 3v3h6V3"/>'
  },
  campi: {
    titolo: 'Campi e voci', classe: 'prugna',
    descrizione: 'Recensioni, attivi, tips, esigenze, test della pelle',
    icona: '<path d="M4 6h16M4 12h16M4 18h10"/>'
  },
  collezioni: {
    titolo: 'Collezioni e centri', classe: 'lavanda',
    descrizione: 'I più amati, collezioni, «Dove trovi Glodé»',
    icona: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>'
  },
  aiuto: {
    titolo: 'Attenzione e aiuto', classe: 'perla',
    descrizione: 'Cosa non toccare, segnalarci un problema, domande frequenti',
    icona: '<path d="M12 3l9 16H3z"/><path d="M12 10v4M12 17v.5"/>'
  }
};

window.GLODE_COMPITI = [
  // Prodotti
  { id: 'creare-prodotto', area: 'prodotti', titolo: 'Creare un prodotto nuovo',
    descrizione: 'Dalla bozza al salvataggio: titolo, foto, formato, prezzo, SKU, famiglia e tag.',
    parole: ['nuovo', 'inserire', 'caricare', 'aggiungere', 'prodotto', 'bozza', 'foto', 'immagine', 'immagini', 'prezzo', 'sku', 'codice', 'barre', 'ean', 'formato', 'variante', 'tipo', 'famiglia', 'tag', 'titolo', 'descrizione', 'duplicare', 'copia'],
    pagina: 'compiti/creare-prodotto.html', minuti: 10 },
  { id: 'pubblicare-prodotto', area: 'prodotti', titolo: 'Pubblicare un prodotto nuovo',
    descrizione: 'Seconda parte: i campi Glodé, il test, Google e lo stato «Attivo».',
    parole: ['pubblicare', 'pubblicazione', 'attivo', 'online', 'mettere', 'sito', 'seo', 'google', 'campi', 'metafield', 'controllare', 'menu', 'home'],
    pagina: 'compiti/pubblicare-prodotto.html', minuti: 10 },
  { id: 'cambiare-prezzo-foto', area: 'prodotti', titolo: 'Cambiare prezzo o foto di un prodotto',
    descrizione: 'Un prezzo nuovo, una foto nuova o in un altro ordine.',
    parole: ['prezzo', 'prezzi', 'costo', 'costa', 'euro', 'sconto', 'foto', 'immagine', 'immagini', 'fotografia', 'packshot', 'ambientato', 'ordine', 'modificare', 'cambiare'],
    pagina: 'compiti/cambiare-prezzo-foto.html', minuti: 3 },
  { id: 'aggiungere-mini', area: 'prodotti', titolo: 'Aggiungere la Mini 15 ml',
    descrizione: 'Il formato Mini come seconda variante dello stesso prodotto.',
    parole: ['mini', '15', 'ml', 'sku', 'codice', 'formato', 'formati', 'variante', 'varianti', 'piccolo', 'taglia', 'misura'],
    pagina: 'compiti/aggiungere-mini.html', minuti: 5 },
  { id: 'togliere-prodotto', area: 'prodotti', titolo: 'Togliere un prodotto dal sito',
    descrizione: 'Bozza o archivio, senza eliminare niente.',
    parole: ['togliere', 'nascondere', 'rimuovere', 'eliminare', 'cancellare', 'archiviare', 'archiviato', 'bozza', 'sospendere', 'pausa', 'esaurito', 'ritirare'],
    pagina: 'compiti/togliere-prodotto.html', minuti: 2 },
  // Campi e voci
  { id: 'aggiungere-recensione', area: 'campi', titolo: 'Aggiungere, togliere o correggere una recensione',
    descrizione: 'Una recensione nuova, toglierne una, correggere il testo.',
    parole: ['recensione', 'recensioni', 'commento', 'opinione', 'cliente', 'autore', 'eta', 'testo', 'voce', 'stelle', 'togliere', 'ordine', 'correggere'],
    pagina: 'compiti/aggiungere-recensione.html', minuti: 2 },
  { id: 'aggiungere-attivo', area: 'campi', titolo: 'Aggiungere, togliere o correggere un attivo',
    descrizione: 'Un attivo nuovo, toglierne uno, correggere il testo.',
    parole: ['attivo', 'attivi', 'ingrediente', 'ingredienti', 'principio', 'nome', 'testo', 'voce', 'chiave', 'ordine', 'correggere'],
    pagina: 'compiti/aggiungere-attivo.html', minuti: 3 },
  { id: 'scrivere-tips', area: 'campi', titolo: 'Scrivere i Glodé Tips',
    descrizione: 'Il consiglio nella tendina «Glodé Tips» della scheda.',
    parole: ['tips', 'tip', 'consiglio', 'consigli', 'suggerimento', 'tendina', 'paragrafo'],
    pagina: 'compiti/scrivere-tips.html', minuti: 2 },
  { id: 'esigenze-tipi-pelle', area: 'campi', titolo: 'Esigenze e tipi di pelle',
    descrizione: 'Scegliere esigenze e tipi di pelle: decidono collezioni, menu e filtri.',
    parole: ['esigenza', 'esigenze', 'pelle', 'secca', 'grassa', 'mista', 'sensibile', 'matura', 'acneica', 'filtro', 'filtri', 'chip', 'tag', 'collezione'],
    pagina: 'compiti/esigenze-tipi-pelle.html', minuti: 3 },
  { id: 'test-della-pelle', area: 'campi', titolo: 'Decidere quando il test consiglia un prodotto',
    descrizione: 'Passo della routine e voci del test della pelle.',
    parole: ['test', 'quiz', 'questionario', 'scopri', 'codice', 'routine', 'passo', 'consigliare', 'consigliato', 'regola', 'regole', 'fascia', 'eta', 'risposte'],
    pagina: 'compiti/test-della-pelle.html', minuti: 5 },
  { id: 'campi-uno-per-uno', area: 'campi', titolo: 'I campi del prodotto, uno per uno',
    descrizione: 'Ogni campo Glodé e dove si vede sul sito.',
    parole: ['campi', 'campo', 'metafield', 'numero', 'linea', 'claim', 'formula', 'modo', 'uso', 'inci', 'pao', 'correlati', 'rituale', 'dove', 'scheda', 'a capo'],
    pagina: 'compiti/campi-uno-per-uno.html', minuti: 5 },
  // Collezioni e centri
  { id: 'cambiare-piu-amati', area: 'collezioni', titolo: 'Cambiare «I più amati» in home',
    descrizione: 'Aggiungere, togliere e ordinare i prodotti della collezione manuale.',
    parole: ['amati', 'preferiti', 'home', 'vetrina', 'collezione', 'manuale', 'idee', 'regalo', 'ordine', 'evidenza'],
    pagina: 'compiti/cambiare-piu-amati.html', minuti: 3 },
  { id: 'collezioni', area: 'collezioni', titolo: 'Collezioni automatiche e manuali',
    descrizione: 'Quali si riempiono da sole, quali le riempite voi, le copertine.',
    parole: ['collezione', 'collezioni', 'categoria', 'categorie', 'automatica', 'manuale', 'condizioni', 'copertina', 'menu', 'tendina', 'catalogo'],
    pagina: 'compiti/collezioni.html', minuti: 3 },
  { id: 'centri', area: 'collezioni', titolo: 'Aggiungere, correggere o togliere un centro',
    descrizione: 'I centri della pagina «Dove trovi Glodé».',
    parole: ['centro', 'centri', 'estetico', 'estetista', 'negozio', 'rivenditore', 'partner', 'indirizzo', 'telefono', 'provincia', 'cap', 'mappa', 'dove', 'trovi'],
    pagina: 'compiti/centri.html', minuti: 3 },
  // Attenzione e aiuto
  { id: 'cosa-non-toccare', area: 'aiuto', titolo: 'Cosa non toccare',
    descrizione: 'Le parti del pannello che possono rompere il sito.',
    parole: ['attenzione', 'pericolo', 'tema', 'temi', 'personalizza', 'definizione', 'cancella', 'navigazione', 'menu', 'app', 'flow', 'pin'],
    pagina: 'compiti/cosa-non-toccare.html', minuti: 3 },
  { id: 'segnalare-problema', area: 'aiuto', titolo: 'Guardare il sito e segnalare un problema',
    descrizione: 'Cosa scriverci perché lo sistemiamo in fretta.',
    parole: ['problema', 'errore', 'bug', 'segnalare', 'segnalazione', 'non funziona', 'rotto', 'anteprima', 'guardare', 'controllare', 'scrivere'],
    pagina: 'compiti/segnalare-problema.html', minuti: 2 },
  { id: 'domande', area: 'aiuto', titolo: 'Domande frequenti',
    descrizione: 'Le domande più comuni, con il link al compito giusto.',
    parole: ['domande', 'faq', 'aiuto', 'perche', 'non compare', 'non vedo', 'sparito'],
    pagina: 'compiti/domande.html', minuti: 1 }
];

// I tre «più cercati» (id, nell'ordine in cui compaiono). Si mostrano solo quelli che esistono in GLODE_COMPITI,
// così il link non è mai rotto.
window.GLODE_PIU_CERCATI = ['creare-prodotto', 'aggiungere-recensione', 'togliere-prodotto'];
