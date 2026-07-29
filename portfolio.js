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


    /* =================================================
   FILTRO DOS CARDS
   ================================================= */

cards.forEach(function (card) {

    const categoriaCard =
        card.dataset.category;

    if (
        categoria === "todos" ||
        categoria === categoriaCard
    ) {

        card.style.display = "block";

        requestAnimationFrame(function () {
            card.style.opacity = "1";
        });

    } else {

        card.style.opacity = "0";

        setTimeout(function () {

            card.style.display = "none";

        }, 300);

    }

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