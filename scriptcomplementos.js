'use strict';

/*
 * CATÁLOGO DE COMPLEMENTOS - DREAMCRAFT
 *
 * Estrutura das imagens:
 *   /complementos/numeroledchao/1.webp
 *   /complementos/numeroledchao/2.webp
 *   /complementos/numeroledmesa/1.webp
 *   ...
 *
 * O código testa automaticamente .webp, .jpg, .jpeg e .png.
 */

const COMPLEMENTOS_BASE = 'complementos';
const INTERVALO_CARROSSEL = 3500; // troca automática a cada 3,5 segundos
let temporizadorCarrossel = null;
let carrosselPausado = false;

const bancoDadosComplementos = [
  {
    nome: 'Número LED de Mesa',
    pasta: 'numeroledmesa',
    categorias: ['led', 'numero', 'iluminação'],
    totalImgs: 10,
    descricao: ['Número iluminado para mesa', 'Ideal para aniversários e comemorações']
  },
  {
    nome: 'Número LED de Chão',
    pasta: 'numeroledchao',
    categorias: ['led', 'numero', 'iluminação'],
    totalImgs: 10,
    descricao: ['Número LED de chão', 'Ideal para aniversários e comemorações']
  },
  {
    nome: 'Árvore Algodão',
    pasta: 'arvorealgodao',
    categorias: ['especiais', 'flores'],
    totalImgs: 1,
    descricao: ['Árvore Algodão', 'Ideal para aniversários e comemorações']
  },
  {
    nome: 'Árvore Gota',
    pasta: 'arvoregota',
    categorias: ['especiais', 'flores'],
    totalImgs: 1,
    descricao: ['Árvore Gota', 'Ideal para aniversários e comemorações']
  },
  {
    nome: 'Bandeja Espelhada',
    pasta: 'bandejaespelhada',
    categorias: ['espelhos', 'especiais'],
    totalImgs: 1,
    descricao: ['Bandeja Espelhada', 'Ideal para aniversários e comemorações']
  },
  {
    nome: 'Bandeja Redonda de Ferro',
    pasta: 'bandejaredondaferro',
    categorias: ['especiais'],
    totalImgs: 1,
    descricao: ['Bandeja Redonda de Ferro', 'Ideal para aniversários e comemorações']
  },
  {
    nome: 'Display Carro',
    pasta: 'displaycarro',
    categorias: ['especiais'],
    totalImgs: 1,
    descricao: ['Display Carro', 'Ideal para agregar valor à decoração']
  },
  {
    nome: 'Display Princesas',
    pasta: 'displayprincesa',
    categorias: ['especiais'],
    totalImgs: 1,
    descricao: ['Display Princesas', 'Ideal para agregar valor à decoração']
  },
  {
    nome: 'Display Placas de Trânsito',
    pasta: 'displaytransito',
    categorias: ['especiais'],
    totalImgs: 1,
    descricao: ['Display Placas de Trânsito', 'Ideal para agregar valor à decoração']
  },
  
  {
    nome: 'Painel Janela',
    pasta: 'paineljanela',
    categorias: ['especiais'],
    totalImgs: 1,
    descricao: ['Painel Janela', 'Ideal para agregar valor à decoração']
  },
  {
    nome: 'Placa MDF Bodas de Ouro',
    pasta: 'placabodasdeouro',
    categorias: ['especiais'],
    totalImgs: 1,
    descricao: ['Placa MDF Bodas de Ouro', 'Ideal para agregar valor à decoração']
  },
  {
    nome: 'Vaso Aramado',
    pasta: 'vasoaramado',
    categorias: ['flores', 'especiais'],
    totalImgs: 1,
    descricao: ['Vaso Aramado', 'Ideal para agregar valor à decoração']
  },
  {
    nome: 'Cubo Baby',
    pasta: 'cubobaby',
    categorias: ['pedestais', 'especiais'],
    totalImgs: 4,
    descricao: ['Cubo Baby', 'Ideal para agregar valor à decoração']
  },
  {
    nome: 'Algas em MDF',
    pasta: 'algas',
    categorias: ['especiais'],
    totalImgs: 4,
    descricao: ['Algas em MDF', 'Ideal para agregar valor à decoração']
  },
  {
    nome: 'Trio Mesa Bailarina',
    pasta: 'mesabailarina',
    categorias: ['pedestais', 'especiais'],
    totalImgs: 2,
    descricao: ['Ideal para agregar valor à decoração']
  },
  {
    nome: 'Trio Mesa Redonda',
    pasta: 'mesaredonda',
    categorias: ['pedestais', 'especiais', 'trio'],
    totalImgs: 2,
    descricao: ['Trio Mesa Redonda', 'Ideal para agregar valor à decoração']
  },
  {
    nome: 'Trio Mesa Vieira',
    pasta: 'mesavieira',
    categorias: ['pedestais', 'especiais', 'trio'],
    totalImgs: 2,
    descricao: ['Trio Mesa Vieira', 'Ideal para agregar valor à decoração']
  },
  {
    nome: 'Trio Mesa bailarina de Ferro',
    pasta: 'mesabailarinaferro',
    categorias: ['pedestais', 'especiais', 'trio'],
    totalImgs: 2,
    descricao: ['Trio Mesa Bailarina de Ferro', 'Ideal para agregar valor à decoração']
  },
  {
    nome: 'Arco MDF Vasado',
    pasta: 'arcomdfvasado',
    categorias: ['pedestais', 'especiais', 'trio'],
    totalImgs: 1,
    descricao: ['Arco Romano MDF Vasado', 'Ideal para agregar valor à decoração']
  },

  {
    nome: 'Mesa Arco-Iris MDF Rosa Candy',
    pasta: 'mesaarcoirisrosa',
    categorias: ['mesas'],
    totalImgs: 2,
    descricao: ['Mesa Arco-Iris MDF Rosa Candy', 'Ideal para agregar valor à decoração']
  },

  {
    nome: 'Mesa Arco-Iris MDF Azul Candy',
    pasta: 'mesaarcoirisazul',
    categorias: ['mesas'],
    totalImgs: 1,
    descricao: ['Mesa Arco-Iris MDF Azul Candy', 'Ideal para agregar valor à decoração']
  },

  {
    nome: 'Mesa Arco-Iris MDF Verde Candy',
    pasta: 'mesaarcoirisverde',
    categorias: ['mesas'],
    totalImgs: 2,
    descricao: ['Mesa Arco-Iris MDF Verde Candy', 'Ideal para agregar valor à decoração']
  },

  {
    nome: 'Painel Moinho ',
    pasta: 'painelmoinhoceleiro',
    categorias: ['Painel'],
    totalImgs: 2,
    descricao: ['Painel Moinho ', 'Ideal para agregar valor à decoração']
  },

  {
    nome: 'Painel Organico MDF ',
    pasta: 'painelorganicomdf',
    categorias: ['Painel'],
    totalImgs: 1,
    descricao: ['Painel Organico MDF ', 'Ideal para agregar valor à decoração']
  },

  {
    nome: 'Arco Romano MDF Vazado ',
    pasta: 'arcoromanomdfvazado',
    categorias: ['Painel'],
    totalImgs: 1,
    descricao: ['Arco Romano MDF Vazado ', 'Ideal para agregar valor à decoração']
  },

];

