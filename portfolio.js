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
       LIGHTBOX
       ===================================================== */

    const links = document.querySelectorAll(".portfolio-lightbox-port");

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            /* Impede abrir a imagem como página */
            event.preventDefault();

            const imagem = this.getAttribute("href");

            const titulo =
                this.getAttribute("data-title") ||
                "Decoração DreamCraft";


            /* Cria o fundo do Lightbox */
            const modal = document.createElement("div");

            modal.className = "portfolio-lightbox-modal";


            /* Conteúdo do Lightbox */
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


            /* Impede rolagem da página */
            document.body.style.overflow = "hidden";


            /* Botão fechar */
            const fechar =
                modal.querySelector(
                    ".portfolio-lightbox-close"
                );


            fechar.addEventListener("click", function () {

                modal.remove();

                document.body.style.overflow = "";

            });


            /* Clique fora da imagem */
            modal.addEventListener("click", function (event) {

                if (event.target === modal) {

                    modal.remove();

                    document.body.style.overflow = "";

                }

            });


            /* Tecla ESC */
            function fecharComEsc(event) {

                if (event.key === "Escape") {

                    modal.remove();

                    document.body.style.overflow = "";

                    document.removeEventListener(
                        "keydown",
                        fecharComEsc
                    );

                }

            }


            document.addEventListener(
                "keydown",
                fecharComEsc
            );

        });

    });

});