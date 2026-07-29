document.addEventListener("DOMContentLoaded", function () {

    const footerContainer = document.querySelector("#footer-container");

    if (!footerContainer) {
        return;
    }

    footerContainer.innerHTML = `
        <footer class="site-footer">

            <div class="footer-container">

                <!-- COLUNA 1 — MARCA -->

                <div class="footer-brand">

                    <a
                        href="index.html#inicio"
                        class="footer-logo"
                    >
                        <img
                            src="Logo/logo-decoracoes.png"
                            alt="DreamCraft Decorações"
                        >
                    </a>

                    <p>
                        Transformando sonhos em festas
                        inesquecíveis e criando memórias
                        para celebrar a vida.
                    </p>

                    <div class="footer-social">

                        <a
                            href="https://www.instagram.com/dreamcraftdecoracoes"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram da DreamCraft Decorações"
                        >
                            <i class="fa-brands fa-instagram"></i>
                            <span>Decorações</span>
                        </a>

                        <a
                            href="https://www.instagram.com/dreamcraftpersonalizados"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram da DreamCraft Personalizados"
                        >
                            <i class="fa-brands fa-instagram"></i>
                            <span>Personalizados</span>
                        </a>

                        <a
                            href="https://wa.me/5519993723106"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp da DreamCraft"
                        >
                            <i class="fa-brands fa-whatsapp"></i>
                            <span>WhatsApp</span>
                        </a>

                    </div>

                </div>


                <!-- COLUNA 2 — NAVEGAÇÃO -->

                <div class="footer-column">

                    <h3>
                        Navegação
                    </h3>

                    <nav class="footer-links">

                        <a href="index.html#inicio">
                            Início
                        </a>

                        <a href="index.html#sobre">
                            Sobre
                        </a>

                        <a href="index.html#servicos">
                            Decorações
                        </a>

                        <a href="index.html#portfolio">
                            Portfólio
                        </a>

                        <a href="index.html#projetos-especiais">
                            Projetos Especiais
                        </a>

                        <a href="index.html#depoimentos">
                            Depoimentos
                        </a>

                        <a href="index.html#contato">
                            Contato
                        </a>

                    </nav>

                </div>


                <!-- COLUNA 3 — SERVIÇOS -->

                <div class="footer-column">

                    <h3>
                        Nossos serviços
                    </h3>

                    <nav class="footer-links">

                        <a href="catalogo-decoracoes.html">
                            Festa na Mesa
                        </a>

                        <a href="catalogo-decoracoes.html">
                            Pegue e Monte
                        </a>

                        <a href="catalogo-festa-completa.html">
                            Festa Completa
                        </a>

                        <a href="catalogo-decoracoes.html">
                            Temas Personalizados
                        </a>

                        <a href="portfolio-apae-60-anos.html">
                            Projetos Especiais
                        </a>

                    </nav>

                </div>


                <!-- COLUNA 4 — CONTATO -->

                <div class="footer-column footer-contact">

                    <h3>
                        Vamos conversar?
                    </h3>

                    <p>
                        Entre em contato e conte
                        para nós sobre a sua festa.
                    </p>

                    <a
                        href="https://wa.me/5519993723106"
                        class="footer-contact-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i class="fa-brands fa-whatsapp"></i>
                        Falar pelo WhatsApp
                        <span>→</span>
                    </a>

                    <a
                        href="mailto:contato@dreamcraftfestas.com.br"
                        class="footer-contact-link"
                    >
                        <i class="fa-regular fa-envelope"></i>
                        contato@dreamcraftfestas.com.br
                    </a>

                </div>

            </div>


            <!-- LINHA INFERIOR -->

            <div class="footer-bottom">

                <div class="footer-bottom-container">

                    <p>
                        © ${new Date().getFullYear()}
                        DreamCraft Decorações.
                        Todos os direitos reservados.
                    </p>

                    <p>
                        Feito com carinho para celebrar
                        momentos especiais.
                    </p>

                </div>

            </div>

        </footer>
    `;

});