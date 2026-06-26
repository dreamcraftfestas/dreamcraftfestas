// ============================================
// DREAMCRAFT - CATÁLOGO FESTA COMPLETA
// ============================================

const bancoDadosTemas = [
    
    { nome: "1ª Volta ao Sol", pasta: "1voltaaosol", categorias: "all 1ano"  , totalImgs: 1 },    
    { nome: "3 Palavrinhas Fundo Verde", pasta: "3palavrinhasfundoverde", categorias: "all religiosos"  , totalImgs: 0 },
    { nome: "99 Noites", pasta: "99noites", categorias: "all jogos"  , totalImgs: 1 },
    { nome: "101 Dalmatas", pasta: "101dalmatas", categorias: "all filme desenho"  , totalImgs: 0 },
    { nome: "Ano Novo Branco", pasta: "anonovobranco", categorias: "all anonovo"  , totalImgs: 2 },
    { nome: "Ano Novo Dourado", pasta: "anonovodourado", categorias: "all anonovo"  , totalImgs: 4 },
    { nome: "Ano Novo Prata", pasta: "anonovoprata", categorias: "all anonovo"  , totalImgs: 2 },
    { nome: "Anos 60 Branco e Preto", pasta: "anos60brancoepreto", categorias: "all anos60"  , totalImgs: 0 },
    { nome: "Anos 80 Preto e Neon", pasta: "anos80pretoteneon", categorias: "all anos80"  , totalImgs: 0 },
    { nome: "Anos 90 Prata", pasta: "anos90prata", categorias: "all anos90"  , totalImgs: 0 },
    { nome: "Arca de Noé", pasta: "arcadenoe", categorias: "all religiosos"  , totalImgs: 1 },
    { nome: "Arco Iris Boho", pasta: "arcoirisboho", categorias: "all arcoiris"  , totalImgs: 1 },
    { nome: "Baby Monster", pasta: "babymonster", categorias: "all musica bandacoreana k-pop"  , totalImgs: 1 },
    { nome: "Barbie", pasta: "barbie", categorias: "all desenhos filme boneca meninas"  , totalImgs: 0 },
    { nome: "Batizado", pasta: "batizado", categorias: "all religiosos batizado"  , totalImgs: 0 },
    { nome: "Black Clover", pasta: "blackclover", categorias: "all anime"  , totalImgs: 0 },
    { nome: "Bluey e Bingo", pasta: "blueyebingo", categorias: "all desenhos animais"  , totalImgs: 0 },
    { nome: "Bolofofos Menina", pasta: "bolofofosmenina", categorias: "all desenhos musicas"  , totalImgs: 0 },
    { nome: "Bolofofos Menino", pasta: "bolofofosmenino", categorias: "all desenhos musicas"  , totalImgs: 0 },
    { nome: "Borboleta Lilas", pasta: "borboletalilas", categorias: "all borboletas animais"  , totalImgs: 1 },
    { nome: "Branca de Neve Azul Bebe", pasta: "brancadeneveazulbebe", categorias: "all princesas contodefadas filme disney"  , totalImgs: 0 },
    { nome: "Branca de Neve", pasta: "brancadeneve", categorias: "all princesas contodefadas filme disney"  , totalImgs: 1 },
    { nome: "Brasil Copa Sou Brasil até a Alma", pasta: "brasilcopasoubrasilateaalma", categorias: "all futebol times copa"  , totalImgs: 0 },
    { nome: "Brasil Copa Vai Brasil", pasta: "brasilcopavaibrasil", categorias: "all futebol times copa"  , totalImgs: 0 },
    { nome: "Brawl Star", pasta: "brawlstar", categorias: "all jogos"  , totalImgs: 0 },
    { nome: "Capivara", pasta: "capivara", categorias: "all desenhos cute"  , totalImgs: 1 },
    { nome: "Casa Magica da Gabby", pasta: "casamagicadagabby", categorias: "all desenhos magia"  , totalImgs: 1 },
    { nome: "Castelo Princesa Rosa", pasta: "casteloprincesarosa", categorias: "all princesas disney"  , totalImgs: 1 },
    { nome: "Churrasco Cilindro Wisky", pasta: "churrascocilindrowisky", categorias: "all churrasco boteco"  , totalImgs: 1 },
    { nome: "Chá de Bebe Azul ", pasta: "chadebebeazul", categorias: "all chadebebe"  , totalImgs: 2 },
    { nome: "Chá de Bebe Azul Elefantinho Balão", pasta: "chadebebeazulelefantinhobalao", categorias: "all chadebebe"  , totalImgs: 0 },
    { nome: "Chá de Bebe Lilas", pasta: "chadebebelilas", categorias: "all chadebebe"  , totalImgs: 1 },
    { nome: "Chá de Bebe Ursinho Rosa", pasta: "chadebebeursinhorosa", categorias: "all chadebebe"  , totalImgs: 1 },
    { nome: "Chá de Bebe Rosa", pasta: "chadebeberosa", categorias: "all chadebebe"  , totalImgs: 2 },
    { nome: "Chá Revelação Rosa/Azul – Ursinho", pasta: "charevelacaorosaazulursinho", categorias: "all charevelacao"  , totalImgs: 1 },
    { nome: "Chá Revelação Rosa e Azul", pasta: "charevelacaorosaeazul", categorias: "all charevelacao"  , totalImgs: 1 },
    { nome: "Cocorico", pasta: "cocorico", categorias: "all fazenda desenho"  , totalImgs: 1 },
    { nome: "Corinthians", pasta: "corinthians", categorias: "all times futebol"  , totalImgs: 0 },
    { nome: "Corinthians Lilás", pasta: "corinthianslilas", categorias: "all times futebol"  , totalImgs: 1 },
    { nome: "Crash Royale", pasta: "crashroyale", categorias: "all jogos"  , totalImgs: 1 },
    { nome: "Dia das Mães Rosas", pasta: "diadasmaesrosas", categorias: "all datacomemorativa"  , totalImgs: 0 },
    { nome: "Dino Baby", pasta: "dinobaby", categorias: "all dinossauro animais"  , totalImgs: 0 },
    { nome: "Divertidamente 2", pasta: "divertidamente2", categorias: "all filme"  , totalImgs: 0 },
    { nome: "Dourado e Branco Romano", pasta: "douradoebrancoromano", categorias: "all diversos"  , totalImgs: 0 },
    { nome: "Dourado", pasta: "dourado", categorias: "all diversos"  , totalImgs: 0 },
    { nome: "Fazendinha Azul", pasta: "fazendinhaazul", categorias: "all fazendinha"  , totalImgs: 1 },
    { nome: "Fazendinha Vermelha / Rosa", pasta: "fazendinhavermelharosa", categorias: "all fazendinha"  , totalImgs: 0 },
    { nome: "Feijoada", pasta: "feijoada", categorias: "all boteco diversos"  , totalImgs: 0 },
    { nome: "Festa Junina / Julina", pasta: "festajuninajulina", categorias: "all arraia datacomemorativa"  , totalImgs: 0 },
    { nome: "Festa Junina Arraia Aquarela", pasta: "festajuninaarraiaaquarela", categorias: "all arraia datacomemorativa"  , totalImgs: 0 },
    { nome: "Festa Junina Arraia Cilindro Girassol", pasta: "festajuninaarraiacilindrogirassol", categorias: "all arraia datacomemorativa"  , totalImgs: 0 },
    { nome: "Festa Junina Arraia em Casa", pasta: "festajuninaarraiaemcasa", categorias: "all arraia datacomemorativa"  , totalImgs: 0 },
    { nome: "Flamengo", pasta: "flamengo", categorias: "all times futebol"  , totalImgs: 0 },
    { nome: "Frozen", pasta: "frozen", categorias: "all princesas filme contodefadas disney"  , totalImgs: 0 },
    { nome: "Fundo do Mar Aquarela", pasta: "fundodomaraquarela", categorias: "all fundodomar"  , totalImgs: 0 },
    { nome: "Fundo do Mar Menina", pasta: "fundodomarmenina", categorias: "all fundodomar"  , totalImgs: 0 },
    { nome: "Futebol Barcelona", pasta: "futebolbarcelona", categorias: "all times futebol"  , totalImgs: 1 },
    { nome: "Futebol", pasta: "futebol", categorias: "all times futebol"  , totalImgs: 1 },
    { nome: "Glitter Lilás", pasta: "glitterlilas", categorias: "all diversos"  , totalImgs: 0 },
    { nome: "Guerreiras do K-POP Neon", pasta: "guerreirasdokpopneon", categorias: "all k-pop musica bandacoreana"  , totalImgs: 3 },
    { nome: "Guerreiro K-POP Gato", pasta: "guerreirokpopgato", categorias: "all k-pop musica"  , totalImgs: 3 },
    { nome: "Hallowen", pasta: "hallowen", categorias: "all diadasbruxas"  , totalImgs: 1 },
    { nome: "Happy Birthday Roxo Lantejoula", pasta: "happybirthdayroxolantejoula", categorias: "all happybirthday"  , totalImgs: 1 },
    { nome: "Happy Birthday Dourado", pasta: "happybirthdaydourado", categorias: "all happybirthday"  , totalImgs: 1 },
    { nome: "Homem Aranha Cute", pasta: "homemaranhacute", categorias: "all herois filme desenhos cute"  , totalImgs: 0 },
    { nome: "Homem Aranha Miles Morales", pasta: "homemaranhamilesmorales", categorias: "all herois filme desenhos"  , totalImgs: 1 },
    { nome: "Ilhama", pasta: "ilhama", categorias: "all animais"  , totalImgs: 1 },
    { nome: "Jardim Borboleta", pasta: "jardimborboleta", categorias: "all borboletas animais flores"  , totalImgs: 0 },
    { nome: "Joãozinho Praia", pasta: "joaozinhopraia", categorias: "all desenhos praia"  , totalImgs: 1 },
    { nome: "Liga da Justiça c/ Painel Lateral", pasta: "ligadajusticacpainellateral", categorias: "all herois filme desenhos"  , totalImgs: 0 },
    { nome: "Lucas Neto", pasta: "lucasneto", categorias: "all youtuber diversos"  , totalImgs: 0 },
    { nome: "Magali Baby", pasta: "magalibaby", categorias: "all desenhos cute"  , totalImgs: 0 },
    { nome: "Maria Clara e JP", pasta: "mariaclaraejp", categorias: "all youtuber diversos"  , totalImgs: 1 },
    { nome: "Mario Brós", pasta: "mariobros", categorias: "all jogos desenhos"  , totalImgs: 1 },
    { nome: "Meninas Superpoderosas", pasta: "meninassuperpoderosas", categorias: "all desenhos"  , totalImgs: 1 },
    { nome: "Meus 20 anos depois dos 20", pasta: "meus20anosdepoisdos20", categorias: "all 1ano"  , totalImgs: 0 },
    { nome: "Mickey Baby Azul", pasta: "mickeybabyazul", categorias: "all disney desenhos cute"  , totalImgs: 1 },
    { nome: "Mickey Safari", pasta: "mickeysafari", categorias: "all disney desenhos animais"  , totalImgs: 2 },
    { nome: "Mickey Tradicional", pasta: "mickeytradicional", categorias: "all disney desenhos"  , totalImgs: 0 },
    { nome: "MineCraft TNT", pasta: "minecrafttnt", categorias: "all jogos"  , totalImgs: 0 },
    { nome: "MineCraft", pasta: "minecraft", categorias: "all jogos"  , totalImgs: 0 },
    { nome: "Minnie Vermelha", pasta: "minnievermelha", categorias: "all disney desenhos"  , totalImgs: 0 },
    { nome: "Moana", pasta: "moana", categorias: "all princesas filme disney fundodomar"  , totalImgs: 1 },
    { nome: "Monstros S.A – Boo", pasta: "monstrossaboo", categorias: "all filme desenhos"  , totalImgs: 0 },
    { nome: "Moranguinho x", pasta: "moranguinhox", categorias: "all desenhos frutas"  , totalImgs: 0 },
    { nome: "Mulher Maravilha", pasta: "mulhermaravilha", categorias: "all herois filme desenhos"  , totalImgs: 0 },
    { nome: "My Litle Poney", pasta: "mylitleponey", categorias: "all desenhos animais"  , totalImgs: 0 },
    { nome: "Naruto", pasta: "naruto", categorias: "all anime desenhos"  , totalImgs: 0 },
    { nome: "Natal Verde", pasta: "natalverde", categorias: "all natal"  , totalImgs: 3 },
    { nome: "Natal Vermelho", pasta: "natalvermelho", categorias: "all natal"  , totalImgs: 8 },
    { nome: "One Piece", pasta: "onepiece", categorias: "all anime"  , totalImgs: 2 },
    { nome: "Os Rosas", pasta: "osrosas", categorias: "all youtuber diversos"  , totalImgs: 2 },
    { nome: "Ovelha Rosinha", pasta: "ovelharosinha", categorias: "all animais cute"  , totalImgs: 0 },
    { nome: "Painel Pallet", pasta: "painelpallet", categorias: "all diversos 20anos"  , totalImgs: 1 },
    { nome: "Pantera Negra", pasta: "panteranegra", categorias: "all herois filme"  , totalImgs: 1 },
    { nome: "Patrulha Canina", pasta: "patrulhacanina", categorias: "all desenhos animais"  , totalImgs: 0 },
    { nome: "Playstation", pasta: "playstation", categorias: "all jogos"  , totalImgs: 0 },
    { nome: "Pool Party Menino", pasta: "poolpartymenino", categorias: "all diversos fundodomar"  , totalImgs: 0 },
    { nome: "Prata", pasta: "prata", categorias: "all diversos"  , totalImgs: 0 },
    { nome: "Preto Com Glitter Rosa", pasta: "pretocomglitterrosa", categorias: "all diversos"  , totalImgs: 0 },
    { nome: "Princesa Tiana", pasta: "princesatiana", categorias: "all princesas filme disney"  , totalImgs: 1 },
    { nome: "Princesas Disney", pasta: "princesasdisney", categorias: "all princesas contodefadas filme disney"  , totalImgs: 1 },
    { nome: "Rapunzel Castelo", pasta: "rapunzelcastelo", categorias: "all princesas contodefadas filme"  , totalImgs: 1 },
    { nome: "Roblox", pasta: "roblox", categorias: "all jogos"  , totalImgs: 1 },
    { nome: "Rosas Azuis", pasta: "rosasazuis", categorias: "all jogos"  , totalImgs: 0 },
    { nome: "Sereia Splash", pasta: "sereiasplash", categorias: "all fundodomar desenhos"  , totalImgs: 0 },
    { nome: "Shimmer Wall Holográfico/Frutacor", pasta: "shimmerwallholograficofrutacor", categorias: "all diversos"  , totalImgs: 0 },
    { nome: "Shimmer Wall", pasta: "shimmerwall", categorias: "all diversos"  , totalImgs: 0 },
    { nome: "Shimmer Wall Prata Pirulito Lilas", pasta: "shimmerwallpratacomlilas", categorias: "all diversos"  , totalImgs: 1 },
    { nome: "Sititch Milk Shake", pasta: "sititchmilkshake", categorias: "all disney filme desenhos"  , totalImgs: 0 },
    { nome: "Sky – Patrulha Canina", pasta: "skypatrulhacanina", categorias: "all desenhos animais"  , totalImgs: 0 },
    { nome: "Spider Man Miles Morales", pasta: "spidermanmilesmorales", categorias: "all herois filme desenhos jogos"  , totalImgs: 0 },
    { nome: "Spirit", pasta: "spirit", categorias: "all desenhos animais"  , totalImgs: 0 },
    { nome: "Stitch Angel", pasta: "stitchangel", categorias: "all disney filme desenhos"  , totalImgs: 2 },
    { nome: "Stitch Chiclete", pasta: "stitchchiclete", categorias: "all disney filme desenhos"  , totalImgs: 0 },
    { nome: "Stitch MilkShake", pasta: "stitchmilkshake", categorias: "all disney filme desenhos"  , totalImgs: 2 },
    { nome: "Super Book", pasta: "superbook", categorias: "all religiosos"  , totalImgs: 1 },
    { nome: "São Paulo", pasta: "saopaulo", categorias: "all times futebol"  , totalImgs: 0 },
    { nome: "Tardezinha", pasta: "tardezinha", categorias: "all diversos boteco"  , totalImgs: 0 },
    { nome: "Toy Story", pasta: "toystory", categorias: "all filme desenhos"  , totalImgs: 0 },
    { nome: "Turma da Mônica", pasta: "turmadamonica", categorias: "all desenhos"  , totalImgs: 0 },
    { nome: "Unicórnio", pasta: "unicornio", categorias: "all diversos cute"  , totalImgs: 1 },
    { nome: "Ursinho Azul Chá de Bebe", pasta: "ursinhoazulchadebebe", categorias: "all chadebebe"  , totalImgs: 0 }


];

