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
/* ============================================
   SERVIÇOS - 5 ITENS NA MESMA LINHA
   ============================================ */

.service-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* 5 colunas iguais */
    gap: 15px; /* Espaço menor entre os cards */
    max-width: 1400px; /* Largura máxima maior */
    margin: 0 auto;
    padding: 0 10px;
}

.service-item {
    padding: 15px 12px; /* Padding reduzido */
    min-height: auto; /* Remove altura fixa */
}

.service-logo {
    width: 80px; /* Logo menor */
    height: 80px;
    margin: 0 auto 10px;
}

.service-item i {
    font-size: 2.5em; /* Ícone menor */
    margin-bottom: 10px;
}

.service-item h3 {
    font-size: 0.95em; /* Título menor */
    margin: 5px 0;
}

.service-item h4 {
    font-size: 0.85em; /* Subtítulo menor */
    margin-bottom: 8px;
}

.service-item p {
    font-size: 0.8em; /* Texto menor */
    line-height: 1.4;
    margin-bottom: 10px;
}

.service-cta {
    padding: 8px 15px; /* Botão menor */
    font-size: 0.8em;
    margin-top: 10px;
}

/* Responsivo - em telas menores vai para 2 ou 1 coluna */
@media (max-width: 1200px) {
    .service-grid {
        grid-template-columns: repeat(3, 1fr); /* 3 em cima, 2 embaixo */
    }
}

@media (max-width: 768px) {
    .service-grid {
        grid-template-columns: repeat(2, 1fr); /* 2 colunas no tablet */
    }
}

@media (max-width: 480px) {
    .service-grid {
        grid-template-columns: 1fr; /* 1 coluna no mobile */
    }
}