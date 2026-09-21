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
        nome: 'Número LED de Mesa',                         pasta: 'numeroledmesa',                       categorias: 'all led mumero', totalImgs: 10,
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

function normalizarTexto(texto) {
    return String(texto || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
}

function escapeHtml(texto) {
    return String(texto ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function obterImagem(pasta, numero) {
    return `${PASTA_IMAGENS}${pasta}/${numero}.webp`;
}

function obterImagemFallback(pasta, numero) {
    return `${PASTA_IMAGENS}${pasta}/${numero}.WEBP`;
}

function gerarDescricao(descricao) {
    if (!Array.isArray(descricao)) return '';

    return descricao
        .filter(Boolean)
        .map(item => `<li>${escapeHtml(item)}</li>`)
        .join('');
}

function gerarCard(item, index) {
    const total = Math.max(1, Number(item.totalImgs) || 1);
    const imagens = [];

    for (let i = 1; i <= total; i++) {
        imagens.push(`
            <img
                class="imagem-carrossel ${i === 1 ? 'ativa' : ''}"
                data-src="${obterImagem(item.pasta, i)}"
                data-fallback="${obterImagemFallback(item.pasta, i)}"
                data-indice="${i - 1}"
                alt="${escapeHtml(item.nome)} - imagem ${i}"
                loading="${i === 1 ? 'eager' : 'lazy'}"
                ${i === 1 ? `src="${obterImagem(item.pasta, i)}"` : ''}
            >
        `);
    }

    const mensagem = encodeURIComponent(
        `Olá! Gostaria de solicitar um orçamento para o complemento "${item.nome}".`
    );

    return `
        <article class="festa complemento-card"
                 data-categoria="${escapeHtml(item.categorias || 'all')}"
                 data-indice="${index}"
                 data-pasta="${escapeHtml(item.pasta)}"
                 data-total-imgs="${total}">

            <div class="carrossel">
                <button class="carrossel-btn anterior" type="button"
                        aria-label="Imagem anterior">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>

                <div class="imagens-carrossel">
                    ${imagens.join('')}
                </div>

                <button class="carrossel-btn proxima" type="button"
                        aria-label="Próxima imagem">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>

                <div class="contador-imagens">1 / ${total}</div>

                <button class="abrir-imagem" type="button"
                        aria-label="Ampliar imagens">
                    <i class="fa-solid fa-expand"></i>
                </button>
            </div>

            <div class="informacoes-complemento">
                <h2 class="titulo">${escapeHtml(item.nome)}</h2>

                ${
                    item.descricao?.length
                    ? `<ul class="descricao">${gerarDescricao(item.descricao)}</ul>`
                    : ''
                }

                <a class="whatsapp-btn"
                   href="https://wa.me/${WHATSAPP}?text=${mensagem}"
                   target="_blank"
                   rel="noopener noreferrer">
                    <i class="fa-brands fa-whatsapp"></i>
                    Solicitar Orçamento
                </a>
            </div>
        </article>
    `;
}

function carregarImagem(img) {
    if (!img || img.dataset.carregada === 'true') return;

    const src = img.dataset.src;
    if (!src) return;

    img.src = src;
    img.dataset.carregada = 'true';

    img.onerror = function () {
        if (!this.dataset.tentouFallback) {
            this.dataset.tentouFallback = 'true';
            this.src = this.dataset.fallback;
        }
    };
}

function configurarLazyLoading() {
    const imagens = document.querySelectorAll(
        '#catalogo-complementos img[data-src]'
    );

    if (!('IntersectionObserver' in window)) {
        imagens.forEach(carregarImagem);
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                carregarImagem(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { rootMargin: '250px' });

    imagens.forEach(img => observer.observe(img));
}

function obterImagensCard(card) {
    return [...card.querySelectorAll('.imagem-carrossel')];
}

function atualizarCarrossel(card, novoIndice) {
    const imagens = obterImagensCard(card);
    if (!imagens.length) return;

    let indice = novoIndice;

    if (indice < 0) indice = imagens.length - 1;
    if (indice >= imagens.length) indice = 0;

    imagens.forEach((img, i) => {
        img.classList.toggle('ativa', i === indice);
        if (i === indice || i === indice + 1) carregarImagem(img);
    });

    const contador = card.querySelector('.contador-imagens');
    if (contador) contador.textContent = `${indice + 1} / ${imagens.length}`;

    card.dataset.imagemAtual = indice;
}

function iniciarSlideshows() {
    pararSlideshows();

    document.querySelectorAll('.complemento-card').forEach(card => {
        const imagens = obterImagensCard(card);
        if (imagens.length <= 1) return;

        const timer = setInterval(() => {
            if (!card.matches(':hover')) {
                const atual = Number(card.dataset.imagemAtual || 0);
                atualizarCarrossel(card, atual + 1);
            }
        }, INTERVALO_SLIDESHOW);

        slideshowTimers.push(timer);
    });
}

function pararSlideshows() {
    slideshowTimers.forEach(clearInterval);
    slideshowTimers = [];
}

function configurarCards() {
    document.querySelectorAll('.complemento-card').forEach(card => {
        const imagens = obterImagensCard(card);
        atualizarCarrossel(card, 0);

        card.querySelector('.anterior')?.addEventListener('click', event => {
            event.stopPropagation();
            atualizarCarrossel(
                card,
                Number(card.dataset.imagemAtual || 0) - 1
            );
        });

        card.querySelector('.proxima')?.addEventListener('click', event => {
            event.stopPropagation();
            atualizarCarrossel(
                card,
                Number(card.dataset.imagemAtual || 0) + 1
            );
        });

        card.querySelector('.abrir-imagem')?.addEventListener('click', event => {
            event.stopPropagation();

            const originalIndex = Number(card.dataset.indice);
            indiceModal = itensFiltrados.findIndex(
                item => bancoDadosComplementos.indexOf(item) === originalIndex
            );

            if (indiceModal < 0) indiceModal = 0;

            indiceImagemModal = Number(card.dataset.imagemAtual || 0);
            abrirModal();
        });

        imagens.forEach((img, i) => {
            img.addEventListener('click', event => {
                event.stopPropagation();

                const originalIndex = Number(card.dataset.indice);
                indiceModal = itensFiltrados.findIndex(
                    item => bancoDadosComplementos.indexOf(item) === originalIndex
                );

                if (indiceModal < 0) indiceModal = 0;

                indiceImagemModal = i;
                abrirModal();
            });
        });
    });
}

function renderizarCatalogo() {
    const catalogo = document.getElementById('catalogo-complementos');
    if (!catalogo) return;

    pararSlideshows();

    if (!itensFiltrados.length) {
        catalogo.innerHTML = `
            <div class="estado-vazio">
                <i class="fa-solid fa-box-open"></i>
                <h2>Nenhum complemento encontrado</h2>
                <p>Cadastre seus itens no <strong>bancoDadosComplementos</strong>
                   ou altere os filtros da busca.</p>
            </div>
        `;
        return;
    }

    catalogo.innerHTML = itensFiltrados
        .map((item, index) => {
            const originalIndex = bancoDadosComplementos.indexOf(item);
            return gerarCard(
                { ...item, _originalIndex: originalIndex },
                originalIndex
            );
        })
        .join('');

    configurarCards();
    configurarLazyLoading();
    iniciarSlideshows();
}

function aplicarFiltros() {
    const categoria = document.getElementById('select-categoria')?.value || 'all';
    const busca = normalizarTexto(
        document.getElementById('busca-complemento')?.value || ''
    );

    itensFiltrados = bancoDadosComplementos.filter(item => {
        const categorias = normalizarTexto(item.categorias || 'all')
            .split(/\s+/)
            .filter(Boolean);

        const nome = normalizarTexto(item.nome);
        const descricao = normalizarTexto(
            Array.isArray(item.descricao) ? item.descricao.join(' ') : ''
        );

        const passaCategoria =
            categoria === 'all' ||
            categorias.includes(normalizarTexto(categoria));

        const passaBusca =
            !busca ||
            nome.includes(busca) ||
            descricao.includes(busca);

        return passaCategoria && passaBusca;
    });

    document.querySelectorAll('.filtro').forEach(botao => {
        botao.classList.toggle(
            'ativo',
            botao.dataset.categoria === categoria
        );
    });

    renderizarCatalogo();
}

function configurarFiltros() {
    document.querySelectorAll('.filtro').forEach(botao => {
        botao.addEventListener('click', () => {
            const select = document.getElementById('select-categoria');
            if (select) select.value = botao.dataset.categoria;
            aplicarFiltros();
        });
    });

    document.getElementById('select-categoria')?.addEventListener(
        'change',
        aplicarFiltros
    );

    document.getElementById('busca-complemento')?.addEventListener(
        'input',
        aplicarFiltros
    );
}

function configurarVisualizacao() {
    const catalogo = document.getElementById('catalogo-complementos');
    const botao = document.getElementById('btn-visualizacao');
    if (!catalogo || !botao) return;

    const chave = 'visualizacao-complementos';
    const salvo = localStorage.getItem(chave);

    if (salvo === 'lista') catalogo.classList.add('lista');

    function atualizarBotao() {
        const lista = catalogo.classList.contains('lista');

        botao.innerHTML = lista
            ? '<i class="fa-solid fa-grip"></i><span>Grade</span>'
            : '<i class="fa-solid fa-list"></i><span>Lista</span>';
    }

    atualizarBotao();

    botao.addEventListener('click', () => {
        const lista = catalogo.classList.toggle('lista');
        localStorage.setItem(chave, lista ? 'lista' : 'grid');
        atualizarBotao();
    });
}

function obterImagemAtualModal() {
    const item = itensFiltrados[indiceModal];
    if (!item) return null;

    const total = Math.max(1, Number(item.totalImgs) || 1);

    if (indiceImagemModal < 0) indiceImagemModal = total - 1;
    if (indiceImagemModal >= total) indiceImagemModal = 0;

    return {
        item,
        src: obterImagem(item.pasta, indiceImagemModal + 1),
        fallback: obterImagemFallback(item.pasta, indiceImagemModal + 1),
        total
    };
}

function atualizarModal() {
    const modal = document.getElementById('modal-imagem');
    const imagem = document.getElementById('imagem-modal');
    const contador = document.getElementById('contador-modal');

    const dados = obterImagemAtualModal();
    if (!dados || !imagem) return;

    imagem.onerror = function () {
        if (!this.dataset.tentouFallback) {
            this.dataset.tentouFallback = 'true';
            this.src = dados.fallback;
        }
    };

    imagem.dataset.tentouFallback = '';
    imagem.src = dados.src;
    imagem.alt = `${dados.item.nome} - imagem ${indiceImagemModal + 1}`;

    if (contador) {
        contador.textContent =
            `${indiceImagemModal + 1} / ${dados.total} — ${dados.item.nome}`;
    }

    if (modal) modal.setAttribute('aria-hidden', 'false');
}

function abrirModal() {
    const modal = document.getElementById('modal-imagem');
    if (!modal) return;

    modal.classList.add('aberto');
    document.body.classList.add('modal-aberto');
    atualizarModal();
}

function fecharModal() {
    const modal = document.getElementById('modal-imagem');
    if (!modal) return;

    modal.classList.remove('aberto');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-aberto');
}

function proximaImagemModal() {
    const dados = obterImagemAtualModal();
    if (!dados) return;

    indiceImagemModal++;
    if (indiceImagemModal >= dados.total) indiceImagemModal = 0;
    atualizarModal();
}

function imagemAnteriorModal() {
    const dados = obterImagemAtualModal();
    if (!dados) return;

    indiceImagemModal--;
    if (indiceImagemModal < 0) indiceImagemModal = dados.total - 1;
    atualizarModal();
}

function configurarModal() {
    document.querySelector('.modal-fechar')?.addEventListener(
        'click',
        fecharModal
    );

    document.querySelector('.modal-proxima')?.addEventListener(
        'click',
        proximaImagemModal
    );

    document.querySelector('.modal-anterior')?.addEventListener(
        'click',
        imagemAnteriorModal
    );

    document.getElementById('modal-imagem')?.addEventListener('click', event => {
        if (event.target.id === 'modal-imagem') fecharModal();
    });

    document.addEventListener('keydown', event => {
        const modal = document.getElementById('modal-imagem');
        if (!modal?.classList.contains('aberto')) return;

        if (event.key === 'Escape') fecharModal();
        if (event.key === 'ArrowRight') proximaImagemModal();
        if (event.key === 'ArrowLeft') imagemAnteriorModal();
    });
}

function iniciar() {
    const params = new URLSearchParams(window.location.search);
    const categoriaUrl = params.get('categoria');

    if (categoriaUrl) {
        const select = document.getElementById('select-categoria');
        if (select && [...select.options].some(o => o.value === categoriaUrl)) {
            select.value = categoriaUrl;
        }
    }

    configurarFiltros();
    configurarVisualizacao();
    configurarModal();
    aplicarFiltros();
}

document.addEventListener('DOMContentLoaded', iniciar);