/* ---------- DESCRIÇÃO PADRÃO ---------- */
const DESCRICAO_PADRAO = [
  'Painel', 'Arco de balões', 'Boleiras',
  ,'Vaso Romano','Flores','Tapete', 'Tudo como na imagem ou nas cores que desejas'
];

/*const DESCRICOES_ESPECIAIS = {
  arcovazado_simples: [
    '<strong>Arco Vazado Simples (Clássico)</strong>',
    'Painel', 'Arco de balões uniformes', 'Boleira',
    'Bandeja sextavada', 'Bandeja lapidada', 'Bandeja Oval',
    'Vaso grego', 'Tudo como na imagem ou nas cores que desejar'
  ],
  arcovazado_desconstruido: [
    '<strong>Arco Vazado Desconstruído (Orgânico)</strong>',
    'Painel', 'Arco de balões desconstruídos', 'Boleira',
    'Bandeja sextavada', 'Bandeja lapidada', 'Bandeja Oval',
    'Vaso grego', 'Tudo como na imagem ou nas cores que desejas'
  ]
};*/

function getDescricaoHTML(pasta) {
  const itens = DESCRICOES_ESPECIAIS[pasta] || DESCRICAO_PADRAO;
  return itens.map(function (item) { return '<li>' + item + '</li>'; }).join('');
}

