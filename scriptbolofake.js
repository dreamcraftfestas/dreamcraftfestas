/* =========================================================
   DREAMCRAFT - CATÁLOGO DE BOLOS FAKE
   Arquivo: scriptbolofake.js
   ========================================================= */

'use strict';

/* =========================================================
   CONFIGURAÇÃO
   =========================================================

   Para cadastrar um bolo, copie um dos objetos abaixo.

   Estrutura:
   {
     nome: 'Nome do bolo',
     pasta: 'nome-da-pasta',
     categorias: 'all tematicos 2andares',
     totalImgs: 3,
     descricao: ['Informação 1', 'Informação 2']
   }

   As imagens devem ficar em:
   ./boloFake/nome-da-pasta/1.webp
   ./boloFake/nome-da-pasta/2.webp
   etc.

   Se suas imagens forem .WEBP em maiúsculo, o script tenta
   automaticamente a extensão maiúscula após a primeira falha.
*/

const bancoDadosBolosFake = [
   
  { nome: 'Bolo Fake Black Clover',                                 pasta: 'blackclover',                           categorias: 'all anime blackclover meninos homem',totalImgs: 1},
  { nome: 'Bolo Fake Festa Junina',                                 pasta: 'festajunina',                           categorias: 'all festajunina arraia',totalImgs: 1},
  { nome: 'Bolo Fake Laço Rosa',                                    pasta: 'lacorosa',                              categorias: 'all meninas rosa laco',totalImgs: 1},
  { nome: 'Bolo Fake Pool Party',                                   pasta: 'poolparty',                             categorias: 'all poolparty piscina',totalImgs: 1},
  { nome: 'Bolo Fake Pantera Negra',                                pasta: 'panteranegra',                          categorias: 'all panteranegra herois filme',totalImgs: 1},
  { nome: 'Bolo Fake Borboleta Lilas',                              pasta: 'borboletlilas',                         categorias: 'all borboleta lilas',totalImgs: 1},
  { nome: 'Bolo Fake Castelo Princesas',                            pasta: 'princesas',                             categorias: 'all castelo princesas meninas',totalImgs: 3},
  { nome: 'Bolo Fake Rei Leão',                                     pasta: 'reileao',                               categorias: 'all reileao desenho',totalImgs: 1},
  { nome: 'Bolo Fake Poderoso Chefinho',                            pasta: 'poderosochefinho',                      categorias: 'all poderosochefinho meninos filme',totalImgs: 1},
  { nome: 'Bolo Fake Princesa Tiana',                               pasta: 'princesatiana',                         categorias: 'all princesas meninas tiana',totalImgs: 2},
  { nome: 'Bolo Fake Skate',                                        pasta: 'skate',                                 categorias: 'all skate esportes',totalImgs: 1},
  { nome: 'Bolo Fake Neon',                                         pasta: 'neon',                                  categorias: 'all neon meninas',totalImgs: 1},
  { nome: 'Bolo Fake Fundo do Mar',                                 pasta: 'fundodomar',                            categorias: 'all fundodomar mar',totalImgs: 1},
  { nome: 'Bolo Fake Girasol',                                      pasta: 'girasol',                               categorias: 'all girasol meninas',totalImgs: 1},
  { nome: 'Bolo Fake Fazendinha',                                   pasta: 'fazendinha',                            categorias: 'all fazendinha ',totalImgs: 1},
  { nome: 'Bolo Fake Transito',                                     pasta: 'transito',                              categorias: 'all transito meninos',totalImgs: 1},
  { nome: 'Bolo Fake Personalizado',                                pasta: 'personalizado',                         categorias: 'all personalizado tematico empresas',totalImgs: 1},
  { nome: 'Bolo Fake Rufado',                                       pasta: 'rufado',                                categorias: 'all rufado cores',totalImgs: 7}





];
/* ---------- DESCRIÇÃO PADRÃO ---------- */
const DESCRICAO_PADRAO = [
  'Bolo cenográfico para composição da decoração',
    'Disponibilidade conforme agenda e montagem'
];
const PASTA_IMAGENS = './bolofake/';
const WHATSAPP = '5519993723106';

let imagensModal = [];
let indiceModal = 0;
let modalAtual = null;

/* ---------- DESCRIÇÃO ---------- */
function getDescricaoHTML(bolo) {
  const descricao = Array.isArray(bolo.descricao) ? bolo.descricao : [];

  if (!descricao.length) {
    return '<li>Bolo cenográfico para complementar a decoração</li>' +
           '<li>Consulte disponibilidade</li>';
  }

  return descricao.map(function (item) {
    return '<li>' + escapeHTML(item) + '</li>';
  }).join('');
}

