/* =========================================================
   PORTFÓLIO DREAMCRAFT
   Filtros + Lightbox
   Versão otimizada
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTOS
       ===================================================== */

    const filtros = document.querySelectorAll(".portfolio-filter");
    const cards = document.querySelectorAll(".portfolio-card");
    const linksLightbox = document.querySelectorAll(".portfolio-lightbox");


    /* =====================================================
       FILTROS
       ===================================================== */

    filtros.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const categoriaSelecionada =
                this.getAttribute("data-filter");


            /* Atualiza botão ativo */

            filtros.forEach(function (item) {

                item.classList.remove("active");

            });

            this.classList.add("active");


            /* Filtra os cards */

            cards.forEach(function (card) {

                const categoriaCard =
                    card.getAttribute("data-category");


                const deveMostrar =
                    categoriaSelecionada === "todos" ||
                    categoriaSelecionada === categoriaCard;


                if (deveMostrar) {

                    card.classList.remove("portfolio-card-hidden");

                } else {

                    card.classList.add("portfolio-card-hidden");

                }

            });

        });

    });



    /* =====================================================
       LIGHTBOX
       ===================================================== */

    let lightboxAtual = null;


    function abrirLightbox(src, titulo, alt) {

        /* Evita criar dois lightboxes */

        if (lightboxAtual) {

            lightboxAtual.remove();

            lightboxAtual = null;

        }


        /* Cria o modal */

        const lightbox =
            document.createElement("div");


        lightbox.className =
            "portfolio-lightbox-modal";


        lightbox.setAttribute(
            "role",
            "dialog"
        );


        lightbox.setAttribute(
            "aria-modal",
            "true"
        );


        lightbox.setAttribute(
            "aria-label",
            titulo
        );


        lightbox.innerHTML = `

            <div class="portfolio-lightbox-content">

                <button
                    type="button"
                    class="portfolio-lightbox-close"
                    aria-label="Fechar imagem"
                >
                    ×
                </button>

                <img
                    src="${src}"
                    alt="${alt}"
                    decoding="async"
                >

                <p>
                    ${titulo}
                </p>

            </div>

        `;


        document.body.appendChild(lightbox);

        lightboxAtual = lightbox;


        /* Impede o scroll da página */

        document.body.classList.add(
            "lightbox-open"
        );


        /* Foco no botão fechar */

        const botaoFechar =
            lightbox.querySelector(
                ".portfolio-lightbox-close"
            );


        botaoFechar.focus();


        /* =================================================
           FUNÇÃO FECHAR
           ================================================= */

        function fecharLightbox() {

            if (!lightboxAtual) {
                return;
            }


            lightboxAtual.remove();

            lightboxAtual = null;


            document.body.classList.remove(
                "lightbox-open"
            );

        }


        /* =================================================
           BOTÃO FECHAR
           ================================================= */

        botaoFechar.addEventListener(
            "click",
            fecharLightbox
        );


        /* =================================================
           CLICAR FORA DA IMAGEM
           ================================================= */

        lightbox.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    lightbox
                ) {

                    fecharLightbox();

                }

            }
        );


        /* =================================================
           TECLA ESC
           ================================================= */

        function teclaEscape(event) {

            if (
                event.key === "Escape"
            ) {

                fecharLightbox();

                document.removeEventListener(
                    "keydown",
                    teclaEscape
                );

            }

        }


        document.addEventListener(
            "keydown",
            teclaEscape
        );

    }



    /* =====================================================
       CLIQUE NAS IMAGENS
       ================================================= */

    linksLightbox.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const src =
                    this.getAttribute("href");


                const titulo =
                    this.getAttribute(
                        "data-title"
                    ) ||
                    "Decoração DreamCraft";


                const imagem =
                    this.querySelector("img");


                const alt =
                    imagem
                        ? imagem.getAttribute("alt")
                        : titulo;


                abrirLightbox(
                    src,
                    titulo,
                    alt
                );

            }
        );

    });


});