/* ---------- ESTADO GLOBAL DO MODAL ---------- */
let modalAtual  = null;
let imagensModal = [];
let indiceModal  = 0;

/* ---------- GERAÇÃO DO CATÁLOGO ---------- */
/*
 * Estratégia sem requests extras (evita 403):
 * 1. Cada card é criado com as 25 <img> já no DOM, mas todas
 *    com loading="lazy" — o browser só faz o request quando
 *    o elemento está perto da viewport.
 * 2. Cada <img> tem um onerror que a marca com data-falhou="1"
 *    e a esconde. Nenhum request "de teste" extra é feito.
 * 3. O IntersectionObserver espera o card entrar na tela e,
 *    depois que as imagens tiveram tempo de responder (onload/onerror),
 *    inicia o slideshow apenas com as que carregaram.
 * 4. O slideshow pula automaticamente imagens que falharam.
 */
function gerarCatalogo() {
  var container = document.getElementById('catalogo-festas');
  if (!container) return;

  var fragment = document.createDocumentFragment();
  bancoDadosTemas.forEach(function (tema) {
    fragment.appendChild(criarCard(tema));
  });

  container.innerHTML = '';
  container.appendChild(fragment);
  iniciarCarrosseis();
}

function criarCard(tema) {
  var nome       = tema.nome;
  var pasta      = tema.pasta;
  var categorias = tema.categorias;
  var wppNome    = encodeURIComponent(nome);
  
  // Pega o total real de imagens injetado pelo Node. Se não existir, assume 1 por segurança.
  var qtdImagens = tema.totalImgs || 1; 

  var card = document.createElement('div');
  card.className = 'festa';
  card.setAttribute('data-categoria', categorias);
  card.setAttribute('data-pasta', pasta);

  // O loop agora só roda até o número REAL de imagens que existem na pasta!
  var htmlImgs = '';
  for (var i = 1; i <= qtdImagens; i++) {
    htmlImgs +=
      '<img src="./Festa-Completa/' + pasta + '/' + i + '.webp"' +
      ' loading="lazy"' +
      ' data-indice="' + i + '"' +
      ' onerror="if(!this.dataset.tentouMaiusculo){this.dataset.tentouMaiusculo=\'1\'; this.src=\'./Festa-Completa/' + pasta + '/' + i + '.WEBP\';}else{this.dataset.falhou=\'1\';this.style.display=\'none\';}"' +
      (i === 1 ? ' class="imagem-ativa"' : '') +
      '>';
  }

  card.innerHTML =
    '<div class="carrossel">' +
      '<div class="imagens-carrossel">' + htmlImgs + '</div>' +
      '<div class="zoom-hint">🔍 Clique para ampliar</div>' +
    '</div>' +
    '<div class="conteudo">' +
      '<div class="titulo">' + nome + '</div>' +
      '<ul class="descricao">' + getDescricaoHTML(pasta) + '</ul>' +
      '<a class="whatsapp-btn"' +
        ' href="https://wa.me/5519993723106?text=Ol%C3%A1%2C+quero+or%C3%A7amento+para+' + wppNome + '"' +
        ' target="_blank" rel="noopener">' +
        '<i class="fa-brands fa-whatsapp"></i> Solicitar Orçamento' +
      '</a>' +
    '</div>';

  // Delega o clique para abrir o modal
  card.querySelector('.imagens-carrossel').addEventListener('click', function (e) {
    if (e.target.tagName !== 'IMG') return;
    var imgs    = Array.from(card.querySelectorAll('.imagens-carrossel img:not([data-falhou])'));
    var clicada = imgs.indexOf(e.target);
    if (clicada === -1) clicada = 0;
    abrirModalComLista(imgs.map(function (im) { return im.src; }), clicada);
  });

  return card;
}

