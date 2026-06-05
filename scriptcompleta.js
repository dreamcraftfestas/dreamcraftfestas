// ============================================
// DREAMCRAFT - CATÁLOGO FESTA COMPLETA
// ============================================

const bancoDadosTemas = [
    
    { nome: "1ª Volta ao Sol", pasta: "101dalmatas", categorias: "all 1ano" },    
    { nome: "3 Palavrinhas Fundo Verde", pasta: "3palavrinhasfundoverde", categorias: "all religiosos" },
    { nome: "99 Noites", pasta: "99noites", categorias: "all jogos" },
    { nome: "Ano Novo", pasta: "anonovo", categorias: "all anonovo" },
    { nome: "Anos 60 Branco e Preto", pasta: "anos60brancoepreto", categorias: "all anos60" },
    { nome: "Anos 80 Preto e Neon", pasta: "anos80pretoteneon", categorias: "all anos80" },
    { nome: "Arca de Noé", pasta: "arcadenoe", categorias: "all religiosos" },
    { nome: "Baby Monster", pasta: "babymonster", categorias: "all musica bandacoreana k-pop" },
    { nome: "Barbie", pasta: "barbie", categorias: "all desenhos filme boneca meninas" },
    { nome: "Batizado", pasta: "batizado", categorias: "all religiosos batizado" },
    { nome: "Black Clover", pasta: "blackclover", categorias: "all anime" },
    { nome: "Bluey e Bingo", pasta: "blueyebingo", categorias: "all desenhos animais" },
    { nome: "Bolofofos Menina", pasta: "bolofofosmenina", categorias: "all desenhos musicas" },
    { nome: "Bolofofos Menino", pasta: "bolofofosmenino", categorias: "all desenhos musicas" },
    { nome: "Borboleta Lilas", pasta: "borboletalilas", categorias: "all borboletas animais" },
    { nome: "Branca de Neve Azul Bebe", pasta: "brancadeneveazulbebe", categorias: "all princesas contodefadas filme disney" },
    { nome: "Branca de Neve", pasta: "brancadeneve", categorias: "all princesas contodefadas filme disney" },
    { nome: "Brasil Copa Sou Brasil até a Alma", pasta: "brasilcopasoubrasilateaalma", categorias: "all futebol times copa" },
    { nome: "Brasil Copa Vai Brasil", pasta: "brasilcopavaibrasil", categorias: "all futebol times copa" },
    { nome: "Brawl Star", pasta: "brawlstar", categorias: "all jogos" },
    { nome: "Casa Magica da Gabby", pasta: "casamagicadagabby", categorias: "all desenhos magia" },
    { nome: "Castelo Princesa Rosa", pasta: "casteloprincesarosa", categorias: "all princesas disney" },
    { nome: "Churrasco Cilindro Wisky", pasta: "churrascocilindrowisky", categorias: "all churrasco boteco" },
    { nome: "Chá de Bebe Azul Elefantinho Balão", pasta: "chadebebeazulelefantinhobalao", categorias: "all chadebebe" },
    { nome: "Chá de Bebe Ursinho Rosa", pasta: "chadebebeursinhorosa", categorias: "all chadebebe" },
    { nome: "Chá revelação Rosa/Azul – Ursinho", pasta: "charevelacaorosaazulursinho", categorias: "all charevelacao" },
    { nome: "Corinthians", pasta: "corinthians", categorias: "all times futebol" },
    { nome: "Crash Royale", pasta: "crashroyale", categorias: "all jogos" },
    { nome: "Dia das Mães Rosas", pasta: "diadasmaesrosas", categorias: "all datacomemorativa" },
    { nome: "Dino Baby", pasta: "dinobaby", categorias: "all dinossauro animais" },
    { nome: "Divertidamente 2", pasta: "divertidamente2", categorias: "all filme" },
    { nome: "Dourado e Branco Romano", pasta: "douradoebrancoromano", categorias: "all diversos" },
    { nome: "Dourado", pasta: "dourado", categorias: "all diversos" },
    { nome: "Fazendinha Azul", pasta: "fazendinhaazul", categorias: "all fazendinha" },
    { nome: "Fazendinha Vermelha / Rosa", pasta: "fazendinhavermelharosa", categorias: "all fazendinha" },
    { nome: "Feijoada", pasta: "feijoada", categorias: "all boteco diversos" },
    { nome: "Festa Junina / Julina", pasta: "festajuninajulina", categorias: "all arraia datacomemorativa" },
    { nome: "Festa Junina Arraia Aquarela", pasta: "festajuninaarraiaaquarela", categorias: "all arraia datacomemorativa" },
    { nome: "Festa Junina Arraia Cilindro Girassol", pasta: "festajuninaarraiacilindrogirassol", categorias: "all arraia datacomemorativa" },
    { nome: "Festa Junina Arraia em Casa", pasta: "festajuninaarraiaemcasa", categorias: "all arraia datacomemorativa" },
    { nome: "Flamengo", pasta: "flamengo", categorias: "all times futebol" },
    { nome: "Frozen", pasta: "frozen", categorias: "all princesas filme contodefadas disney" },
    { nome: "Fundo do Mar Aquarela", pasta: "fundodomaraquarela", categorias: "all fundodomar" },
    { nome: "Fundo do Mar Menina", pasta: "fundodomarmenina", categorias: "all fundodomar" },
    { nome: "Futebol Barcelona", pasta: "futebolbarcelona", categorias: "all times futebol" },
    { nome: "Futebol", pasta: "futebol", categorias: "all times futebol" },
    { nome: "Glitter Lilás", pasta: "glitterlilas", categorias: "all diversos" },
    { nome: "Guerreiras do K-POP Neon", pasta: "guerreirasdokpopneon", categorias: "all k-pop musica bandacoreana" },
    { nome: "Guerreiro K-POP Gato", pasta: "guerreirokpopgato", categorias: "all k-pop musica" },
    { nome: "Homem Aranha Cute", pasta: "homemaranhacute", categorias: "all herois filme desenhos cute" },
    { nome: "Jardim Borboleta", pasta: "jardimborboleta", categorias: "all borboletas animais flores" },
    { nome: "Joãozinho Praia", pasta: "joaozinhopraia", categorias: "all desenhos praia" },
    { nome: "Liga da Justiça c/ Painel Lateral", pasta: "ligadajusticacpainellateral", categorias: "all herois filme desenhos" },
    { nome: "Lucas Neto", pasta: "lucasneto", categorias: "all youtuber diversos" },
    { nome: "Magali Baby", pasta: "magalibaby", categorias: "all desenhos cute" },
    { nome: "Maria Clara e JP", pasta: "mariaclaraejp", categorias: "all youtuber diversos" },
    { nome: "Mario Brós", pasta: "mariobros", categorias: "all jogos desenhos" },
    { nome: "Meninas Superpoderosas", pasta: "meninassuperpoderosas", categorias: "all desenhos" },
    { nome: "Mickey Baby Azul", pasta: "mickeybabyazul", categorias: "all disney desenhos cute" },
    { nome: "Mickey Safari", pasta: "mickeysafari", categorias: "all disney desenhos animais" },
    { nome: "Mickey Tradicional", pasta: "mickeytradicional", categorias: "all disney desenhos" },
    { nome: "MineCraft TNT", pasta: "minecrafttnt", categorias: "all jogos" },
    { nome: "MineCraft", pasta: "minecraft", categorias: "all jogos" },
    { nome: "Minnie Vermelha", pasta: "minnievermelha", categorias: "all disney desenhos" },
    { nome: "Moana", pasta: "moana", categorias: "all princesas filme disney fundodomar" },
    { nome: "Monstros S.A – Boo", pasta: "monstrossaboo", categorias: "all filme desenhos" },
    { nome: "Moranguinho x", pasta: "moranguinhox", categorias: "all desenhos frutas" },
    { nome: "Mulher Maravilha", pasta: "mulhermaravilha", categorias: "all herois filme desenhos" },
    { nome: "My Litle Poney", pasta: "mylitleponey", categorias: "all desenhos animais" },
    { nome: "Naruto", pasta: "naruto", categorias: "all anime desenhos" },
    { nome: "One Piece", pasta: "onepiece", categorias: "all anime" },
    { nome: "Os Rosas", pasta: "osrosas", categorias: "all youtuber diversos" },
    { nome: "Ovelha Rosinha", pasta: "ovelharosinha", categorias: "all animais cute" },
    { nome: "Painel Pallet – Meus 20 anos Depois dos 20", pasta: "painelpalletmeus20anosdepoisdos20", categorias: "all diversos 20anos" },
    { nome: "Pantera Negra", pasta: "panteranegra", categorias: "all herois filme" },
    { nome: "Patrulha Canina", pasta: "patrulhacanina", categorias: "all desenhos animais" },
    { nome: "Playstation", pasta: "playstation", categorias: "all jogos" },
    { nome: "Pool Party Menino", pasta: "poolpartymenino", categorias: "all diversos fundodomar" },
    { nome: "Prata", pasta: "prata", categorias: "all diversos" },
    { nome: "Preto Com Glitter Rosa", pasta: "pretocomglitterrosa", categorias: "all diversos" },
    { nome: "Princesa Tiana", pasta: "princesatiana", categorias: "all princesas filme disney" },
    { nome: "Princesas Disney", pasta: "princesasdisney", categorias: "all princesas contodefadas filme disney" },
    { nome: "Rapunzel Castelo", pasta: "rapunzelcastelo", categorias: "all princesas contodefadas filme" },
    { nome: "Roblox", pasta: "roblox", categorias: "all jogos" },
    { nome: "Rosas Azuis", pasta: "rosasazuis", categorias: "all jogos" },
    { nome: "Sereia Splash", pasta: "sereiasplash", categorias: "all fundodomar desenhos" },
    { nome: "Shimmer Wall Holográfico/Frutacor", pasta: "shimmerwallholograficofrutacor", categorias: "all diversos" },
    { nome: "Shimmer Wall", pasta: "shimmerwall", categorias: "all diversos" },
    { nome: "Sititch Milk Shake", pasta: "sititchmilkshake", categorias: "all disney filme desenhos" },
    { nome: "Sky – Patrulha Canina", pasta: "skypatrulhacanina", categorias: "all desenhos animais" },
    { nome: "Spider Man Miles Morales", pasta: "spidermanmilesmorales", categorias: "all herois filme desenhos jogos" },
    { nome: "Spirit", pasta: "spirit", categorias: "all desenhos animais" },
    { nome: "Stitch Angel", pasta: "stitchangel", categorias: "all disney filme desenhos" },
    { nome: "Stitch Chiclete", pasta: "stitchchiclete", categorias: "all disney filme desenhos" },
    { nome: "Stitch MilkShake", pasta: "stitchmilkshake", categorias: "all disney filme desenhos" },
    { nome: "Super Book", pasta: "superbook", categorias: "all religiosos" },
    { nome: "São Paulo", pasta: "saopaulo", categorias: "all times futebol" },
    { nome: "Tardezinha", pasta: "tardezinha", categorias: "all diversos boteco" },
    { nome: "Toy Story", pasta: "toystory", categorias: "all filme desenhos" },
    { nome: "Turma da Mônica", pasta: "turmadamonica", categorias: "all desenhos" },
    { nome: "Unicórnio", pasta: "unicornio", categorias: "all diversos cute" },
    { nome: "Ursinho Azul Chá de Bebe", pasta: "ursinhoazulchadebebe", categorias: "all chadebebe" }


];