let imagensModal = [];
let indiceImagemModal = 0;
let modalAtual = null;

/*
 * Cache das imagens realmente existentes.
 * O catálogo pode informar totalImgs maior que a quantidade real de arquivos.
 * Neste caso, o carrossel simplesmente ignora as imagens inexistentes.
 */
const cacheImagensValidas = new Map();

document.addEventListener('DOMContentLoaded', () => {
  renderizarCards(bancoDadosComplementos);
  configurarFiltros();
  configurarBusca();
  configurarModal();
});

function normalizarTexto(texto) {
  return String(texto || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function gerarCaminhosImagem(pasta, numero) {
  const base = `${COMPLEMENTOS_BASE}/${pasta}/${numero}`;
  return [
    `${base}.webp`,
    `${base}.jpg`,
    `${base}.jpeg`,
    `${base}.png`
  ];
}

/**
 * Descobre qual arquivo existe para determinado número.
 * Não usa o logo como fallback dentro do carrossel.
 */
function descobrirImagemValida(caminhos) {
  return new Promise(resolve => {
    let indice = 0;

    function testarProxima() {
      if (indice >= caminhos.length) {
        resolve(null);
        return;
      }

      const caminho = caminhos[indice++];
      const img = new Image();

      img.onload = () => resolve(caminho);
      img.onerror = testarProxima;
      img.src = caminho;
    }

    testarProxima();
  });
}

/**
 * Retorna somente as imagens existentes de um item.
 */
async function obterImagensValidas(item) {
  const chave = `${item.pasta}:${item.totalImgs}`;

  if (cacheImagensValidas.has(chave)) {
    return cacheImagensValidas.get(chave);
  }

  const caminhos = [];
  for (let i = 1; i <= item.totalImgs; i++) {
    const valido = await descobrirImagemValida(
      gerarCaminhosImagem(item.pasta, i)
    );

    if (valido) {
      caminhos.push(valido);
    }
  }

  cacheImagensValidas.set(chave, caminhos);
  return caminhos;
}

function criarImagemComFallback(caminhos, alt, classe = '') {
  const img = document.createElement('img');
  img.className = classe;
  img.alt = alt;
  img.loading = 'lazy';

  let tentativa = 0;

  function tentarProxima() {
    if (tentativa >= caminhos.length) {
      img.onerror = null;
      img.src = 'Logo/logo-decoracoes.png';
      return;
    }
    img.src = caminhos[tentativa++];
  }

  img.onerror = tentarProxima;
  tentarProxima();

  return img;
}

function renderizarCards(lista) {
  const grid = document.getElementById('complementosGrid');
  const semResultados = document.getElementById('semResultados');

  if (!grid) return;

  // Limpa timers dos cards antigos antes de reconstruir o catálogo.
  grid.querySelectorAll('.complemento-card').forEach(card => {
    if (card._carrosselTimer) {
      clearInterval(card._carrosselTimer);
      card._carrosselTimer = null;
    }
  });

  if (observadorCarrosseis) {
    observadorCarrosseis.disconnect();
  }

  grid.innerHTML = '';

  if (!lista.length) {
    if (semResultados) semResultados.hidden = false;
    return;
  }

  if (semResultados) semResultados.hidden = true;

  const fragment = document.createDocumentFragment();

  lista.forEach(item => {
    fragment.appendChild(criarCard(item));
  });

  grid.appendChild(fragment);

  // Mesmo comportamento do catálogo de Temas:
  // inicia os carrosséis apenas quando os cards entram perto da tela.
  iniciarCarrosseis();
}

function criarCard(item) {
  const card = document.createElement('article');
  card.className = 'complemento-card';
  card.dataset.pasta = item.pasta;
  card.dataset.categoria = Array.isArray(item.categorias)
    ? item.categorias.join(' ')
    : '';

  const imagemBox = document.createElement('div');
  imagemBox.className = 'card-imagem';
  imagemBox.setAttribute('role', 'button');
  imagemBox.setAttribute('tabindex', '0');
  imagemBox.setAttribute('aria-label', `Abrir imagens de ${item.nome}`);

  const imagensCarrossel = document.createElement('div');
  imagensCarrossel.className = 'imagens-carrossel';

  const quantidade = Math.max(1, Number(item.totalImgs) || 1);

  // IMPORTANTE:
  // Todas as imagens são colocadas no DOM, como no scriptdecor.js.
  // O navegador usa loading="lazy" e o IntersectionObserver abaixo
  // só inicia a troca quando o card estiver próximo da viewport.
  for (let i = 1; i <= quantidade; i++) {
    const img = document.createElement('img');
    img.alt = `${item.nome} - imagem ${i}`;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.dataset.indice = String(i);
    if (i === 1) img.classList.add('imagem-ativa');

    const caminhos = gerarCaminhosImagem(item.pasta, i);
    img.dataset.caminhos = JSON.stringify(caminhos);
    img.src = caminhos[0];

    let tentativa = 0;

    img.addEventListener('error', function () {
      tentativa++;

      if (tentativa < caminhos.length) {
        this.src = caminhos[tentativa];
      } else {
        this.dataset.falhou = '1';
        this.style.display = 'none';
      }
    });

    imagensCarrossel.appendChild(img);
  }

  imagemBox.appendChild(imagensCarrossel);

  const hint = document.createElement('div');
  hint.className = 'zoom-hint';
  hint.textContent = '🔍 Clique para ampliar';
  imagemBox.appendChild(hint);

  // Abre o modal com as imagens que já existem no card.
  imagensCarrossel.addEventListener('click', event => {
    if (event.target.tagName !== 'IMG') return;

    const validas = Array.from(
      imagensCarrossel.querySelectorAll('img:not([data-falhou])')
    );

    const indiceClicado = validas.indexOf(event.target);
    abrirModalComImagensDoCard(
      validas.map(img => img.currentSrc || img.src),
      Math.max(0, indiceClicado)
    );
  });

  imagemBox.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      const validas = Array.from(
        imagensCarrossel.querySelectorAll('img:not([data-falhou])')
      );

      abrirModalComImagensDoCard(
        validas.map(img => img.currentSrc || img.src),
        0
      );
    }
  });

  const conteudo = document.createElement('div');
  conteudo.className = 'card-conteudo';

  const titulo = document.createElement('h3');
  titulo.textContent = item.nome;

  const descricao = document.createElement('p');
  descricao.innerHTML = (Array.isArray(item.descricao) ? item.descricao : [item.descricao])
    .filter(Boolean)
    .map(texto => escapeHtml(texto))
    .join('<br>');

  const botao = document.createElement('button');
  botao.type = 'button';
  botao.className = 'btn-detalhes';
  botao.textContent = 'Ver detalhes';
  botao.addEventListener('click', () => {
    const validas = Array.from(
      imagensCarrossel.querySelectorAll('img:not([data-falhou])')
    );

    abrirModalComImagensDoCard(
      validas.map(img => img.currentSrc || img.src),
      0
    );
  });

  conteudo.append(titulo, descricao, botao);
  card.append(imagemBox, conteudo);

  return card;
}

