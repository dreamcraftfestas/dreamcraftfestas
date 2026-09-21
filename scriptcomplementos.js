/* =========================================================
   DREAMCRAFT - CATÁLOGO DE COMPLEMENTOS
   Arquivo: scriptdecor.js
   ========================================================= */

'use strict';

/* =========================================================
   CONFIGURAÇÃO
   =========================================================

   Para cadastrar um complemento, copie um dos objetos abaixo.

   Estrutura:
   {
     nome: 'Nome do complemento',
     pasta: 'nome-da-pasta',
     categorias: 'all led numero',
     totalImgs: 2,
     descricao: ['Informação 1', 'Informação 2']
   }

   As imagens devem ficar em:
   ./complementos/nome-da-pasta/1.webp
   ./complementos/nome-da-pasta/2.webp
   etc.

   Se suas imagens forem .WEBP em maiúsculo, o script tenta
   automaticamente a extensão maiúscula após a primeira falha.
*/

const bancoDadosComplementos = [

  { nome: 'Número LED Gigante',                pasta: 'numero-led',        categorias: 'all led numero iluminacao',   totalImgs: 1 },
  { nome: 'Painel Acrílico Personalizado',      pasta: 'painel-acrilico',   categorias: 'all acrilico especiais',      totalImgs: 1 },
  { nome: 'Pedestal para Bolo',                 pasta: 'pedestal-bolo',     categorias: 'all pedestais',               totalImgs: 1 },
  { nome: 'Cortina de Luzes',                   pasta: 'cortina-luzes',     categorias: 'all iluminacao led',          totalImgs: 1 },
  { nome: 'Espelho Decorativo Redondo',         pasta: 'espelho-redondo',   categorias: 'all espelhos',                totalImgs: 1 },
  { nome: 'Arranjo de Flores Artificiais',      pasta: 'arranjo-flores',    categorias: 'all flores',                  totalImgs: 1 },
  { nome: 'Topo de Bolo Especial',              pasta: 'topo-especial',     categorias: 'all especiais',               totalImgs: 1 },
  { nome: 'Números Decorativos em MDF',         pasta: 'numeros-mdf',       categorias: 'all numero',                  totalImgs: 1 }

];

/* ---------- DESCRIÇÃO PADRÃO ---------- */
const DESCRICAO_PADRAO_COMPLEMENTO = [
  'Item para composição da decoração',
  'Disponibilidade conforme agenda e montagem'
];
const PASTA_IMAGENS_COMPLEMENTO = './complementos/';
const WHATSAPP_COMPLEMENTO = '5519993723106';

let imagensModalComplemento = [];
let indiceModalComplemento = 0;
let modalAtualComplemento = null;

/* ---------- DESCRIÇÃO ---------- */
function getDescricaoHTMLComplemento(item) {
  const descricao = Array.isArray(item.descricao) ? item.descricao : [];

  if (!descricao.length) {
    return DESCRICAO_PADRAO_COMPLEMENTO.map(function (texto) {
      return '<li>' + escapeHTMLComplemento(texto) + '</li>';
    }).join('');
  }

  return descricao.map(function (texto) {
    return '<li>' + escapeHTMLComplemento(texto) + '</li>';
  }).join('');
}

