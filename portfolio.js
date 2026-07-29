document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       FILTROS DO PORTFÓLIO
       ===================================================== */

    const filtros = document.querySelectorAll(".portfolio-filter");
    const cards = document.querySelectorAll(".portfolio-card");

    filtros.forEach(function (botao) {
        botao.addEventListener("click", function () {
            const categoria = this.dataset.filter;

            filtros.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

            cards.forEach(function (card) {
                const categoriaCard = card.dataset.category;

                if (categoria === "todos" || categoria === categoriaCard) {
                    card.classList.remove("portfolio-hidden");
                } else {
                    card.classList.add("portfolio-hidden");
                }
            });
        });
    });


    /* =====================================================
       LIGHTBOX (MODAL DE ZOOM)
       ===================================================== */

    // Seleciona os containers das fotos ou links antigos
    const elementosFoto = document.querySelectorAll(".portfolio-card-media, .portfolio-lightbox-port, .portfolio-card");

    elementosFoto.forEach(function (elemento) {

        elemento.addEventListener("click", function (event) {

            // Trava qualquer navegação de link no navegador
            event.preventDefault();
            event.stopPropagation();

            // Pega o caminho da imagem e o título
            const imgTag = this.querySelector("img");
            const imagem = this.getAttribute("data-src") || this.getAttribute("href") || (imgTag ? imgTag.src : "");
            const titulo = this.getAttribute("data-title") || (imgTag ? imgTag.alt : "Decoração DreamCraft");

            if (!imagem) return;

            // Cria o Modal
            const modal = document.createElement("div");
            modal.className = "portfolio-lightbox-modal";

            modal.innerHTML = `
                <div class="portfolio-lightbox-content">
                    <button type="button" class="portfolio-lightbox-close" aria-label="Fechar imagem">&times;</button>
                    <img src="${imagem}" alt="${titulo}">
                    <p>${titulo}</p>
                </div>
            `;

            document.body.appendChild(modal);
            document.body.style.overflow = "hidden"; // Trava o scroll da página

            // Função para fechar o modal
            function fecharModal() {
                modal.remove();
                document.body.style.overflow = "";
                document.removeEventListener("keydown", fecharComEsc);
            }

            // 1. Fechar no X
            const botaoFechar = modal.querySelector(".portfolio-lightbox-close");
            botaoFechar.addEventListener("click", function (e) {
                e.stopPropagation();
                fecharModal();
            });

            // 2. Fechar clicando fora da imagem (no fundo escuro)
            modal.addEventListener("click", function (e) {
                if (e.target === modal) {
                    fecharModal();
                }
            });

            // 3. Fechar com a tecla ESC
            function fecharComEsc(e) {
                if (e.key === "Escape") {
                    fecharModal();
                }
            }

            document.addEventListener("keydown", fecharComEsc);

        });

    });

});