/* ---------- CARROSSEIS COM IntersectionObserver ---------- */
function iniciarCarrosseis() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      iniciarSlideshow(entry.target);
    });
  }, { rootMargin: '300px 0px' }); // antecipa para as imgs lazy carregarem

  document.querySelectorAll('.festa').forEach(function (card) {
    observer.observe(card);
  });
}

/*
 * Inicia o slideshow do card.
 * Aguarda um pequeno delay para as imagens lazy terem tempo de
 * disparar onload/onerror antes de filtrar as válidas.
 */
function iniciarSlideshow(card) {
  // 800 ms é suficiente para o browser processar onload/onerror
  // das imagens que já estavam na fila de download
  setTimeout(function () {
    var container = card.querySelector('.imagens-carrossel');
    if (!container) return;

    // Imagens válidas = carregaram sem erro (data-falhou ausente)
    var todas   = Array.from(container.querySelectorAll('img'));
    var validas = todas.filter(function (img) { return !img.dataset.falhou; });

    if (validas.length <= 1) return; // nada a rotacionar

    var atual = 0;
    // Garante que só a primeira está ativa
    validas.forEach(function (img, i) {
      img.classList.toggle('imagem-ativa', i === 0);
    });

    setInterval(function () {
      if (!document.body.contains(card)) return;
      validas[atual].classList.remove('imagem-ativa');
      // Avança apenas para imagens que não falharam depois do delay inicial
      do {
        atual = (atual + 1) % validas.length;
      } while (validas[atual].dataset.falhou && validas.some(function (v) { return !v.dataset.falhou; }));
      validas[atual].classList.add('imagem-ativa');
    }, 3000);
  }, 800);
}