/* =========================================================
   CARROSSEL AUTOMÁTICO DOS CARDS
   Adaptado da arquitetura que funciona no scriptdecor.js
   ========================================================= */

let observadorCarrosseis = null;

function iniciarCarrosseis() {
  // Se o navegador não tiver IntersectionObserver, ainda assim
  // inicia os carrosséis diretamente.
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.complemento-card').forEach(iniciarSlideshow);
    return;
  }

  if (observadorCarrosseis) {
    observadorCarrosseis.disconnect();
  }

  observadorCarrosseis = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      observadorCarrosseis.unobserve(entry.target);
      iniciarSlideshow(entry.target);
    });
  }, {
    rootMargin: '300px 0px'
  });

  document.querySelectorAll('.complemento-card').forEach(card => {
    observadorCarrosseis.observe(card);
  });
}

function iniciarSlideshow(card) {
  if (card.dataset.carrosselIniciado === 'true') return;
  card.dataset.carrosselIniciado = 'true';

  // Dá tempo para as imagens lazy dispararem load/error.
  setTimeout(() => {
    if (!document.body.contains(card)) return;

    const container = card.querySelector('.imagens-carrossel');
    if (!container) return;

    const imagens = Array.from(container.querySelectorAll('img'));

    if (imagens.length <= 1) return;

    // Só considera válidas as imagens que não falharam.
    let validas = imagens.filter(img => !img.dataset.falhou);

    if (validas.length <= 1) return;

    let atual = validas.findIndex(img =>
      img.classList.contains('imagem-ativa')
    );

    if (atual < 0) atual = 0;

    imagens.forEach(img => img.classList.remove('imagem-ativa'));
    validas[atual].classList.add('imagem-ativa');

    // Cada card possui seu próprio temporizador, exatamente como
    // no carrossel funcional do catálogo de Temas.
    const timer = setInterval(() => {
      if (!document.body.contains(card)) {
        clearInterval(timer);
        return;
      }

      // Atualiza a lista para remover imagens que eventualmente
      // falharam depois do carregamento inicial.
      validas = imagens.filter(img => !img.dataset.falhou);

      if (validas.length <= 1) return;

      const imagemAtual = container.querySelector('.imagem-ativa');
      let indiceAtual = validas.indexOf(imagemAtual);

      if (indiceAtual < 0) indiceAtual = atual % validas.length;

      if (imagemAtual) {
        imagemAtual.classList.remove('imagem-ativa');
      }

      const proximo = (indiceAtual + 1) % validas.length;
      atual = proximo;
      validas[proximo].classList.add('imagem-ativa');
    }, 3000);

    card._carrosselTimer = timer;

    // Pausa quando o usuário passa o mouse sobre o card.
    card.addEventListener('mouseenter', () => {
      card.dataset.carrosselPausado = 'true';
    });

    card.addEventListener('mouseleave', () => {
      card.dataset.carrosselPausado = 'false';
    });

    // O timer continua, mas não troca enquanto estiver pausado.
    // Recria a função de troca com a flag no intervalo existente.
    clearInterval(timer);

    const timerPausavel = setInterval(() => {
      if (!document.body.contains(card)) {
        clearInterval(timerPausavel);
        return;
      }

      if (card.dataset.carrosselPausado === 'true') return;

      validas = imagens.filter(img => !img.dataset.falhou);
      if (validas.length <= 1) return;

      const imagemAtual = container.querySelector('.imagem-ativa');
      let indiceAtual = validas.indexOf(imagemAtual);
      if (indiceAtual < 0) indiceAtual = 0;

      if (imagemAtual) imagemAtual.classList.remove('imagem-ativa');

      const proximo = (indiceAtual + 1) % validas.length;
      atual = proximo;
      validas[proximo].classList.add('imagem-ativa');
    }, 3000);

    card._carrosselTimer = timerPausavel;
  }, 800);
}

