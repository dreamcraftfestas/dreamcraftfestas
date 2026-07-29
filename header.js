document.addEventListener("DOMContentLoaded", function () {

    /*
    ============================================================
    HEADER REUTILIZÁVEL — DREAMCRAFT DECORAÇÕES
    ============================================================

    Este arquivo é responsável por:

    1. Criar o Header automaticamente
    2. Criar o menu de navegação
    3. Controlar o menu mobile
    4. Controlar o Header durante o scroll
    5. Ajustar os links para Home e páginas internas
    ============================================================
    */


    /*
    ============================================================
    1. LOCALIZA O CONTAINER DO HEADER
    ============================================================
    */

    const headerContainer = document.querySelector("#header-container");


    /*
    Se a página não tiver o container,
    encerra o script.
    */

    if (!headerContainer) {
        return;
    }


    /*
    ============================================================
    2. IDENTIFICA SE ESTAMOS NA HOME
    ============================================================
    */

    const isHomePage =
        window.location.pathname.endsWith("index.html") ||
        window.location.pathname === "/" ||
        window.location.pathname.endsWith("/");


    /*
    ============================================================
    3. DEFINE OS LINKS DE NAVEGAÇÃO
    ============================================================
    */

    const homePrefix = isHomePage
        ? ""
        : "index.html";


    /*
    ============================================================
    4. CRIA O HEADER
    ============================================================
    */

    headerContainer.innerHTML = `

        <header class="header">

            <!-- LOGO -->

            <a
                href="${homePrefix}#inicio"
                class="header-logo"
                aria-label="DreamCraft Decorações - Página inicial"
            >

                <img
                    src="Logo/logo-festas.png"
                    alt="DreamCraft Decorações"
                >

            </a>


            <!-- MENU PRINCIPAL -->

            <nav
                class="nav-menu"
                id="nav-menu"
                aria-label="Navegação principal"
            >

                <a href="${homePrefix}#inicio">
                    Início
                </a>

                <a href="${homePrefix}#sobre">
                    Sobre
                </a>

                <a href="${homePrefix}#servicos">
                    Serviços
                </a>

                <a href="${homePrefix}#portfolio">
                    Portfólio
                </a>

                <a href="${homePrefix}#projetos-especiais">
                    Projetos Especiais
                </a>

                <a href="${homePrefix}#contato">
                    Contato
                </a>

            </nav>


            <!-- BOTÃO MENU MOBILE -->

            <button
                class="nav-toggle"
                id="nav-toggle"
                type="button"
                aria-label="Abrir menu"
                aria-expanded="false"
                aria-controls="nav-menu"
            >

                <i class="fa-solid fa-bars"></i>

            </button>

        </header>

    `;


    /*
    ============================================================
    5. LOCALIZA ELEMENTOS
    ============================================================
    */

    const header = document.querySelector(".header");

    const navMenu = document.querySelector("#nav-menu");

    const navToggle = document.querySelector("#nav-toggle");


    /*
    ============================================================
    6. MENU MOBILE
    ============================================================
    */

    if (navToggle && navMenu) {

        navToggle.addEventListener("click", function () {

            const isOpen =
                navMenu.classList.toggle("active");


            /*
            Atualiza acessibilidade
            */

            navToggle.setAttribute(
                "aria-expanded",
                isOpen
            );


            /*
            Troca o ícone:

            fechado = barras
            aberto = X
            */

            const icon =
                navToggle.querySelector("i");


            if (icon) {

                if (isOpen) {

                    icon.classList.remove(
                        "fa-bars"
                    );

                    icon.classList.add(
                        "fa-xmark"
                    );

                    navToggle.setAttribute(
                        "aria-label",
                        "Fechar menu"
                    );

                } else {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                    navToggle.setAttribute(
                        "aria-label",
                        "Abrir menu"
                    );

                }

            }

        });


        /*
        ========================================================
        Fecha o menu quando o usuário clica em um link
        ========================================================
        */

        const navLinks =
            navMenu.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navMenu.classList.remove(
                        "active"
                    );


                    navToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    const icon =
                        navToggle.querySelector("i");


                    if (icon) {

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }


                    navToggle.setAttribute(
                        "aria-label",
                        "Abrir menu"
                    );

                }
            );

        });

    }


    /*
    ============================================================
    7. HEADER DURANTE O SCROLL
    ============================================================
    */

    if (header) {

        const scrollLimit = 50;


        function updateHeader() {

            if (window.scrollY > scrollLimit) {

                header.classList.add(
                    "header-scrolled"
                );

            } else {

                header.classList.remove(
                    "header-scrolled"
                );

            }

        }


        window.addEventListener(
            "scroll",
            updateHeader,
            {
                passive: true
            }
        );


        /*
        Executa uma vez ao carregar
        */

        updateHeader();

    }

});