/* ---------- MODAL / LIGHTBOX ---------- */

/*
 * Recebe a lista exata de srcs válidos (já filtrados pelo carrossel)
 * e o índice da imagem clicada. Não faz requests extras.
 */
function abrirModalComLista(srcs, indiceInicial) {
  if (modalAtual) fecharModal();

  imagensModal = srcs.slice(); // cópia
  indiceModal  = indiceInicial || 0;

  modalAtual = document.createElement('div');
  modalAtual.className = 'modal-imagem';
  modalAtual.innerHTML =
    '<div class="modal-overlay"></div>' +
    '<div class="modal-conteudo">' +
      '<button class="modal-fechar" aria-label="Fechar">&times;</button>' +
      '<button class="modal-nav modal-anterior" aria-label="Anterior">&#10094;</button>' +
      '<img src="' + imagensModal[indiceModal] + '" class="modal-img" alt="Imagem do tema">' +
      '<button class="modal-nav modal-proximo" aria-label="Próximo">&#10095;</button>' +
      '<div class="modal-contador">' + (indiceModal + 1) + ' / ' + imagensModal.length + '</div>' +
    '</div>';

  document.body.appendChild(modalAtual);
  document.body.style.overflow = 'hidden';

  modalAtual.querySelector('.modal-overlay').addEventListener('click', fecharModal);
  modalAtual.querySelector('.modal-fechar').addEventListener('click', fecharModal);
  modalAtual.querySelector('.modal-anterior').addEventListener('click', imagemAnterior);
  modalAtual.querySelector('.modal-proximo').addEventListener('click', imagemProxima);

  atualizarBotoesModal();
}