/* Modal a partir das imagens já carregadas no card. */
function abrirModalComImagensDoCard(srcs, indiceInicial = 0) {
  const validos = Array.isArray(srcs) ? srcs.filter(Boolean) : [];

  if (!validos.length) return;

  pararCarrosselAutomatico();

  imagensModal = validos.slice();
  indiceImagemModal = Math.min(
    Math.max(0, indiceInicial),
    imagensModal.length - 1
  );

  modalAtual = document.getElementById('modalComplementos');

  if (!modalAtual) {
    modalAtual = document.createElement('div');
    modalAtual.id = 'modalComplementos';
    modalAtual.className = 'modal-container';
    modalAtual.setAttribute('role', 'dialog');
    modalAtual.setAttribute('aria-modal', 'true');
    document.body.appendChild(modalAtual);
  }

  modalAtual.innerHTML = `
    <div class="modal-conteudo">
      <button type="button" class="modal-fechar" aria-label="Fechar">&times;</button>
      <h2></h2>
      <div class="modal-imagem-box">
        <button type="button" class="nav-modal prev" aria-label="Imagem anterior">&#10094;</button>
        <div class="modal-imagem-container"></div>
        <button type="button" class="nav-modal next" aria-label="Próxima imagem">&#10095;</button>
      </div>
      <div class="modal-contador"></div>
    </div>
  `;

  modalAtual.querySelector('h2').textContent = 'Complemento';
  modalAtual.querySelector('.modal-fechar').addEventListener('click', fecharModal);
  modalAtual.querySelector('.prev').addEventListener('click', () => mudarImagemModal(-1));
  modalAtual.querySelector('.next').addEventListener('click', () => mudarImagemModal(1));

  modalAtual.style.display = 'flex';
  document.body.classList.add('modal-aberto');

  atualizarConteudoModal();
  iniciarCarrosselAutomatico();
  configurarPausaCarrossel();
}

