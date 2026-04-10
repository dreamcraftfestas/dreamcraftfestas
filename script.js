// Usamos uma função autoinvocável para isolar o escopo e evitar conflitos
(function() {
    const iniciarScripts = function() {
        
        // --- 1. FORMULÁRIO WHATSAPP ---
        const form = document.getElementById('meuFormulario');
        if (form) {
            form.onsubmit = function(e) {
                e.preventDefault(); 
                e.stopPropagation();

                const nome = document.getElementById('nome').value;
                const email = document.getElementById('email').value;
                const mensagem = document.getElementById('mensagem').value;
                
                const numeroZap = "5519993723106";
                const texto = `Olá! Meu nome é ${nome} (${email}).%0A%0A*Mensagem:*%0A${mensagem}`;
                
                window.open(`https://wa.me/${numeroZap}?text=${texto}`, '_blank');
                form.reset();
                return false;
            };
        }

        // --- 2. CARROSSEL DE PORTFÓLIO ---
        const trilho = document.getElementById('portfolio-trilho-fotos');
        const btnNext = document.getElementById('portfolio-next-btn');
        const btnPrev = document.getElementById('portfolio-prev-btn');
        
        if (trilho && btnNext && btnPrev) {
            let index = 0;
            const itens = trilho.getElementsByClassName('portfolio-item');

            function mover() {
                // Seu CSS define 25% para cada item (4 fotos por vez)
                let visiveis = 4;
                if (window.innerWidth <= 1024) visiveis = 2;
                if (window.innerWidth <= 768) visiveis = 1;

                const larguraItem = 100 / visiveis;
                const maxIndex = Math.max(0, itens.length - visiveis);
                
                if (index > maxIndex) index = 0;
                if (index < 0) index = maxIndex;

                // Aplica o movimento
                trilho.style.transform = `translateX(-${index * larguraItem}%)`;
            }

            btnNext.onclick = function() { index++; mover(); };
            btnPrev.onclick = function() { index--; mover(); };

            // Auto-play seguro
            setInterval(function() {
                index++;
                mover();
            }, 3000);
            
            window.addEventListener('resize', mover);
        }

        // --- 3. ZOOM DAS IMAGENS ---
        const modal = document.getElementById('modal-zoom-final');
        const imgFull = document.getElementById('img-ampliada-target');
        const btnFechar = document.getElementById('fechar-zoom-btn');
        const imagens = document.querySelectorAll('.portfolio-item img');

        if (modal && imgFull) {
            imagens.forEach(function(img) {
                img.onclick = function() {
                    imgFull.src = this.src;
                    modal.style.display = 'flex';
                };
            });

            const fecharModal = function() { modal.style.display = 'none'; };

            if (btnFechar) btnFechar.onclick = fecharModal;
            modal.onclick = function(e) { if (e.target === modal) fecharModal(); };
        }

        // --- 4. MENU MOBILE ---
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        if (navToggle && navMenu) {
            navToggle.onclick = function() {
                navMenu.classList.toggle('active');
            };
        }
    };

    // Executa assim que o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', iniciarScripts);
    } else {
        iniciarScripts();
    }
    // --- 5. CONTADOR ANIMADO (STATS) ---
    const stats = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats-section');
    let iniciado = false;

    const iniciarContagem = () => {
        stats.forEach(num => {
            const alvo = +num.getAttribute('data-target');
            const incrementar = alvo / 100; // Velocidade da animação

            const atualizarValor = () => {
                const valorAtual = +num.innerText;
                if (valorAtual < alvo) {
                    num.innerText = Math.ceil(valorAtual + incrementar);
                    setTimeout(atualizarValor, 30);
                } else {
                    num.innerText = alvo;
                }
            };
            atualizarValor();
        });
    };

    // Dispara a contagem apenas quando o usuário rolar até a seção
    if (statsSection) {
        window.addEventListener('scroll', () => {
            const posicao = statsSection.getBoundingClientRect().top;
            const alturaTela = window.innerHeight;

            if (posicao < alturaTela && !iniciado) {
                iniciarContagem();
                iniciado = true;
            }
        });
    }
})();