// Variavel global para controlar o modal
let modalAtual = null;
let imagensModal = [];
let indiceModal = 0;

function gerarCatalogo() {
    const container = document.getElementById('catalogo-festas');
    if (!container) return;

    container.innerHTML = "";

    bancoDadosTemas.forEach(function(tema) {
        const nome = tema.nome;
        const categorias = tema.categorias;
        const nomePasta = tema.pasta;

        // --- DEFINE A DESCRIÇÃO COM BASE NO TIPO ---
        let descricaoHTML = 
            '<li>Painel</li>' +
            '<li>Arco de balões</li>' +
            '<li>Trio de Cilindro</li>' +
            '<li>Boleira Slim em 3 tamanhos</li>' +
            '<li>Vaso Romano</li>' +
            '<li>Tapete</li>' +
            '<li>Tudo como na imagem ou nas cores que desejas</li>';

        // --- GERA AS IMAGENS ---
        let htmlImagens = '';
        for (let i = 1; i <= 20; i++) {
            const caminho = './festa-completa/' + nomePasta + '/' + i + '.webp';
            htmlImagens += '<img src="' + caminho + '" ' +
                'class="' + (i === 1 ? 'imagem-ativa' : '') + '" ' +
                'onerror="this.style.display=\'none\'" ' +
                'onclick="abrirModal(\'' + nomePasta + '\', ' + i + ')">';
        }

        const card = document.createElement('div');
        card.className = 'festa';
        card.setAttribute('data-categoria', categorias);

        card.innerHTML = 
            '<div class="carrossel">' +
                '<div class="imagens-carrossel" data-pasta="' + nomePasta + '">' + htmlImagens + '</div>' +
                '<div class="contador-imagens"></div>' +
                '<div class="zoom-hint">🔍 Clique para ampliar</div>' +
            '</div>' +
            '<div class="conteudo">' +
                '<div class="titulo">Mini Festa ' + nome + '</div>' +
                '<ul class="descricao">' +
                    descricaoHTML +
                '</ul>' +
                '<a class="whatsapp-btn" href="https://wa.me/5519993723106?text=Olá, quero orçamento para ' + encodeURIComponent(nome) + '" target="_blank">' +
                    '<i class="fa-brands fa-whatsapp"></i> Solicitar Orçamento' +
                '</a>' +
            '</div>';
        container.appendChild(card);

        setTimeout(function() {
            setupCarrossel(card);
        }, 100);
    });
}