/* ---------- SEGURANÇA PARA TEXTO INSERIDO NO HTML ---------- */
function escapeHTML(texto) {
  return String(texto)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ---------- GERAÇÃO DO CATÁLOGO ---------- */
function gerarCatalogo() {
  const container = document.getElementById('catalogo-bolos');
  if (!container) return;

  container.innerHTML = '';

  if (!bancoDadosBolosFake.length) {
    container.innerHTML =
      '<div class="catalogo-vazio">' +
        '<i class="fa-solid fa-cake-candles"></i>' +
        '<h2>Cadastre seus bolos fake</h2>' +
        '<p>Os bolos cadastrados em <strong>scriptbolofake.js</strong> aparecerão aqui automaticamente.</p>' +
      '</div>';
    return;
  }

  const fragment = document.createDocumentFragment();
  bancoDadosBolosFake.forEach(function (bolo) {
    fragment.appendChild(criarCard(bolo));
  });

  container.appendChild(fragment);
  iniciarCarrosseis();
}

function criarCard(bolo) {
  const nome = bolo.nome || 'Bolo Fake';
  const pasta = bolo.pasta || '';
  const categorias = bolo.categorias || 'all';
  const qtdImagens = Math.max(1, Number(bolo.totalImgs) || 1);
  const wppNome = encodeURIComponent(nome);

  const card = document.createElement('div');
  card.className = 'festa bolo-fake-card';
  card.setAttribute('data-categoria', categorias);
  card.setAttribute('data-pasta', pasta);

  let htmlImgs = '';

  for (let i = 1; i <= qtdImagens; i++) {
    const src = PASTA_IMAGENS + pasta + '/' + i + '.webp';
    const srcMaiusculo = PASTA_IMAGENS + pasta + '/' + i + '.WEBP';

    htmlImgs +=
      '<img src="' + src + '"' +
      ' loading="lazy"' +
      ' data-indice="' + i + '"' +
      ' data-src-maiusculo="' + srcMaiusculo + '"' +
      ' alt="' + escapeHTML(nome) + ' - imagem ' + i + '"' +
      ' onerror="tratarErroImagem(this)"' +
      (i === 1 ? ' class="imagem-ativa"' : '') +
      '>';
  }

  card.innerHTML =
    '<div class="carrossel">' +
      '<div class="imagens-carrossel">' + htmlImgs + '</div>' +
      '<div class="zoom-hint">🔍 Clique para ampliar</div>' +
      '<div class="contador-imagens"></div>' +
    '</div>' +
    '<div class="conteudo">' +
      '<div class="titulo">' + escapeHTML(nome) + '</div>' +
      '<ul class="descricao">' + getDescricaoHTML(bolo) + '</ul>' +
      '<a class="whatsapp-btn"' +
        ' href="https://wa.me/' + WHATSAPP + '?text=Ol%C3%A1%2C+quero+or%C3%A7amento+para+o+' + wppNome + '"' +
        ' target="_blank" rel="noopener">' +
        '<i class="fa-brands fa-whatsapp"></i> Solicitar Orçamento' +
      '</a>' +
    '</div>';

  atualizarContador(card);

  card.querySelector('.imagens-carrossel').addEventListener('click', function (event) {
    if (event.target.tagName !== 'IMG') return;

    const imgs = Array.from(card.querySelectorAll('.imagens-carrossel img:not([data-falhou])'));
    const clicada = Math.max(0, imgs.indexOf(event.target));

    if (imgs.length) {
      abrirModalComLista(imgs.map(function (img) { return img.src; }), clicada);
    }
  });

  return card;
}

function tratarErroImagem(img) {
  if (!img.dataset.tentouMaiusculo) {
    img.dataset.tentouMaiusculo = '1';
    img.src = img.dataset.srcMaiusculo;
  } else {
    img.dataset.falhou = '1';
    img.style.display = 'none';
    const card = img.closest('.festa');
    if (card) {
      atualizarContador(card);
      atualizarImagemAtiva(card);
    }
  }
}

function atualizarImagemAtiva(card) {
  const imagens = Array.from(card.querySelectorAll('.imagens-carrossel img:not([data-falhou])'));
  if (!imagens.length) return;

  if (!imagens.some(function (img) { return img.classList.contains('imagem-ativa'); })) {
    imagens[0].classList.add('imagem-ativa');
  }
}

function atualizarContador(card) {
  const contador = card.querySelector('.contador-imagens');
  if (!contador) return;

  const total = card.querySelectorAll('.imagens-carrossel img:not([data-falhou])').length;
  contador.textContent = total > 1 ? '1 / ' + total : '';
  contador.style.display = total > 1 ? 'block' : 'none';
}

/* ---------- SLIDESHOW ---------- */
function iniciarCarrosseis() {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      iniciarSlideshow(entry.target);
    });
  }, { rootMargin: '300px 0px' });

  document.querySelectorAll('.festa').forEach(function (card) {
    observer.observe(card);
  });
}

