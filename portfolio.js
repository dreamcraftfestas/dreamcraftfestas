/* =========================================================
   DREAMCRAFT DECORAÇÕES
   LIGHTBOX DO PORTFÓLIO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /*
         * Seleciona todas as imagens
         * que pertencem ao portfólio.
         */

        const portfolioItems =
            document.querySelectorAll(
                ".portfolio-item[data-lightbox]"
            );


        /*
         * Se não existir nenhuma imagem,
         * encerra o script.
         */

        if (
            portfolioItems.length === 0
        ) {

            return;

        }


        /*
         * Cria o Lightbox dinamicamente.
         */

        const lightbox =
            document.createElement(
                "div"
            );


        lightbox.className =
            "portfolio-lightbox";


        lightbox.innerHTML = `

            <button
                class="portfolio-lightbox-close"
                aria-label="Fechar imagem"
            >
                ×
            </button>

            <button
                class="portfolio-lightbox-prev"
                aria-label="Imagem anterior"
            >
                ‹
            </button>

            <img
                class="portfolio-lightbox-image"
                src=""
                alt=""
            >

            <button
                class="portfolio-lightbox-next"
                aria-label="Próxima imagem"
            >
                ›
            </button>

        `;


        document.body.appendChild(
            lightbox
        );


        /*
         * Elementos internos.
         */

        const lightboxImage =
            lightbox.querySelector(
                ".portfolio-lightbox-image"
            );

        const closeButton =
            lightbox.querySelector(
                ".portfolio-lightbox-close"
            );

        const previousButton =
            lightbox.querySelector(
                ".portfolio-lightbox-prev"
            );

        const nextButton =
            lightbox.querySelector(
                ".portfolio-lightbox-next"
            );


        /*
         * Lista de imagens.
         */

        const images =
            Array.from(
                portfolioItems
            );


        /*
         * Imagem atual.
         */

        let currentIndex =
            0;


        /*
         * Abre o Lightbox.
         */

        function openLightbox(
            index
        ) {

            currentIndex =
                index;

            updateImage();

            lightbox.classList.add(
                "active"
            );

            document.body.classList.add(
                "lightbox-open"
            );

        }


        /*
         * Fecha o Lightbox.
         */

        function closeLightbox() {

            lightbox.classList.remove(
                "active"
            );

            document.body.classList.remove(
                "lightbox-open"
            );

        }


        /*
         * Atualiza a imagem.
         */

        function updateImage() {

            const item =
                images[
                    currentIndex
                ];


            const image =
                item.querySelector(
                    "img"
                );


            lightboxImage.src =
                image.src;


            lightboxImage.alt =
                image.alt;

        }


        /*
         * Próxima imagem.
         */

        function nextImage() {

            currentIndex =
                (
                    currentIndex + 1
                )
                %
                images.length;


            updateImage();

        }


        /*
         * Imagem anterior.
         */

        function previousImage() {

            currentIndex =
                (
                    currentIndex -
                    1 +
                    images.length
                )
                %
                images.length;


            updateImage();

        }


        /*
         * Clique nas imagens.
         */

        images.forEach(
            (
                item,
                index
            ) => {

                item.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        openLightbox(
                            index
                        );

                    }
                );

            }
        );


        /*
         * Fechar.
         */

        closeButton.addEventListener(
            "click",
            closeLightbox
        );


        /*
         * Próxima.
         */

        nextButton.addEventListener(
            "click",
            nextImage
        );


        /*
         * Anterior.
         */

        previousButton.addEventListener(
            "click",
            previousImage
        );


        /*
         * Clique no fundo.
         */

        lightbox.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    lightbox
                ) {

                    closeLightbox();

                }

            }
        );


        /*
         * Teclado.
         */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    !lightbox.classList.contains(
                        "active"
                    )
                ) {

                    return;

                }


                if (
                    event.key ===
                    "Escape"
                ) {

                    closeLightbox();

                }


                if (
                    event.key ===
                    "ArrowRight"
                ) {

                    nextImage();

                }


                if (
                    event.key ===
                    "ArrowLeft"
                ) {

                    previousImage();

                }

            }
        );


    }
);