function fecharModal() {
  if (!modalAtual) return;
  modalAtual.remove();
  modalAtual = null;
  document.body.style.overflow = '';
}

function imagemProxima() {
  if (indiceModal < imagensModal.length - 1) { indiceModal++; atualizarModal(); }
}

function imagemAnterior() {
  if (indiceModal > 0) { indiceModal--; atualizarModal(); }
}

function atualizarModal() {
  if (!modalAtual) return;
  modalAtual.querySelector('.modal-img').src = imagensModal[indiceModal];
  modalAtual.querySelector('.modal-contador').textContent =
    (indiceModal + 1) + ' / ' + imagensModal.length;
  atualizarBotoesModal();
}

function atualizarBotoesModal() {
  if (!modalAtual) return;
  const btnAnt = modalAtual.querySelector('.modal-anterior');
  const btnPro = modalAtual.querySelector('.modal-proximo');
  btnAnt.style.display = indiceModal === 0 ? 'none' : 'block';
  btnPro.style.display = indiceModal === imagensModal.length - 1 ? 'none' : 'block';
}

document.addEventListener('keydown', function (e) {
  if (!modalAtual) return;
  if (e.key === 'Escape')      fecharModal();
  if (e.key === 'ArrowLeft')   imagemAnterior();
  if (e.key === 'ArrowRight')  imagemProxima();
});