function iniciarSlideshow(card) {
  setTimeout(function () {
    const container = card.querySelector('.imagens-carrossel');
    if (!container) return;

    const validas = Array.from(container.querySelectorAll('img:not([data-falhou])'));
    if (validas.length <= 1) return;

    let atual = 0;

    validas.forEach(function (img, index) {
      img.classList.toggle('imagem-ativa', index === 0);
    });

    setInterval(function () {
      if (!document.body.contains(card)) return;

      validas[atual].classList.remove('imagem-ativa');
      atual = (atual + 1) % validas.length;
      validas[atual].classList.add('imagem-ativa');

      const contador = card.querySelector('.contador-imagens');
      if (contador) contador.textContent = (atual + 1) + ' / ' + validas.length;
    }, 3000);
  }, 800);
}

/* ---------- MODAL / LIGHTBOX ---------- */
function abrirModalComLista(srcs, indiceInicial) {
  if (!srcs.length) return;
  if (modalAtual) fecharModal();

  imagensModal = srcs.slice();
  indiceModal = indiceInicial || 0;

  modalAtual = document.createElement('div');
  modalAtual.className = 'modal-imagem';
  modalAtual.innerHTML =
    '<div class="modal-overlay"></div>' +
    '<div class="modal-conteudo">' +
      '<button class="modal-fechar" aria-label="Fechar">&times;</button>' +
      '<button class="modal-nav modal-anterior" aria-label="Anterior">&#10094;</button>' +
      '<img src="' + imagensModal[indiceModal] + '" class="modal-img" alt="Bolo fake ampliado">' +
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
  if (indiceModal < imagensModal.length - 1) {
    indiceModal++;
    atualizarModal();
  }
}

function imagemAnterior() {
  if (indiceModal > 0) {
    indiceModal--;
    atualizarModal();
  }
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
  modalAtual.querySelector('.modal-anterior').style.display = indiceModal === 0 ? 'none' : 'block';
  modalAtual.querySelector('.modal-proximo').style.display =
    indiceModal === imagensModal.length - 1 ? 'none' : 'block';
}

document.addEventListener('keydown', function (event) {
  if (!modalAtual) return;
  if (event.key === 'Escape') fecharModal();
  if (event.key === 'ArrowLeft') imagemAnterior();
  if (event.key === 'ArrowRight') imagemProxima();
});

/* ---------- FILTROS ---------- */
function filtrarCategoria(categoria) {
  if (!categoria) categoria = document.getElementById('filtro').value;

  const url = new URL(window.location.href);
  if (categoria && categoria !== 'all') {
    url.searchParams.set('categoria', categoria);
  } else {
    url.searchParams.delete('categoria');
  }
  window.history.replaceState({}, '', url);

  document.querySelectorAll('.filtro-btn').forEach(function (btn) {
    const onclick = btn.getAttribute('onclick') || '';
    btn.classList.toggle('active', onclick.indexOf("'" + categoria + "'") !== -1);
  });

  const select = document.getElementById('filtro');
  if (select) select.value = categoria;

  const catLower = String(categoria).toLowerCase();
  document.querySelectorAll('.festa').forEach(function (card) {
    const cats = (card.getAttribute('data-categoria') || '').toLowerCase().split(/\s+/);
    card.style.display = (catLower === 'all' || cats.includes(catLower)) ? 'flex' : 'none';
  });
}

function buscarBolo() {
  const termo = document.getElementById('busca-tema').value.trim().toLowerCase();

  document.querySelectorAll('.festa').forEach(function (card) {
    const titulo = (card.querySelector('.titulo')?.textContent || '').toLowerCase();
    card.style.display = titulo.includes(termo) ? 'flex' : 'none';
  });
}

/* ---------- VISUALIZAÇÃO ---------- */
function alternarVisualizacao() {
  const catalogo = document.getElementById('catalogo-bolos');
  if (!catalogo) return;

  const isLista = catalogo.classList.toggle('lista');
  catalogo.classList.toggle('grid', !isLista);

  try {
    localStorage.setItem('visualizacao-bolofake', isLista ? 'lista' : 'grid');
  } catch (_) {}
}

/* ---------- INICIALIZAÇÃO ---------- */
document.addEventListener('DOMContentLoaded', function () {
  gerarCatalogo();

  const select = document.getElementById('filtro');
  if (select) {
    select.addEventListener('change', function () {
      filtrarCategoria(this.value);
    });
  }

  const busca = document.getElementById('busca-tema');
  if (busca) busca.addEventListener('input', buscarBolo);

  const btnAlternar = document.getElementById('btn-alternar');
  if (btnAlternar) btnAlternar.addEventListener('click', alternarVisualizacao);

  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  }

  try {
    const catalogo = document.getElementById('catalogo-bolos');
    if (localStorage.getItem('visualizacao-bolofake') === 'lista' && catalogo) {
      catalogo.classList.replace('grid', 'lista');
    }
  } catch (_) {}

  const categoriaInicial = new URLSearchParams(window.location.search).get('categoria') || 'all';
  filtrarCategoria(categoriaInicial);
});