function setupCarrossel(card) {
    const container = card.querySelector('.imagens-carrossel');
    const todasImagens = container.querySelectorAll('img');
    const contador = card.querySelector('.contador-imagens');

    setTimeout(function() {
        const imagensValidas = Array.from(todasImagens).filter(function(img) {
            return img.style.display !== 'none' && img.complete && img.naturalWidth > 0;
        });

        const totalImagens = imagensValidas.length;

        if (contador && totalImagens > 0) {
            contador.textContent = totalImagens + ' foto' + (totalImagens > 1 ? 's' : '');
        }

        if (totalImagens <= 1) {
            if (totalImagens === 1) {
                imagensValidas[0].classList.add('imagem-ativa');
            }
            return;
        }

        let atual = 0;

        imagensValidas.forEach(function(img, index) {
            if (index === 0) {
                img.classList.add('imagem-ativa');
            } else {
                img.classList.remove('imagem-ativa');
            }
        });

        const intervalo = setInterval(function() {
            if (!document.body.contains(card)) {
                clearInterval(intervalo);
                return;
            }
            imagensValidas[atual].classList.remove('imagem-ativa');
            atual = (atual + 1) % totalImagens;
            imagensValidas[atual].classList.add('imagem-ativa');
        }, 3000);

    }, 500);
}