/* ---------- FILTROS E BUSCA ---------- */
function filtrarCategoria(categoria) {
  if (!categoria) categoria = document.getElementById('filtro').value;

  document.querySelectorAll('.filtro-btn').forEach(function (btn) {
    const onclick = btn.getAttribute('onclick') || '';
    btn.classList.toggle('active', onclick.indexOf("'" + categoria + "'") !== -1);
  });

  const select = document.getElementById('filtro');
  if (select) select.value = categoria;

  const catLower = categoria.toLowerCase();
  document.querySelectorAll('.festa').forEach(function (festa) {
    const cats = (festa.getAttribute('data-categoria') || '').toLowerCase();
    festa.style.display = (catLower === 'all' || cats.includes(catLower)) ? 'flex' : 'none';
  });
}

function buscarTema() {
  const termo = document.getElementById('busca-tema').value.toLowerCase();
  document.querySelectorAll('.festa').forEach(function (festa) {
    const titulo = festa.querySelector('.titulo').textContent.toLowerCase();
    festa.style.display = titulo.includes(termo) ? 'flex' : 'none';
  });
}

function alternarVisualizacao() {
  const catalogo = document.getElementById('catalogo-festas');
  if (!catalogo) return;
  const isLista = catalogo.classList.toggle('lista');
  catalogo.classList.toggle('grid', !isLista);
  try { localStorage.setItem('visualizacao', isLista ? 'lista' : 'grid'); } catch (_) {}
}

/* ---------- INICIALIZAÇÃO ---------- */
document.addEventListener('DOMContentLoaded', function () {
  gerarCatalogo();

  // Restaura preferência de visualização
  const catalogo = document.getElementById('catalogo-festas');
  try {
    if (localStorage.getItem('visualizacao') === 'lista' && catalogo) {
      catalogo.classList.replace('grid', 'lista');
    }
  } catch (_) {}

  // Botão alternar visualização
  const btnAlternar = document.querySelector('.controlevisualizacao button');
  if (btnAlternar) btnAlternar.addEventListener('click', alternarVisualizacao);

  // Menu mobile
  const navToggle = document.getElementById('nav-toggle');
  const navMenu   = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  }

  filtrarCategoria('all');
});