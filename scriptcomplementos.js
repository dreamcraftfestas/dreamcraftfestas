/* ============================================================
   CATÁLOGO — COMPLEMENTOS PARA DECORAÇÃO
   DreamCraft Decorações

   Estrutura das imagens:
   ./complementos/nome-da-pasta/1.webp
   ./complementos/nome-da-pasta/2.webp
   

   Para cadastrar um item, adicione um objeto em
   bancoDadosComplementos.
   ============================================================ */

const bancoDadosComplementos = [
    
    {
        nome: 'Número LED de Mesa',                         pasta: 'numeroledmesa',                       categorias: 'all led numero', totalImgs: 10,
        descricao: [
            'Número iluminado para mesa',
            'Ideal para aniversários e comemorações'
        ]
    },
    
    {
        nome: 'Número LED de Chão',                         pasta: 'numeroledchao',                       categorias: 'all led numero', totalImgs: 10,
        descricao: [
            'Número LED de chão',
            'Ideal para aniversários e comemorações'
        ]
    },

    /*{
        nome: 'Cubo Sextavado Acrílico',                    pasta: 'cubo-sextavado-acrilico',               categorias: 'all acrilico', totalImgs: 2,
        descricao: [
            'Peça acrílica para composição da decoração',
            'Consulte medidas e disponibilidade'
        ]
    },*/

    {
        nome: 'Arvore Algodão',                         pasta: 'arvorealgodao',                       categorias: 'all arvore', totalImgs: 1,
        descricao: [
            'Arvore Algodão',
            'Ideal para aniversários e comemorações'
        ]
    },
    
    {
        nome: 'Arvore Gota',                         pasta: 'arvoregota',                       categorias: 'all arvore', totalImgs: 1,
        descricao: [
            'Arvore Gota',
            'Ideal para aniversários e comemorações'
        ]
    },

    {
        nome: 'Bandeja Espelhada',                         pasta: 'bandejaespelhada',                       categorias: 'all bandeja', totalImgs: 1,
        descricao: [
            'Bandeja Espelhada',
            'Ideal para aniversários e comemorações'
        ]
    },

    {
        nome: 'Bandeja Redonda de Ferro',                         pasta: 'bandejaredondaferro',                       categorias: 'all bandeja', totalImgs: 1,
        descricao: [
            'Bandeja Redonda de Ferro',
            'Ideal para aniversários e comemorações'
        ]
    },

    {
        nome: 'Display Carro',                         pasta: 'displaycarro',                       categorias: 'all display carros meninos', totalImgs: 1,
        descricao: [
            'Display Carro',
            'Ideal para aniversários e comemorações'
        ]
    },

    {
        nome: 'Display Princesas',                         pasta: 'displayprincesa',                       categorias: 'all display princesas meninas', totalImgs: 1,
        descricao: [
            'Display Princesas',
            'Ideal para agregar valor a sua decoração'
        ]
    },

    {
        nome: 'Display Placas de Transito',                         pasta: 'displaytransito',                       categorias: 'all display placas transito', totalImgs: 1,
        descricao: [
            'Display Placas de Transito',
            'Ideal para agregar valor a sua decoração'
        ]
    },

    {
        nome: 'Trio Mesa Bailarina',                         pasta: 'mesabailarina',                       categorias: 'all mesas', totalImgs: 1,
        descricao: [
            'Trio Mesa Bailarina',
            'Ideal para agregar valor a sua decoração'
        ]
    },

    {
        nome: 'Painel Janela',                         pasta: 'paineljanela',                       categorias: 'all painel janela', totalImgs: 1,
        descricao: [
            'Painel Janela',
            'Ideal para agregar valor a sua decoração'
        ]
    },

    {
        nome: 'Placa MDF Bodas de Ouro',                         pasta: 'placabodasdeouro',                       categorias: 'all bandeja', totalImgs: 1,
        descricao: [
            'Placa MDF Bodas de Ouro',
            'Ideal para agregar valor a sua decoração'
        ]
    },

    {
        nome: 'Vaso Aramado',                         pasta: 'vasoaramado',                       categorias: 'all bandeja', totalImgs: 1,
        descricao: [
            'Vaso Aramado',
            'Ideal para agregar valor a sua decoração'
        ]
    },

    {
        nome: 'Cubo Baby',                         pasta: 'cubobaby',                       categorias: 'all cubo baby', totalImgs: 4,
        descricao: [
            'Cubo Baby',
            'Ideal para agregar valor a sua decoração'
        ]
    },

    {
        nome: 'Algas em MDF',                         pasta: 'algas',                       categorias: 'all fundodomar mar', totalImgs: 4,
        descricao: [
            'Algas em MDF',
            'Ideal para agregar valor a sua decoração'
        ]
    },

];

