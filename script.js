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
                let visiveis = 4;
                if (window.innerWidth <= 1024) visiveis = 2;
                if (window.innerWidth <= 768) visiveis = 1;
                const larguraItem = 100 / visiveis;
                const maxIndex = Math.max(0, itens.length - visiveis);
                if (index > maxIndex) index = 0;
                if (index < 0) index = maxIndex;
                trilho.style.transform = `translateX(-${index * larguraItem}%)`;
            }
            btnNext.onclick = function() { index++; mover(); };
            btnPrev.onclick = function() { index--; mover(); };
            setInterval(function() { index++; mover(); }, 3000);
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
            navToggle.onclick = function() { navMenu.classList.toggle('active'); };
        }

        // --- 5. CONTADOR ANIMADO (DENTRO DA FUNÇÃO PRINCIPAL) ---
        const stats = document.querySelectorAll('.stat-number');
        const statsSection = document.querySelector('.stats-section');
        let iniciado = false;

        const iniciarContagem = () => {
            stats.forEach(num => {
                const alvo = parseInt(num.getAttribute('data-target'));
                let atual = 0;
                const incremento = alvo / 50; // Ajusta a fluidez
                
                const contador = setInterval(() => {
                    atual += incremento;
                    if (atual >= alvo) {
                        num.innerText = alvo;
                        clearInterval(contador);
                    } else {
                        num.innerText = Math.ceil(atual);
                    }
                }, 30);
            });
        };

        if (statsSection) {
            window.addEventListener('scroll', function() {
                const posicao = statsSection.getBoundingClientRect().top;
                const alturaTela = window.innerHeight;
                if (posicao < alturaTela - 100 && !iniciado) {
                    iniciarContagem();
                    iniciado = true;
                }
            });
        }
    };

    // Inicialização segura
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', iniciarScripts);
    } else {
        iniciarScripts();
    }
})();