/* ---------- SEGURANÇA PARA TEXTO INSERIDO NO HTML ---------- */
function escapeHTMLComplemento(texto) {
  return String(texto)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ---------- GERAÇÃO DO CATÁLOGO ---------- */
function gerarCatalogoComplementos() {
  const container = document.getElementById('catalogo-festas');
  if (!container) return;

  container.innerHTML = '';

  if (!bancoDadosComplementos.length) {
    container.innerHTML =
      '<div class="catalogo-vazio">' +
        '<i class="fa-solid fa-gift"></i>' +
        '<h2>Cadastre seus complementos</h2>' +
        '<p>Os itens cadastrados em <strong>scriptdecor.js</strong> aparecerão aqui automaticamente.</p>' +
      '</div>';
    return;
  }

  const fragment = document.createDocumentFragment();
  bancoDadosComplementos.forEach(function (item) {
    fragment.appendChild(criarCardComplemento(item));
  });

  container.appendChild(fragment);
  iniciarCarrosseisComplementos();
}

function criarCardComplemento(item) {
  const nome = item.nome || 'Complemento';
  const pasta = item.pasta || '';
  const categorias = item.categorias || 'all';
  const qtdImagens = Math.max(1, Number(item.totalImgs) || 1);
  const wppNome = encodeURIComponent(nome);

  const card = document.createElement('div');
  card.className = 'complemento complemento-card';
  card.setAttribute('data-categoria', categorias);
  card.setAttribute('data-pasta', pasta);

  let htmlImgs = '';

  for (let i = 1; i <= qtdImagens; i++) {
    const src = PASTA_IMAGENS_COMPLEMENTO + pasta + '/' + i + '.webp';
    const srcMaiusculo = PASTA_IMAGENS_COMPLEMENTO + pasta + '/' + i + '.WEBP';

    htmlImgs +=
      '<img src="' + src + '"' +
      ' loading="lazy"' +
      ' data-indice="' + i + '"' +
      ' data-src-maiusculo="' + srcMaiusculo + '"' +
      ' alt="' + escapeHTMLComplemento(nome) + ' - imagem ' + i + '"' +
      ' onerror="tratarErroImagemComplemento(this)"' +
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
      '<div class="titulo">' + escapeHTMLComplemento(nome) + '</div>' +
      '<ul class="descricao">' + getDescricaoHTMLComplemento(item) + '</ul>' +
      '<a class="whatsapp-btn"' +
        ' href="https://wa.me/' + WHATSAPP_COMPLEMENTO + '?text=Ol%C3%A1%2C+quero+or%C3%A7amento+para+o+' + wppNome + '"' +
        ' target="_blank" rel="noopener">' +
        '<i class="fa-brands fa-whatsapp"></i> Solicitar Orçamento' +
      '</a>' +
    '</div>';

  atualizarContadorComplemento(card);

  card.querySelector('.imagens-carrossel').addEventListener('click', function (event) {
    if (event.target.tagName !== 'IMG') return;

    const imgs = Array.from(card.querySelectorAll('.imagens-carrossel img:not([data-falhou])'));
    const clicada = Math.max(0, imgs.indexOf(event.target));

    if (imgs.length) {
      abrirModalComListaComplemento(imgs.map(function (img) { return img.src; }), clicada);
    }
  });

  return card;
}

function tratarErroImagemComplemento(img) {
  if (!img.dataset.tentouMaiusculo) {
    img.dataset.tentouMaiusculo = '1';
    img.src = img.dataset.srcMaiusculo;
  } else {
    img.dataset.falhou = '1';
    img.style.display = 'none';
    const card = img.closest('.complemento');
    if (card) {
      atualizarContadorComplemento(card);
      atualizarImagemAtivaComplemento(card);
    }
  }
}

function atualizarImagemAtivaComplemento(card) {
  const imagens = Array.from(card.querySelectorAll('.imagens-carrossel img:not([data-falhou])'));
  if (!imagens.length) return;

  if (!imagens.some(function (img) { return img.classList.contains('imagem-ativa'); })) {
    imagens[0].classList.add('imagem-ativa');
  }
}

function atualizarContadorComplemento(card) {
  const contador = card.querySelector('.contador-imagens');
  if (!contador) return;

  const total = card.querySelectorAll('.imagens-carrossel img:not([data-falhou])').length;
  contador.textContent = total > 1 ? '1 / ' + total : '';
  contador.style.display = total > 1 ? 'block' : 'none';
}

/* ---------- SLIDESHOW ---------- */
function iniciarCarrosseisComplementos() {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      iniciarSlideshowComplemento(entry.target);
    });
  }, { rootMargin: '300px 0px' });

  document.querySelectorAll('.complemento').forEach(function (card) {
    observer.observe(card);
  });
}

