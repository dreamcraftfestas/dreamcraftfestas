/* =====================================================
   PORTFÓLIO DREAMCRAFT
   FILTROS
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const filtros =
            document.querySelectorAll(
                ".portfolio-filter"
            );

        const cards =
            document.querySelectorAll(
                ".portfolio-card"
            );


        filtros.forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        const categoria =
                            this.dataset.filter;


                        /* Remove ativo */

                        filtros.forEach(
                            function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );


                        /* Ativa botão */

                        this.classList.add(
                            "active"
                        );


                        /* Filtra */

                        cards.forEach(
                            function (card) {

                                const categoriaCard =
                                    card.dataset.category;


                                if (
                                    categoria === "todos"
                                    ||
                                    categoria === categoriaCard
                                ) {

                                    card.style.display =
                                        "block";

                                    setTimeout(
                                        function () {

                                            card.style.opacity =
                                                "1";

                                        },
                                        10
                                    );

                                } else {

                                    card.style.opacity =
                                        "0";

                                    setTimeout(
                                        function () {

                                            card.style.display =
                                                "none";

                                        },
                                        250
                                    );

                                }

                            }
                        );

                    }
                );

            }
        );


        /* =================================================
           LIGHTBOX
           ================================================= */

        const imagens =
            document.querySelectorAll(
                ".portfolio-lightbox"
            );


        imagens.forEach(
            function (imagem) {

                imagem.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();


                        const src =
                            this.getAttribute(
                                "href"
                            );

                        const titulo =
                            this.dataset.title ||
                            "Decoração DreamCraft";


                        /* Overlay */

                        const lightbox =
                            document.createElement(
                                "div"
                            );


                        lightbox.className =
                            "portfolio-lightbox-modal";


                        lightbox.innerHTML = `

                            <div class="portfolio-lightbox-content">

                                <button
                                    class="portfolio-lightbox-close"
                                    aria-label="Fechar imagem"
                                >
                                    ×
                                </button>

                                <img
                                    src="${src}"
                                    alt="${titulo}"
                                >

                                <p>
                                    ${titulo}
                                </p>

                            </div>

                        `;


                        document.body.appendChild(
                            lightbox
                        );


                        /* Fechar botão */

                        const fechar =
                            lightbox.querySelector(
                                ".portfolio-lightbox-close"
                            );


                        fechar.addEventListener(
                            "click",
                            function () {

                                lightbox.remove();

                            }
                        );


                        /* Fechar clicando fora */

                        lightbox.addEventListener(
                            "click",
                            function (event) {

                                if (
                                    event.target ===
                                    lightbox
                                ) {

                                    lightbox.remove();

                                }

                            }
                        );


                        /* ESC */

                        document.addEventListener(
                            "keydown",
                            function esc(event) {

                                if (
                                    event.key ===
                                    "Escape"
                                ) {

                                    lightbox.remove();

                                    document.removeEventListener(
                                        "keydown",
                                        esc
                                    );

                                }

                            }
                        );

                    }
                );

            }
        );

    }
);