// ============================================
// MODAL / LIGHTBOX
// ============================================

function abrirModal(pasta, indiceInicial) {
    imagensModal = [];
    for (let i = 1; i <= 20; i++) {
        const caminho = './Imagem/' + pasta + '/' + i + '.webp';
        imagensModal.push(caminho);
    }

    indiceModal = indiceInicial - 1;

    const modalAntigo = document.querySelector('.modal-imagem');
    if (modalAntigo) modalAntigo.remove();

    modalAtual = document.createElement('div');
    modalAtual.className = 'modal-imagem';
    modalAtual.innerHTML = 
        '<div class="modal-overlay" onclick="fecharModal()"></div>' +
        '<div class="modal-conteudo">' +
            '<button class="modal-fechar" onclick="fecharModal()">&times;</button>' +
            '<button class="modal-nav modal-anterior" onclick="imagemAnterior()">&#10094;</button>' +
            '<img src="' + imagensModal[indiceModal] + '" class="modal-img" onerror="this.src=\'Logo/logo-festas.png\'">' +
            '<button class="modal-nav modal-proximo" onclick="imagemProxima()">&#10095;</button>' +
            '<div class="modal-contador">' + (indiceModal + 1) + ' / ' + imagensModal.length + '</div>' +
        '</div>';

    document.body.appendChild(modalAtual);
    document.body.style.overflow = 'hidden'; 

    validarImagensModal();
}

