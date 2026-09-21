/* =========================================================
   DREAMCRAFT - CATÁLOGO DE COMPLEMENTOS
   Visual e comportamento baseados no catálogo de Bolos Fake
   ========================================================= */

'use strict';

/*
   IMAGENS:
   ./complementos/nome-da-pasta/1.webp
   ./complementos/nome-da-pasta/2.webp
   etc.

   Se a extensão estiver em maiúsculo (.WEBP), o script tenta
   automaticamente a versão maiúscula.
*/

const bancoDadosComplementos = [
  {
    nome: 'Número LED de Mesa',
    pasta: 'numeroledmesa',
    categorias: 'all led numero',
    totalImgs: 10,
    descricao: [
      'Número iluminado para composição da mesa',
      'Ideal para aniversários e comemorações'
    ]
  },
  {
    nome: 'Número LED de Chão',
    pasta: 'numeroledchao',
    categorias: 'all led numero',
    totalImgs: 10,
    descricao: [
      'Número iluminado de chão',
      'Ideal para destacar a idade do aniversariante'
    ]
  },
  {
    nome: 'Árvore de Algodão',
    pasta: 'arvorealgodao',
    categorias: 'all flores iluminacao',
    totalImgs: 1,
    descricao: [
      'Elemento decorativo para composição do cenário',
      'Consulte disponibilidade'
    ]
  },
  {
    nome: 'Árvore Gota',
    pasta: 'arvoregota',
    categorias: 'all flores iluminacao',
    totalImgs: 1,
    descricao: [
      'Elemento decorativo para composição da mesa',
      'Consulte disponibilidade'
    ]
  },
  {
    nome: 'Bandeja Espelhada',
    pasta: 'bandejaespelhada',
    categorias: 'all espelhos especiais',
    totalImgs: 1,
    descricao: [
      'Bandeja espelhada para composição decorativa',
      'Ideal para doces e pequenos elementos'
    ]
  },
  {
    nome: 'Bandeja Redonda de Ferro',
    pasta: 'bandejaredondaferro',
    categorias: 'all especiais',
    totalImgs: 1,
    descricao: [
      'Bandeja para composição da decoração',
      'Consulte disponibilidade'
    ]
  },
  {
    nome: 'Display Carro',
    pasta: 'displaycarro',
    categorias: 'all especiais',
    totalImgs: 1,
    descricao: [
      'Display decorativo temático',
      'Consulte disponibilidade'
    ]
  },
  {
    nome: 'Display Princesa',
    pasta: 'displayprincesa',
    categorias: 'all especiais',
    totalImgs: 1,
    descricao: [
      'Display decorativo para temas de princesa',
      'Consulte disponibilidade'
    ]
  },
  {
    nome: 'Display Trânsito',
    pasta: 'displaytransito',
    categorias: 'all especiais',
    totalImgs: 1,
    descricao: [
      'Display decorativo para tema trânsito',
      'Consulte disponibilidade'
    ]
  },
  {
    nome: 'Mesa Bailarina',
    pasta: 'mesabailarina',
    categorias: 'all pedestais especiais',
    totalImgs: 1,
    descricao: [
      'Mesa decorativa para composição do cenário',
      'Consulte disponibilidade'
    ]
  },
  {
    nome: 'Painel Janela',
    pasta: 'paineljanela',
    categorias: 'all especiais',
    totalImgs: 1,
    descricao: [
      'Painel decorativo para composição do fundo',
      'Consulte disponibilidade'
    ]
  },
  {
    nome: 'Placa Bodas de Ouro',
    pasta: 'placabodasdeouro',
    categorias: 'all especiais',
    totalImgs: 1,
    descricao: [
      'Placa decorativa para celebrações',
      'Ideal para Bodas de Ouro'
    ]
  },
  {
    nome: 'Vaso Aramado',
    pasta: 'vasoaramado',
    categorias: 'all especiais flores',
    totalImgs: 1,
    descricao: [
      'Vaso decorativo para composição',
      'Consulte disponibilidade'
    ]
  },
  {
    nome: 'Cubo Baby',
    pasta: 'cubobaby',
    categorias: 'all pedestais especiais',
    totalImgs: 1,
    descricao: [
      'Cubo decorativo para composição da mesa',
      'Ideal para temas infantis'
    ]
  },
  {
    nome: 'Algas',
    pasta: 'algas',
    categorias: 'all especiais',
    totalImgs: 1,
    descricao: [
      'Elemento decorativo para temas aquáticos',
      'Consulte disponibilidade'
    ]
  }
];

const PASTA_IMAGENS = './complementos/';
const WHATSAPP = '5519993723106';
const INTERVALO_SLIDESHOW = 3000;