function escapeHtml(texto) {
  return String(texto)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function configurarFiltros() {
  const botoes = document.querySelectorAll('.filtro-btn');
  const select = document.getElementById('categoriaSelect');

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      botoes.forEach(b => b.classList.remove('ativo'));
      botao.classList.add('ativo');

      if (select) select.value = botao.dataset.categoria || 'all';

      filtrar();
    });
  });

  if (select) {
    select.addEventListener('change', () => {
      const categoria = select.value || 'all';

      botoes.forEach(botao => {
        botao.classList.toggle(
          'ativo',
          botao.dataset.categoria === categoria
        );
      });

      filtrar();
    });
  }
}

function configurarBusca() {
  const campo = document.getElementById('buscaInput');
  if (campo) campo.addEventListener('input', filtrar);
}

function filtrar() {
  const campo = document.getElementById('buscaInput');
  const termo = normalizarTexto(campo ? campo.value : '');

  const botaoAtivo = document.querySelector('.filtro-btn.ativo');
  const categoria = botaoAtivo?.dataset.categoria || 'all';

  const filtrados = bancoDadosComplementos.filter(item => {
    const categorias = Array.isArray(item.categorias) ? item.categorias : [];
    const bateCategoria =
      categoria === 'all' || categorias.includes(categoria);

    const textoPesquisa = normalizarTexto(
      `${item.nome} ${(item.descricao || []).join(' ')}`
    );

    return bateCategoria && textoPesquisa.includes(termo);
  });

  renderizarCards(filtrados);
}

