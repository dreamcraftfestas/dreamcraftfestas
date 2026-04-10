document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. FORMULÁRIO WHATSAPP (CORREÇÃO DO REFRESH) ---
    const form = document.getElementById('meuFormulario');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // ISSO AQUI impede a página de atualizar e o URL de mudar
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            const numeroZap = "5519993723106";
            const texto = `Olá! Meu nome é ${nome} (${email}).%0A%0A*Mensagem:*%0A${mensagem}`;
            
            window.open(`https://wa.me/${numeroZap}?text=${texto}`, '_blank');
            form.reset();
        });
    }

    // --- 2. CARROSSEL DE PORTFÓLIO (CORREÇÃO DO MOVIMENTO) ---
    const trilho = document.getElementById('portfolio-trilho-fotos');
    const btnNext = document.getElementById('portfolio-next-btn');
    const btnPrev = document.getElementById('portfolio-prev-btn');
    
    if (trilho && btnNext && btnPrev) {
        let index = 0;
        const itens = trilho.querySelectorAll('.portfolio-item');

        function mover() {
            // Define quantas fotos aparecem dependendo da tela
            const visiveis = window.innerWidth > 1024 ? 4 : (window.innerWidth > 768 ? 2 : 1);
            const larguraItem = 100 / visiveis;
            const maxIndex = Math.max(0, itens.length - visiveis);
            
            if (index > maxIndex) index = 0;
            if (index < 0) index = maxIndex;

            trilho.style.transform = `translateX(-${index * larguraItem}%)`;
        }

        btnNext.addEventListener('click', () => { index++; mover(); });
        btnPrev.addEventListener('click', () => { index--; mover(); });

        // Auto-play a cada 5 segundos
        setInterval(() => { index++; mover(); }, 5000);
        
        window.addEventListener('resize', mover);
    }

    // --- 3. ZOOM DAS IMAGENS ---
    const modal = document.getElementById('modal-zoom-final');
    const imgFull = document.getElementById('img-ampliada-target');
    const btnFechar = document.getElementById('fechar-zoom-btn');

    document.querySelectorAll('.portfolio-item img').forEach(img => {
        img.addEventListener('click', function() {
            if(modal && imgFull) {
                imgFull.src = this.src;
                modal.style.display = 'flex';
            }
        });
    });

    if(btnFechar) btnFechar.addEventListener('click', () => modal.style.display = 'none');
    if(modal) modal.addEventListener('click', (e) => { if(e.target === modal) modal.style.display = 'none'; });

    // --- 4. MENU MOBILE ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
    }
});