const PASTA_IMAGENS = './complementos/';
const WHATSAPP = '5519993723106';
const INTERVALO_SLIDESHOW = 3000;

let itensFiltrados = [...bancoDadosComplementos];
let indiceModal = 0;
let indiceImagemModal = 0;
let slideshowTimers = [];

/* ---------- SEGURANÇA PARA TEXTO ---------- */
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
  const container = document.getElementById('catalogo-complementos');
  if (!container) return;

  container.innerHTML = '';

  if (!bancoDadosComplementos.length) {
    container.innerHTML =
      '<div class="catalogo-vazio">' +
        '<i class="fa-solid fa-box-open"></i>' +
        '<h2>Cadastre seus complementos</h2>' +
        '<p>Os itens cadastrados em <strong>scriptcomplementos.js</strong> aparecerão aqui automaticamente.</p>' +
      '</div>';
    return;
  }

  const fragment = document.createDocumentFragment();
  bancoDadosComplementos.forEach(function (item) {
    fragment.appendChild(criarCard(item));
  });

  container.appendChild(fragment);
  iniciarCarrosseis();
}

function criarCard(item) {
  const nome = item.nome || 'Complemento';
  const pasta = item.pasta || '';
  const categorias = item.categorias || 'all';
  const qtdImagens = Math.max(1, Number(item.totalImgs) || 1);
  const wppNome = encodeURIComponent(nome);

  const card = document.createElement('div');
  card.className = 'festa complemento-card';
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
      '<ul class="descricao">' + getDescricaoHTML(item) + '</ul>' +
      '<a class="whatsapp-btn"' +
        ' href="https://wa.me/' + WHATSAPP + '?text=Ol%C3%A1%2C+quero+or%C3%A7amento+para+o+complemento+' + wppNome + '"' +
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
      '<img src="' + imagensModal[indiceModal] + '" class="modal-img" alt="Complemento ampliado">' +
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
  if (!categoria) categoria = document.getElementById('filtro')?.value || document.getElementById('select-categoria')?.value;

  const url = new URL(window.location.href);
  if (categoria && categoria !== 'all') {
    url.searchParams.set('categoria', categoria);
  } else {
    url.searchParams.delete('categoria');
  }
  window.history.replaceState({}, '', url);

  document.querySelectorAll('.filtro-btn, .filtro').forEach(function (btn) {
    const onclick = btn.getAttribute('onclick') || '';
    const catAttr = btn.getAttribute('data-categoria') || '';
    btn.classList.toggle('active', onclick.indexOf("'" + categoria + "'") !== -1 || catAttr === categoria);
  });

  const select = document.getElementById('filtro') || document.getElementById('select-categoria');
  if (select) select.value = categoria;

  const catLower = String(categoria).toLowerCase();
  document.querySelectorAll('.festa').forEach(function (card) {
    const cats = (card.getAttribute('data-categoria') || '').toLowerCase().split(/\s+/);
    card.style.display = (catLower === 'all' || cats.includes(catLower)) ? 'flex' : 'none';
  });
}

function buscarComplemento() {
  const input = document.getElementById('busca-tema') || document.getElementById('busca-complemento');
  if (!input) return;

  const termo = input.value.trim().toLowerCase();

  document.querySelectorAll('.festa').forEach(function (card) {
    const titulo = (card.querySelector('.titulo')?.textContent || '').toLowerCase();
    card.style.display = titulo.includes(termo) ? 'flex' : 'none';
  });
}

/* ---------- VISUALIZAÇÃO ---------- */
function alternarVisualizacao() {
  const catalogo = document.getElementById('catalogo-complementos');
  if (!catalogo) return;

  const isLista = catalogo.classList.toggle('lista');
  catalogo.classList.toggle('grid', !isLista);

  try {
    localStorage.setItem('visualizacao-complementos', isLista ? 'lista' : 'grid');
  } catch (_) {}
}

/* ---------- INICIALIZAÇÃO ---------- */
document.addEventListener('DOMContentLoaded', function () {
  gerarCatalogo();

  const select = document.getElementById('filtro') || document.getElementById('select-categoria');
  if (select) {
    select.addEventListener('change', function () {
      filtrarCategoria(this.value);
    });
  }

  const busca = document.getElementById('busca-tema') || document.getElementById('busca-complemento');
  if (busca) busca.addEventListener('input', buscarComplemento);

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
    const catalogo = document.getElementById('catalogo-complementos');
    if (localStorage.getItem('visualizacao-complementos') === 'lista' && catalogo) {
      catalogo.classList.replace('grid', 'lista');
    }
  } catch (_) {}

  const categoriaInicial = new URLSearchParams(window.location.search).get('categoria') || 'all';
  filtrarCategoria(categoriaInicial);
});