function validarImagensModal() {
    const imgModal = modalAtual.querySelector('.modal-img');
    imgModal.onerror = function() {
        if (imagensModal.length > 1) {
             imagensModal.splice(indiceModal, 1);
             if (indiceModal >= imagensModal.length) indiceModal = 0;
             atualizarModal();
        } else {
             fecharModal();
        }
    };
    atualizarBotoesModal();
}

function fecharModal() {
    if (modalAtual) {
        modalAtual.remove();
        modalAtual = null;
        document.body.style.overflow = '';
    }
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

    img.src = imagensModal[indiceModal];
    contador.textContent = (indiceModal + 1) + ' / ' + imagensModal.length;
    atualizarBotoesModal();
}

function atualizarBotoesModal() {
    if (!modalAtual) return;
    const btnAnterior = modalAtual.querySelector('.modal-anterior');
    const btnProximo = modalAtual.querySelector('.modal-proximo');
    btnAnterior.style.display = indiceModal === 0 ? 'none' : 'block';
    btnProximo.style.display = indiceModal === imagensModal.length - 1 ? 'none' : 'block';
}

document.addEventListener('keydown', function(e) {
    if (!modalAtual) return;
    if (e.key === 'Escape') fecharModal();
    if (e.key === 'ArrowLeft') imagemAnterior();
    if (e.key === 'ArrowRight') imagemProxima();
});

// ============================================
// FILTROS E BUSCA
// ============================================

function filtrarCategoria(categoria) {
    if (!categoria) {
        categoria = document.getElementById("filtro").value;
    }
    const festas = document.querySelectorAll(".festa");

    document.querySelectorAll('.filtro-btn').forEach(function(btn) {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').indexOf("'" + categoria + "'") !== -1) {
            btn.classList.add('active');
        }
    });

    const select = document.getElementById("filtro");
    if (select) select.value = categoria;

    festas.forEach(function(festa) {
        const cats = (festa.getAttribute("data-categoria") || "").toLowerCase();
        if (categoria === "all" || cats.indexOf(categoria.toLowerCase()) !== -1) {
            festa.style.display = "flex";
        } else {
            festa.style.display = "none";
        }
    });
}

function buscarTema() {
    const termo = document.getElementById('busca-tema').value.toLowerCase();
    const festas = document.querySelectorAll('.festa');

    festas.forEach(function(festa) {
        const titulo = festa.querySelector('.titulo').textContent.toLowerCase();
        festa.style.display = titulo.indexOf(termo) !== -1 ? 'flex' : 'none';
    });
}

function alternarVisualizacao() {
    const catalogo = document.getElementById('catalogo-festas');
    if (!catalogo) return;

    if (catalogo.classList.contains('grid')) {
        catalogo.classList.remove('grid');
        catalogo.classList.add('lista');
        localStorage.setItem('visualizacao', 'lista');
    } else {
        catalogo.classList.remove('lista');
        catalogo.classList.add('grid');
        localStorage.setItem('visualizacao', 'grid');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    gerarCatalogo();

    const catalogo = document.getElementById('catalogo-festas');
    const preferencia = localStorage.getItem('visualizacao');

    if (preferencia === 'lista' && catalogo) {
        catalogo.classList.remove('grid');
        catalogo.classList.add('lista');
    }

    const btnAlternar = document.querySelector('.controlevisualizacao button');
    if (btnAlternar) {
        btnAlternar.addEventListener('click', alternarVisualizacao);
    }

    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    filtrarCategoria('all');
});