async function abrirModal(item) {
  modalAtual = document.getElementById('modalComplementos');

  if (!modalAtual) {
    modalAtual = document.createElement('div');
    modalAtual.id = 'modalComplementos';
    modalAtual.className = 'modal-container';
    modalAtual.setAttribute('role', 'dialog');
    modalAtual.setAttribute('aria-modal', 'true');
    document.body.appendChild(modalAtual);
  }

  modalAtual.innerHTML = `
    <div class="modal-conteudo">
      <button type="button" class="modal-fechar" aria-label="Fechar">&times;</button>
      <h2></h2>
      <div class="modal-imagem-box">
        <button type="button" class="nav-modal prev" aria-label="Imagem anterior">&#10094;</button>
        <div class="modal-imagem-container">
          <div class="modal-carregando" aria-live="polite">Carregando imagens...</div>
        </div>
        <button type="button" class="nav-modal next" aria-label="Próxima imagem">&#10095;</button>
      </div>
      <div class="modal-contador"></div>
    </div>
  `;

  modalAtual.querySelector('h2').textContent = item.nome;
  modalAtual.querySelector('.modal-fechar').addEventListener('click', fecharModal);
  modalAtual.querySelector('.prev').addEventListener('click', () => mudarImagemModal(-1));
  modalAtual.querySelector('.next').addEventListener('click', () => mudarImagemModal(1));

  modalAtual.style.display = 'flex';
  document.body.classList.add('modal-aberto');

  imagensModal = [];
  indiceImagemModal = 0;

  const imagensValidas = await obterImagensValidas(item);

  // Se o usuário fechou o modal enquanto as imagens eram verificadas.
  if (!modalAtual || modalAtual.style.display !== 'flex') return;

  imagensModal = imagensValidas;

  if (!imagensModal.length) {
    const container = modalAtual.querySelector('.modal-imagem-container');
    const contador = modalAtual.querySelector('.modal-contador');

    container.innerHTML = `
      <div class="modal-sem-imagem">
        Não foi encontrada nenhuma imagem para este item.
      </div>
    `;
    contador.textContent = '';

    modalAtual.querySelector('.prev').hidden = true;
    modalAtual.querySelector('.next').hidden = true;
    pararCarrosselAutomatico();
    return;
  }

  atualizarConteudoModal();
  iniciarCarrosselAutomatico();
  configurarPausaCarrossel();
}

function atualizarConteudoModal() {
  if (!modalAtual || !imagensModal.length) return;

  const container = modalAtual.querySelector('.modal-imagem-container');
  const contador = modalAtual.querySelector('.modal-contador');
  const caminho = imagensModal[indiceImagemModal];

  container.innerHTML = '';

  const img = document.createElement('img');
  img.className = 'imagem-modal';
  img.alt = modalAtual.querySelector('h2').textContent;
  img.src = caminho;
  img.draggable = false;

  container.appendChild(img);

  contador.textContent = `${indiceImagemModal + 1} / ${imagensModal.length}`;

  const mostrarNavegacao = imagensModal.length > 1;
  modalAtual.querySelector('.prev').hidden = !mostrarNavegacao;
  modalAtual.querySelector('.next').hidden = !mostrarNavegacao;
}

function mudarImagemModal(direcao) {
  if (!imagensModal.length) return;

  indiceImagemModal += direcao;

  if (indiceImagemModal < 0) {
    indiceImagemModal = imagensModal.length - 1;
  }

  if (indiceImagemModal >= imagensModal.length) {
    indiceImagemModal = 0;
  }

  atualizarConteudoModal();
}

function iniciarCarrosselAutomatico() {
  pararCarrosselAutomatico();

  if (imagensModal.length <= 1) return;

  temporizadorCarrossel = setInterval(() => {
    if (!modalAtual || modalAtual.style.display !== 'flex' || carrosselPausado) return;
    mudarImagemModal(1);
  }, INTERVALO_CARROSSEL);
}

function pararCarrosselAutomatico() {
  if (temporizadorCarrossel !== null) {
    clearInterval(temporizadorCarrossel);
    temporizadorCarrossel = null;
  }
}

function configurarPausaCarrossel() {
  if (!modalAtual) return;

  const area = modalAtual.querySelector('.modal-imagem-box');
  if (!area || area.dataset.carrosselConfigurado === 'true') return;

  area.dataset.carrosselConfigurado = 'true';
  area.addEventListener('mouseenter', () => {
    carrosselPausado = true;
  });
  area.addEventListener('mouseleave', () => {
    carrosselPausado = false;
  });
}

function fecharModal() {
  pararCarrosselAutomatico();
  carrosselPausado = false;

  if (modalAtual) {
    modalAtual.style.display = 'none';
    document.body.classList.remove('modal-aberto');
  }
}

function configurarModal() {
  document.addEventListener('click', event => {
    if (event.target === modalAtual) fecharModal();
  });

  document.addEventListener('keydown', event => {
    if (!modalAtual || modalAtual.style.display !== 'flex') return;

    if (event.key === 'Escape') fecharModal();
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      mudarImagemModal(-1);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      mudarImagemModal(1);
    }
  });
}