let imagensModal = [];
let indiceModal = 0;
let modalAtual = null;
let timersSlideshow = [];

/* ---------- SEGURANÇA ---------- */

function escapeHTML(texto) {
  return String(texto)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function normalizarTexto(texto) {
  return String(texto || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function getDescricaoHTML(item) {
  const descricao = Array.isArray(item.descricao) ? item.descricao : [];

  if (!descricao.length) {
    return '<li>Complemento para composição da decoração</li>' +
           '<li>Consulte disponibilidade</li>';
  }

  return descricao.map(function (texto) {
    return '<li>' + escapeHTML(texto) + '</li>';
  }).join('');
}

/* ---------- GERAÇÃO ---------- */

function gerarCatalogo() {
  const container = document.getElementById('catalogo-festas');
  if (!container) return;

  container.innerHTML = '';

  if (!bancoDadosComplementos.length) {
    container.innerHTML =
      '<div class="catalogo-vazio">' +
        '<i class="fa-solid fa-puzzle-piece"></i>' +
        '<h2>Nenhum complemento cadastrado</h2>' +
        '<p>Cadastre os complementos no arquivo <strong>scriptcomplementos.js</strong>.</p>' +
      '</div>';
    return;
  }

  const fragment = document.createDocumentFragment();

  bancoDadosComplementos.forEach(function (item) {
    fragment.appendChild(criarCard(item));
  });

  container.appendChild(fragment);

  iniciarCarrosseis();
  aplicarFiltros();
}

function criarCard(item) {
  const nome = item.nome || 'Complemento';
  const pasta = item.pasta || '';
  const categorias = item.categorias || 'all';
  const qtdImagens = Math.max(1, Number(item.totalImgs) || 1);
  const wppNome = encodeURIComponent(nome);

  const card = document.createElement('div');

  /* Mantém a mesma estrutura visual do Bolo Fake */
  card.className = 'festa bolo-fake-card';
  card.dataset.categoria = categorias;
  card.dataset.pasta = pasta;

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
      ' onerror="tratarErroImagemComplemento(this)"' +
      (i === 1 ? ' class="imagem-ativa"' : '') +
      '>';
  }

  card.innerHTML =
    '<div class="carrossel">' +
      '<div class="imagens-carrossel">' +
        htmlImgs +
      '</div>' +
      '<div class="zoom-hint">🔍 Clique para ampliar</div>' +
      '<div class="contador-imagens"></div>' +
    '</div>' +
    '<div class="conteudo">' +
      '<div class="titulo">' + escapeHTML(nome) + '</div>' +
      '<ul class="descricao">' + getDescricaoHTML(item) + '</ul>' +
      '<a class="whatsapp-btn"' +
        ' href="https://wa.me/' + WHATSAPP +
        '?text=' + encodeURIComponent('Olá, quero orçamento para o ' + nome) + '"' +
        ' target="_blank" rel="noopener">' +
        '<i class="fa-brands fa-whatsapp"></i> Solicitar Orçamento' +
      '</a>' +
    '</div>';

  atualizarContador(card);

  const imagens = card.querySelector('.imagens-carrossel');

  imagens.addEventListener('click', function (event) {
    if (event.target.tagName !== 'IMG') return;

    const imgsValidas = Array.from(
      card.querySelectorAll('.imagens-carrossel img:not([data-falhou])')
    );

    const indice = Math.max(0, imgsValidas.indexOf(event.target));

    if (imgsValidas.length) {
      abrirModalComLista(
        imgsValidas.map(function (img) {
          return img.src;
        }),
        indice,
        nome
      );
    }
  });

  return card;
}

/* ---------- IMAGENS ---------- */

function tratarErroImagemComplemento(img) {
  if (!img.dataset.tentouMaiusculo) {
    img.dataset.tentouMaiusculo = '1';
    img.src = img.dataset.srcMaiusculo;
    return;
  }

  img.dataset.falhou = '1';
  img.style.display = 'none';

  const card = img.closest('.festa');
  if (card) {
    atualizarContador(card);
    atualizarImagemAtiva(card);
  }
}

function atualizarImagemAtiva(card) {
  const imagens = Array.from(
    card.querySelectorAll('.imagens-carrossel img:not([data-falhou])')
  );

  if (!imagens.length) return;

  if (!imagens.some(function (img) {
    return img.classList.contains('imagem-ativa');
  })) {
    imagens[0].classList.add('imagem-ativa');
  }
}

function atualizarContador(card) {
  const contador = card.querySelector('.contador-imagens');
  if (!contador) return;

  const total = card.querySelectorAll(
    '.imagens-carrossel img:not([data-falhou])'
  ).length;

  contador.textContent = total > 1 ? '1 / ' + total : '';
  contador.style.display = total > 1 ? 'block' : 'none';
}

/* ---------- SLIDESHOW ---------- */

function iniciarCarrosseis() {
  document.querySelectorAll('#catalogo-festas .festa').forEach(function (card) {
    iniciarSlideshow(card);
  });
}

function iniciarSlideshow(card) {
  setTimeout(function () {
    if (!document.body.contains(card)) return;

    const container = card.querySelector('.imagens-carrossel');
    if (!container) return;

    const imagens = Array.from(
      container.querySelectorAll('img:not([data-falhou])')
    );

    if (imagens.length <= 1) return;

    let atual = 0;

    imagens.forEach(function (img, index) {
      img.classList.toggle('imagem-ativa', index === 0);
    });

    const timer = setInterval(function () {
      if (!document.body.contains(card)) {
        clearInterval(timer);
        return;
      }

      const validas = Array.from(
        container.querySelectorAll('img:not([data-falhou])')
      );

      if (validas.length <= 1) {
        clearInterval(timer);
        return;
      }

      validas[atual % validas.length].classList.remove('imagem-ativa');
      atual = (atual + 1) % validas.length;
      validas[atual].classList.add('imagem-ativa');

      const contador = card.querySelector('.contador-imagens');
      if (contador) {
        contador.textContent = (atual + 1) + ' / ' + validas.length;
      }
    }, INTERVALO_SLIDESHOW);

    timersSlideshow.push(timer);
  }, 800);
}

/* ---------- FILTROS + BUSCA ---------- */

function obterCategoriaSelecionada() {
  const select = document.getElementById('select-categoria');
  return select ? select.value : 'all';
}

function aplicarFiltros() {
  const categoria = normalizarTexto(obterCategoriaSelecionada());
  const buscaEl = document.getElementById('busca-complemento');
  const termo = normalizarTexto(buscaEl ? buscaEl.value : '');

  const cards = document.querySelectorAll('#catalogo-festas .festa');
  let encontrados = 0;

  cards.forEach(function (card) {
    const categorias = normalizarTexto(
      card.getAttribute('data-categoria') || ''
    ).split(/\s+/);

    const titulo = normalizarTexto(
      card.querySelector('.titulo')?.textContent || ''
    );

    const descricao = normalizarTexto(
      card.querySelector('.descricao')?.textContent || ''
    );

    const passaCategoria =
      categoria === 'all' ||
      categorias.includes(categoria);

    const passaBusca =
      !termo ||
      titulo.includes(termo) ||
      descricao.includes(termo) ||
      categorias.some(function (cat) {
        return cat.includes(termo);
      });

    const mostrar = passaCategoria && passaBusca;

    card.style.display = mostrar ? 'flex' : 'none';

    if (mostrar) encontrados++;
  });

  let vazio = document.getElementById('catalogo-filtro-vazio');

  if (!encontrados && cards.length) {
    if (!vazio) {
      vazio = document.createElement('div');
      vazio.id = 'catalogo-filtro-vazio';
      vazio.className = 'catalogo-vazio-filtro';
      vazio.innerHTML =
        '<i class="fa-solid fa-magnifying-glass"></i>' +
        '<h2>Nenhum complemento encontrado</h2>' +
        '<p>Tente outra categoria ou outro termo de busca.</p>';

      document.getElementById('catalogo-festas').appendChild(vazio);
    }

    vazio.style.display = 'block';
  } else if (vazio) {
    vazio.style.display = 'none';
  }

  atualizarBotoesCategoria(categoria);
}

function atualizarBotoesCategoria(categoria) {
  document.querySelectorAll('.filtro').forEach(function (btn) {
    const btnCategoria = normalizarTexto(
      btn.getAttribute('data-categoria') || 'all'
    );

    btn.classList.toggle(
      'ativo',
      btnCategoria === categoria
    );
  });
}

function selecionarCategoria(categoria) {
  const select = document.getElementById('select-categoria');

  if (select) {
    select.value = categoria;
  }

  aplicarFiltros();

  const url = new URL(window.location.href);

  if (categoria && categoria !== 'all') {
    url.searchParams.set('categoria', categoria);
  } else {
    url.searchParams.delete('categoria');
  }

  window.history.replaceState({}, '', url);
}

/* ---------- VISUALIZAÇÃO ---------- */

function alternarVisualizacao() {
  const catalogo = document.getElementById('catalogo-festas');
  if (!catalogo) return;

  const isLista = catalogo.classList.toggle('lista');
  catalogo.classList.toggle('grid', !isLista);

  try {
    localStorage.setItem(
      'visualizacao-complementos',
      isLista ? 'lista' : 'grid'
    );
  } catch (_) {}

  const botao = document.querySelector('.controlevisualizacao button');

  if (botao) {
    botao.textContent = isLista
      ? 'Alternar para Grade'
      : 'Alternar para Lista';
  }
}

/* ---------- MODAL ---------- */

function abrirModalComLista(srcs, indiceInicial, nome) {
  if (!srcs.length) return;

  if (modalAtual) {
    fecharModal();
  }

  imagensModal = srcs.slice();
  indiceModal = Math.max(
    0,
    Math.min(indiceInicial || 0, imagensModal.length - 1)
  );

  modalAtual = document.createElement('div');
  modalAtual.className = 'modal-imagem';

  modalAtual.innerHTML =
    '<div class="modal-overlay"></div>' +
    '<div class="modal-conteudo">' +
      '<button class="modal-fechar" type="button" aria-label="Fechar">&times;</button>' +
      '<button class="modal-nav modal-anterior" type="button" aria-label="Anterior">&#10094;</button>' +
      '<img src="' + escapeHTML(imagensModal[indiceModal]) + '"' +
        ' class="modal-img"' +
        ' alt="' + escapeHTML(nome || 'Complemento ampliado') + '">' +
      '<button class="modal-nav modal-proximo" type="button" aria-label="Próximo">&#10095;</button>' +
      '<div class="modal-contador">' +
        (indiceModal + 1) + ' / ' + imagensModal.length +
      '</div>' +
    '</div>';

  document.body.appendChild(modalAtual);
  document.body.style.overflow = 'hidden';

  modalAtual.querySelector('.modal-overlay')
    .addEventListener('click', fecharModal);

  modalAtual.querySelector('.modal-fechar')
    .addEventListener('click', fecharModal);

  modalAtual.querySelector('.modal-anterior')
    .addEventListener('click', imagemAnterior);

  modalAtual.querySelector('.modal-proximo')
    .addEventListener('click', imagemProxima);

  atualizarModal();
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

  const img = modalAtual.querySelector('.modal-img');
  const contador = modalAtual.querySelector('.modal-contador');

  if (img) {
    img.src = imagensModal[indiceModal];
  }

  if (contador) {
    contador.textContent =
      (indiceModal + 1) + ' / ' + imagensModal.length;
  }

  const anterior = modalAtual.querySelector('.modal-anterior');
  const proximo = modalAtual.querySelector('.modal-proximo');

  if (anterior) {
    anterior.style.display =
      indiceModal === 0 ? 'none' : 'block';
  }

  if (proximo) {
    proximo.style.display =
      indiceModal === imagensModal.length - 1 ? 'none' : 'block';
  }
}

/* ---------- EVENTOS ---------- */

function configurarEventos() {
  document.querySelectorAll('.filtro').forEach(function (btn) {
    btn.addEventListener('click', function () {
      selecionarCategoria(
        this.getAttribute('data-categoria') || 'all'
      );
    });
  });

  const select = document.getElementById('select-categoria');

  if (select) {
    select.addEventListener('change', function () {
      selecionarCategoria(this.value);
    });
  }

  const busca = document.getElementById('busca-complemento');

  if (busca) {
    busca.addEventListener('input', aplicarFiltros);
  }

  const botaoVisualizacao =
    document.querySelector('.controlevisualizacao button');

  if (botaoVisualizacao) {
    botaoVisualizacao.addEventListener(
      'click',
      alternarVisualizacao
    );
  }

  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  }

  document.addEventListener('keydown', function (event) {
    if (!modalAtual) return;

    if (event.key === 'Escape') {
      fecharModal();
    }

    if (event.key === 'ArrowLeft') {
      imagemAnterior();
    }

    if (event.key === 'ArrowRight') {
      imagemProxima();
    }
  });
}

/* ---------- INICIALIZAÇÃO ---------- */

document.addEventListener('DOMContentLoaded', function () {
  gerarCatalogo();
  configurarEventos();

  const catalogo = document.getElementById('catalogo-festas');

  try {
    const visualizacao =
      localStorage.getItem('visualizacao-complementos');

    if (visualizacao === 'lista' && catalogo) {
      catalogo.classList.remove('grid');
      catalogo.classList.add('lista');

      const botao =
        document.querySelector('.controlevisualizacao button');

      if (botao) {
        botao.textContent = 'Alternar para Grade';
      }
    }
  } catch (_) {}

  const categoriaInicial =
    new URLSearchParams(window.location.search)
      .get('categoria') || 'all';

  selecionarCategoria(categoriaInicial);
});
