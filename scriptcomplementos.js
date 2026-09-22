'use strict';

let indiceModal = 0;
let indiceImagemModal = 0;
let slideshowTimers = [];
let modalAtual = null;
let imagensModal = [];

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

cdocument.addEventListener('DOMContentLoaded', () => {
  renderizarCards(complementos);
  configurarFiltros();
  configurarBusca();
});

function renderizarCards(lista) {
  const grid = document.getElementById('complementosGrid');
  const semResultados = document.getElementById('semResultados');

  grid.innerHTML = '';

  if (!lista || lista.length === 0) {
    semResultados.style.display = 'block';
    return;
  }

  semResultados.style.display = 'none';

  lista.forEach(item => {
    const card = criarCard(item);
    grid.appendChild(card);
  });
}

function criarCard(item) {
  const card = document.createElement('div');
  card.className = 'complemento-card';

  const imagemPrincipal = item.imagens && item.imagens.length > 0 
    ? item.imagens[0] 
    : 'fotos-complementos/placeholder.jpg';

  card.innerHTML = `
    <div class="card-imagem">
      <img src="${imagemPrincipal}" alt="${item.titulo}" loading="lazy">
    </div>
    <div class="card-conteudo">
      <h3>${item.titulo}</h3>
      <p>${item.descricao || ''}</p>
      <button class="btn-detalhes" onclick="abrirModalComLista('${item.titulo}', ['${item.imagens.join("','")}'])">
        Ver Detalhes
      </button>
    </div>
  `;

  return card;
}

function configurarFiltros() {
  const botoesFiltro = document.querySelectorAll('.filtro-btn');
  const selectCategoria = document.getElementById('categoriaSelect');

  botoesFiltro.forEach(btn => {
    btn.addEventListener('click', () => {
      botoesFiltro.forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');

      const categoria = btn.dataset.categoria;
      if (selectCategoria) selectCategoria.value = categoria;
      filtrar();
    });
  });

  if (selectCategoria) {
    selectCategoria.addEventListener('change', (e) => {
      const categoria = e.target.value;
      botoesFiltro.forEach(b => {
        b.classList.toggle('ativo', b.dataset.categoria === categoria);
      });
      filtrar();
    });
  }
}

function configurarBusca() {
  const buscaInput = document.getElementById('buscaInput');
  if (buscaInput) {
    buscaInput.addEventListener('input', filtrar);
  }
}

function filtrar() {
  const buscaInput = document.getElementById('buscaInput');
  const termo = buscaInput ? buscaInput.value.toLowerCase().trim() : '';
  
  const btnAtivo = document.querySelector('.filtro-btn.ativo');
  const categoria = btnAtivo ? btnAtivo.dataset.categoria : 'all';

  const filtrados = complementos.filter(item => {
    const bateCategoria = categoria === 'all' || item.categoria === categoria;
    const bateBusca = item.titulo.toLowerCase().includes(termo) || 
                      (item.descricao && item.descricao.toLowerCase().includes(termo));
    return bateCategoria && bateBusca;
  });

  renderizarCards(filtrados);
}

function abrirModalComLista(titulo, imagens) {
  imagensModal = imagens;
  indiceImagemModal = 0;

  let modal = document.getElementById('modalComplementos');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modalComplementos';
    modal.className = 'modal-container';
    document.body.appendChild(modal);
  }

  modalAtual = modal;
  atualizarConteudoModal(titulo);
  modal.style.display = 'flex';
}

function atualizarConteudoModal(titulo) {
  if (!modalAtual) return;

  const imagemAtual = imagensModal[indiceImagemModal] || '';

  modalAtual.innerHTML = `
    <div class="modal-conteudo">
      <span class="modal-fechar" onclick="fecharModal()">&times;</span>
      <h2>${titulo}</h2>
      <div class="modal-imagem-box">
        <img src="${imagemAtual}" alt="${titulo}">
        ${imagensModal.length > 1 ? `
          <button class="nav-modal prev" onclick="mudarImagemModal(-1)">&#10094;</button>
          <button class="nav-modal next" onclick="mudarImagemModal(1)">&#10095;</button>
        ` : ''}
      </div>
    </div>
  `;
}

function mudarImagemModal(direcao) {
  indiceImagemModal += direcao;
  if (indiceImagemModal < 0) {
    indiceImagemModal = imagensModal.length - 1;
  } else if (indiceImagemModal >= imagensModal.length) {
    indiceImagemModal = 0;
  }
  const imgElement = modalAtual.querySelector('.modal-imagem-box img');
  if (imgElement) {
    imgElement.src = imagensModal[indiceImagemModal];
  }
}

function fecharModal() {
  if (modalAtual) {
    modalAtual.style.display = 'none';
  }
}
