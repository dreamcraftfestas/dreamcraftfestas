document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       FILTROS DO PORTFÓLIO
       ===================================================== */

    const filtros = document.querySelectorAll(".portfolio-filter");
    const cards = document.querySelectorAll(".portfolio-card");

    filtros.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const categoria = this.dataset.filter;

            /* Remove ativo de todos */
            filtros.forEach(function (item) {
                item.classList.remove("active");
            });

            /* Ativa o botão clicado */
            this.classList.add("active");

            /* Filtra os cards */
            cards.forEach(function (card) {

                const categoriaCard = card.dataset.category;

                if (
                    categoria === "todos" ||
                    categoria === categoriaCard
                ) {

                    card.classList.remove("portfolio-hidden");

                } else {

                    card.classList.add("portfolio-hidden");

                }

            });

        });

    });


    /* =====================================================
       LIGHTBOX (AMPLIAR IMAGEM)
       ===================================================== */

    /* Atualizado para capturar ambas as classes de link/card */
    const links = document.querySelectorAll(".portfolio-lightbox-port, .portfolio-card-media");

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            /* IMPEDE a imagem de abrir em uma nova página */
            event.preventDefault();

            /* Pega o caminho da imagem e o título/legenda */
            const imagem = this.getAttribute("href") || this.querySelector("img").src;

            const titulo =
                this.getAttribute("data-title") ||
                this.querySelector("img").alt ||
                "Decoração DreamCraft";


            /* Cria o fundo do Lightbox (Modal) */
            const modal = document.createElement("div");

            modal.className = "portfolio-lightbox-modal";


            /* Conteúdo do Lightbox com o Botão X */
            modal.innerHTML = `

                <div class="portfolio-lightbox-content">

                    <button
                        type="button"
                        class="portfolio-lightbox-close"
                        aria-label="Fechar imagem"
                    >
                        ×
                    </button>

                    <img
                        src="${imagem}"
                        alt="${titulo}"
                    >

                    <p>
                        ${titulo}
                    </p>

                </div>

            `;


            /* Adiciona na página */
            document.body.appendChild(modal);


            /* Trava a rolagem do fundo enquanto a foto estiver aberta */
            document.body.style.overflow = "hidden";


            /* Função para remover o modal e destravar a rolagem */
            function fecharModal() {
                modal.remove();
                document.body.style.overflow = "";
                document.removeEventListener("keydown", fecharComEsc);
            }


            /* 1. Botão Fechar (X) */
            const fechar = modal.querySelector(".portfolio-lightbox-close");

            fechar.addEventListener("click", function (e) {
                e.stopPropagation();
                fecharModal();
            });


            /* 2. Clique fora da imagem (Fundo escuro) */
            modal.addEventListener("click", function (event) {

                if (event.target === modal) {
                    fecharModal();
                }

            });


            /* 3. Tecla ESC do teclado */
            function fecharComEsc(event) {

                if (event.key === "Escape") {
                    fecharModal();
                }

            }

            document.addEventListener("keydown", fecharComEsc);

        });

    });

});