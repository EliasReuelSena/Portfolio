class header extends HTMLElement {
    connectedCallback() {
        
        const pageTitle = this.getAttribute('page-title')
        let linkPortfolio = pageTitle == 'home' ? './src/pages/portfolio/portfolio.html' : 'portfolio.html'
        

        this.innerHTML = `
            <header>
                <div class="header-main">
                    <div class="header-title">
                        <svg class="title-icon" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"></path>
                        </svg>
                        <h1 class="title-text"><a href="https://www.linkedin.com/in/elias-reuel-sena/?locale=en_US"
                                target="_blank" class="title-link">Elias Sena</a>
                        </h1>
                    </div>
                    <div class="header-options-icon">
                        <span class="header-options-icon-item a"></span>
                        <span class="header-options-icon-item b"></span>
                        <span class="header-options-icon-item c"></span>
                    </div>
                    <ul class="header-options_mobile">
                        <li class="option-mobile a">
                            <a href="../../../index.html">Homescreen</a>
                        </li>
                        <li class="option-mobile b">
                            <a href="${linkPortfolio}">Portfolio</a>
                        </li>
                        <li class="option-mobile c">
                            <a href="src/pages/contato/contato.html">Contato</a>
                        </li>
                        <li class="option-mobile d">
                            <a href="src/pages/sobre/sobre.html">Sobre</a>
                        </li>
                    </ul>
                </div>
                <ul class="header-options">
                    <li>
                        <a href="../../../index.html">Home</a>
                        <div class="line-bottom"></div>
                    </li>
                    <li>
                        <a href="src/pages/sobre/sobre.html">Sobre</a>
                        <div class="line-bottom"></div>
                    </li>
                    <li>
                        <a href="src/pages/portfolio/portfolio.html">Portfólio</a>
                        <div class="line-bottom"></div>
                    </li>
                    <li>
                        <a href="src/pages/contato/contato.html">Contato</a>
                        <div class="line-bottom"></div>
                    </li>
                </ul>
            </header>
        `;
    }
}


customElements.define('header-default', header)