function iniciarSlideshowComplemento(card) {
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
function abrirModalComListaComplemento(srcs, indiceInicial) {
  if (!srcs.length) return;
  if (modalAtualComplemento) fecharModalComplemento();

  imagensModalComplemento = srcs.slice();
  indiceModalComplemento = indiceInicial || 0;

  modalAtualComplemento = document.createElement('div');
  modalAtualComplemento.className = 'modal-imagem';
  modalAtualComplemento.innerHTML =
    '<div class="modal-overlay"></div>' +
    '<div class="modal-conteudo">' +
      '<button class="modal-fechar" aria-label="Fechar">&times;</button>' +
      '<button class="modal-nav modal-anterior" aria-label="Anterior">&#10094;</button>' +
      '<img src="' + imagensModalComplemento[indiceModalComplemento] + '" class="modal-img" alt="Complemento ampliado">' +
      '<button class="modal-nav modal-proximo" aria-label="Próximo">&#10095;</button>' +
      '<div class="modal-contador">' + (indiceModalComplemento + 1) + ' / ' + imagensModalComplemento.length + '</div>' +
    '</div>';

  document.body.appendChild(modalAtualComplemento);
  document.body.style.overflow = 'hidden';

  modalAtualComplemento.querySelector('.modal-overlay').addEventListener('click', fecharModalComplemento);
  modalAtualComplemento.querySelector('.modal-fechar').addEventListener('click', fecharModalComplemento);
  modalAtualComplemento.querySelector('.modal-anterior').addEventListener('click', imagemAnteriorComplemento);
  modalAtualComplemento.querySelector('.modal-proximo').addEventListener('click', imagemProximaComplemento);

  atualizarBotoesModalComplemento();
}

function fecharModalComplemento() {
  if (!modalAtualComplemento) return;
  modalAtualComplemento.remove();
  modalAtualComplemento = null;
  document.body.style.overflow = '';
}

function imagemProximaComplemento() {
  if (indiceModalComplemento < imagensModalComplemento.length - 1) {
    indiceModalComplemento++;
    atualizarModalComplemento();
  }
}

function imagemAnteriorComplemento() {
  if (indiceModalComplemento > 0) {
    indiceModalComplemento--;
    atualizarModalComplemento();
  }
}

function atualizarModalComplemento() {
  if (!modalAtualComplemento) return;
  modalAtualComplemento.querySelector('.modal-img').src = imagensModalComplemento[indiceModalComplemento];
  modalAtualComplemento.querySelector('.modal-contador').textContent =
    (indiceModalComplemento + 1) + ' / ' + imagensModalComplemento.length;
  atualizarBotoesModalComplemento();
}

function atualizarBotoesModalComplemento() {
  if (!modalAtualComplemento) return;
  modalAtualComplemento.querySelector('.modal-anterior').style.display = indiceModalComplemento === 0 ? 'none' : 'block';
  modalAtualComplemento.querySelector('.modal-proximo').style.display =
    indiceModalComplemento === imagensModalComplemento.length - 1 ? 'none' : 'block';
}

document.addEventListener('keydown', function (event) {
  if (!modalAtualComplemento) return;
  if (event.key === 'Escape') fecharModalComplemento();
  if (event.key === 'ArrowLeft') imagemAnteriorComplemento();
  if (event.key === 'ArrowRight') imagemProximaComplemento();
});

/* ---------- FILTROS ---------- */
function filtrarCategoriaComplemento(categoria) {
  if (!categoria) {
    const select = document.getElementById('select-categoria');
    categoria = select ? select.value : 'all';
  }

  const url = new URL(window.location.href);
  if (categoria && categoria !== 'all') {
    url.searchParams.set('categoria', categoria);
  } else {
    url.searchParams.delete('categoria');
  }
  window.history.replaceState({}, '', url);

  document.querySelectorAll('.filtro').forEach(function (btn) {
    btn.classList.toggle('ativo', btn.getAttribute('data-categoria') === categoria);
  });

  const select = document.getElementById('select-categoria');
  if (select) select.value = categoria;

  const catLower = String(categoria).toLowerCase();
  document.querySelectorAll('.complemento').forEach(function (card) {
    const cats = (card.getAttribute('data-categoria') || '').toLowerCase().split(/\s+/);
    card.style.display = (catLower === 'all' || cats.includes(catLower)) ? 'flex' : 'none';
  });
}

function buscarComplemento() {
  const input = document.getElementById('busca-complemento');
  const termo = input ? input.value.trim().toLowerCase() : '';

  document.querySelectorAll('.complemento').forEach(function (card) {
    const titulo = (card.querySelector('.titulo')?.textContent || '').toLowerCase();
    card.style.display = titulo.includes(termo) ? 'flex' : 'none';
  });
}

/* ---------- VISUALIZAÇÃO ---------- */
function alternarVisualizacaoComplemento() {
  const catalogo = document.getElementById('catalogo-festas');
  if (!catalogo) return;

  const isLista = catalogo.classList.toggle('lista');
  catalogo.classList.toggle('grid', !isLista);

  try {
    localStorage.setItem('visualizacao-complementos', isLista ? 'lista' : 'grid');
  } catch (_) {}
}

/* ---------- INICIALIZAÇÃO ---------- */
document.addEventListener('DOMContentLoaded', function () {
  gerarCatalogoComplementos();

  document.querySelectorAll('.filtro').forEach(function (btn) {
    btn.addEventListener('click', function () {
      filtrarCategoriaComplemento(btn.getAttribute('data-categoria'));
    });
  });

  const select = document.getElementById('select-categoria');
  if (select) {
    select.addEventListener('change', function () {
      filtrarCategoriaComplemento(this.value);
    });
  }

  const busca = document.getElementById('busca-complemento');
  if (busca) busca.addEventListener('input', buscarComplemento);

  const btnAlternar = document.querySelector('.controlevisualizacao button');
  if (btnAlternar) btnAlternar.addEventListener('click', alternarVisualizacaoComplemento);

  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  }

  try {
    const catalogo = document.getElementById('catalogo-festas');
    if (localStorage.getItem('visualizacao-complementos') === 'lista' && catalogo) {
      catalogo.classList.replace('grid', 'lista');
    }
  } catch (_) {}

  const categoriaInicial = new URLSearchParams(window.location.search).get('categoria') || 'all';
  filtrarCategoriaComplemento(categoriaInicial);
});
