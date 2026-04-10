// ============================================
// DREAMCRAFT - JAVASCRIPT PRINCIPAL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // CARROSSEL DE PORTFÓLIO
    // ============================================
    const trilho = document.getElementById('portfolio-trilho-fotos');
    const btnNext = document.getElementById('portfolio-next-btn');
    const btnPrev = document.getElementById('portfolio-prev-btn');
    
    if (trilho && btnNext && btnPrev) {
        let index = 0;
        let timer;
        const itens = trilho.querySelectorAll('.portfolio-item');
        
        function getVisiveis() {
            return window.innerWidth > 768 ? 4 : 1;
        }
        
        function mover() {
            const visiveis = getVisiveis();
            const porcentagem = 100 / visiveis;
            trilho.style.transform = 'translateX(-' + (index * porcentagem) + '%)';
        }
        
        function proximo() {
            const visiveis = getVisiveis();
            const max = Math.max(0, itens.length - visiveis);
            index = (index >= max) ? 0 : index + 1;
            mover();
        }
        
        function anterior() {
            index = (index <= 0) ? 0 : index - 1;
            mover();
        }
        
        function reiniciarTimer() {
            clearInterval(timer);
            timer = setInterval(proximo, 3000);
        }
        
        // Eventos
        btnNext.addEventListener('click', function() {
            proximo();
            reiniciarTimer();
        });
        
        btnPrev.addEventListener('click', function() {
            anterior();
            reiniciarTimer();
        });
        
        // Zoom
        const modal = document.getElementById('modal-zoom-final');
        const imgFull = document.getElementById('img-ampliada-target');
        const btnFechar = document.getElementById('fechar-zoom-btn');
        
        if (modal && imgFull && btnFechar) {
            itens.forEach(function(item) {
                const img = item.querySelector('img');
                if (img) {
                    img.addEventListener('click', function() {
                        imgFull.src = this.src;
                        modal.style.display = 'flex';
                        clearInterval(timer);
                    });
                }
            });
            
            btnFechar.addEventListener('click', function() {
                modal.style.display = 'none';
                reiniciarTimer();
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    reiniciarTimer();
                }
            });
        }
        
        // Inicia
        mover();
        reiniciarTimer();
        
        // Resize
        window.addEventListener('resize', function() {
            index = 0;
            mover();
        });
    }
    
    // ============================================
    // MENU MOBILE
    // ============================================
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // ============================================
    // HEADER QUE SOME AO ROLAR
    // ============================================
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    if (header) {
        window.addEventListener('scroll', function() {
            const current = window.pageYOffset;
            
            if (current > lastScroll && current > 100) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
            
            lastScroll = current;
        });
    }
    
    // ============================================
    // CONTADOR DE ESTATÍSTICAS
    // ============================================
    function animarContadores() {
        const contadores = document.querySelectorAll('.stat-number');
        
        contadores.forEach(function(contador) {
            const target = parseInt(contador.getAttribute('data-target'));
            if (!target) return;
            
            let atual = 0;
            const incremento = target / 100;
            const duracao = 20;
            
            const timer = setInterval(function() {
                atual += incremento;
                if (atual >= target) {
                    contador.textContent = target;
                    clearInterval(timer);
                } else {
                    contador.textContent = Math.floor(atual);
                }
            }, duracao);
        });
    }
    
    // Observer para iniciar contador
    const statsSection = document.querySelector('.stats-section');
    if (statsSection && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    animarContadores();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
    
    // ============================================
    // FORMULÁRIO
    // ============================================
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            
            fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(function(response) {
                if (response.ok) {
                    alert('Mensagem enviada com sucesso!');
                    form.reset();
                } else {
                    alert('Erro ao enviar. Tente novamente.');
                }
            }).catch(function() {
                alert('Erro de conexão. Tente mais tarde.');
            });
        });
    }
    
});

<script>
        document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio por e-mail/recarregamento
    
    // Pega os valores digitados
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Monta a mensagem para o WhatsApp
    const texto = `Olá! Meu nome é ${nome} (${email}). %0A%0A*Minha mensagem:*%0A${mensagem}`;
    
    // SEU NÚMERO: Coloque apenas números (Código do país + DDD + Número)
    const numeroZap = "5511999999999"; 
    
    // Abre o WhatsApp em uma nova aba
    window.open(`https://wa.me/${numeroZap}?text=${texto}`, '_blank');
});
    
    // ============================================
    // CARROSSEL DE PORTFÓLIO (CORRIGIDO)
    // ============================================
    const trilho = document.getElementById('portfolio-trilho-fotos');
    const btnNext = document.getElementById('portfolio-next-btn');
    const btnPrev = document.getElementById('portfolio-prev-btn');
    
    if (trilho && btnNext && btnPrev) {
        let index = 0;
        let timer;
        const itens = trilho.querySelectorAll('.portfolio-item');
        const totalItens = itens.length;

        function getVisiveis() {
            if (window.innerWidth > 1024) return 4;
            if (window.innerWidth > 768) return 2;
            return 1;
        }

        function mover() {
            const visiveis = getVisiveis();
            const maxIndex = Math.max(0, totalItens - visiveis);
            
            // Garante que o index não ultrapasse o limite ao redimensionar
            if (index > maxIndex) index = maxIndex;
            if (index < 0) index = 0;

            const larguraItem = 100 / visiveis;
            trilho.style.transform = `translateX(-${index * larguraItem}%)`;
        }

        function proximo() {
            const visiveis = getVisiveis();
            const maxIndex = Math.max(0, totalItens - visiveis);
            
            if (index >= maxIndex) {
                index = 0; // Volta ao início
            } else {
                index++;
            }
            mover();
        }

        function anterior() {
            const visiveis = getVisiveis();
            const maxIndex = Math.max(0, totalItens - visiveis);
            
            if (index <= 0) {
                index = maxIndex; // Vai para o final
            } else {
                index--;
            }
            mover();
        }

        function reiniciarTimer() {
            clearInterval(timer);
            timer = setInterval(proximo, 3000); // 3 segundos
        }

        // Cliques nas setas
        btnNext.addEventListener('click', () => {
            proximo();
            reiniciarTimer();
        });

        btnPrev.addEventListener('click', () => {
            anterior();
            reiniciarTimer();
        });

        // Pausar ao passar o mouse
        trilho.parentElement.addEventListener('mouseenter', () => clearInterval(timer));
        trilho.parentElement.addEventListener('mouseleave', reiniciarTimer);

        // Início
        mover();
        reiniciarTimer();

        window.addEventListener('resize', mover);
    }

    // --- Mantenha o restante do seu código (Menu Mobile, Header, etc) abaixo daqui ---
    // MAS NÃO COLE CSS AQUI DENTRO!
});
