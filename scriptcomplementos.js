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

const bancoDadosComplementos = [
  {
    nome: 'Número LED de Mesa',
    pasta: 'numeroledmesa',
    categorias: ['led', 'numero'],
    totalImgs: 10,
    descricao: ['Número iluminado para mesa', 'Ideal para aniversários e comemorações']
  },
  {
    nome: 'Número LED de Chão',
    pasta: 'numeroledchao',
    categorias: ['led', 'numero'],
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
    nome: 'Trio Mesa Bailarina',
    pasta: 'mesabailarina',
    categorias: ['pedestais', 'especiais'],
    totalImgs: 1,
    descricao: ['Trio Mesa Bailarina', 'Ideal para agregar valor à decoração']
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
  }
];

let imagensModal = [];
let indiceImagemModal = 0;
let modalAtual = null;

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
}

function criarCard(item) {
  const card = document.createElement('article');
  card.className = 'complemento-card';

  const caminhos = gerarCaminhosImagem(item.pasta, 1);

  const imagemBox = document.createElement('div');
  imagemBox.className = 'card-imagem';
  imagemBox.appendChild(criarImagemComFallback(caminhos, item.nome));

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

  botao.addEventListener('click', () => abrirModal(item));

  conteudo.append(titulo, descricao, botao);
  card.append(imagemBox, conteudo);

  return card;
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

function abrirModal(item) {
  imagensModal = [];

  for (let i = 1; i <= item.totalImgs; i++) {
    imagensModal.push(gerarCaminhosImagem(item.pasta, i));
  }

  indiceImagemModal = 0;

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

  modalAtual.querySelector('h2').textContent = item.nome;
  modalAtual.querySelector('.modal-fechar').addEventListener('click', fecharModal);
  modalAtual.querySelector('.prev').addEventListener('click', () => mudarImagemModal(-1));
  modalAtual.querySelector('.next').addEventListener('click', () => mudarImagemModal(1));

  atualizarConteudoModal();

  modalAtual.style.display = 'flex';
  document.body.classList.add('modal-aberto');
}

function atualizarConteudoModal() {
  if (!modalAtual || !imagensModal.length) return;

  const container = modalAtual.querySelector('.modal-imagem-container');
  const contador = modalAtual.querySelector('.modal-contador');
  const caminhos = imagensModal[indiceImagemModal];

  container.innerHTML = '';
  container.appendChild(
    criarImagemComFallback(
      caminhos,
      modalAtual.querySelector('h2').textContent,
      'imagem-modal'
    )
  );

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

function fecharModal() {
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
    if (event.key === 'ArrowLeft') mudarImagemModal(-1);
    if (event.key === 'ArrowRight') mudarImagemModal(1);
  });
}
