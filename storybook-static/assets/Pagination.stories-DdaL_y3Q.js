const o={title:"Components/Pagination",parameters:{layout:"fullscreen"}},n="/styles/layout.css",t="/styles/pagination.css",e=()=>`
    <script>${`
    class SpainPagination extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentPage = parseInt(this.getAttribute('current-page')) || 1;
        this.totalPages = parseInt(this.getAttribute('total-pages')) || 10;
        this.showNumbers = this.getAttribute('show-numbers') === 'true';
        this.size = this.getAttribute('size') || 'm';
        this.darkTheme = this.getAttribute('dark-theme') === 'true';
      }

      static get observedAttributes() {
        return ['current-page', 'total-pages', 'show-numbers', 'size', 'dark-theme'];
      }

      attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
          this.currentPage = parseInt(this.getAttribute('current-page')) || 1;
          this.totalPages = parseInt(this.getAttribute('total-pages')) || 10;
          this.showNumbers = this.getAttribute('show-numbers') === 'true';
          this.size = this.getAttribute('size') || 'm';
          this.darkTheme = this.getAttribute('dark-theme') === 'true';
          this.render();
        }
      }

      connectedCallback() {
        this.render();
        this.setupEventListeners();
      }

      disconnectedCallback() {
        this.removeEventListeners();
      }

      setupEventListeners() {
        this.shadowRoot.addEventListener('click', this.handleClick.bind(this));
      }

      removeEventListeners() {
        this.shadowRoot.removeEventListener('click', this.handleClick.bind(this));
      }

      handleClick(e) {
        if (e.target.classList.contains('pg-btn')) {
          const action = e.target.dataset.action;
          if (action === 'prev' && this.currentPage > 1) {
            this.currentPage--;
            this.dispatchEvent(new CustomEvent('pageChange', { 
              detail: this.currentPage,
              bubbles: true 
            }));
            this.render();
          } else if (action === 'next' && this.currentPage < this.totalPages) {
            this.currentPage++;
            this.dispatchEvent(new CustomEvent('pageChange', { 
              detail: this.currentPage,
              bubbles: true 
            }));
            this.render();
          }
        }
      }

      render() {
        const isFirstPage = this.currentPage === 1;
        const isLastPage = this.currentPage === this.totalPages;
        
        // Check if this pagination is inside variants section
        const isInVariants = this.closest('.pg-variants') !== null;
        
        const paginationClass = \`pagination pg-\${this.size} \${this.darkTheme ? 'pg-dark' : ''} \${isInVariants ? 'pg-variants-pagination' : ''}\`;
        const prevBtnClass = \`pg-btn \${isFirstPage ? 'pg-gray' : 'pg-red'}\`;
        const nextBtnClass = \`pg-btn \${isLastPage ? 'pg-gray' : 'pg-red'}\`;
        
        this.shadowRoot.innerHTML = \`
          <link rel="stylesheet" href="${n}" />
          <link rel="stylesheet" href="${t}" />
          <div class="\${paginationClass}">
            <button 
              class="\${prevBtnClass}"
              data-action="prev"
              \${isFirstPage ? 'disabled' : ''}
            >
              ←
            </button>
            
            \${this.showNumbers ? \`
              <div class="pg-number">
                \${this.currentPage} - \${this.totalPages}
              </div>
            \` : ''}
            
            <button 
              class="\${nextBtnClass}"
              data-action="next"
              \${isLastPage ? 'disabled' : ''}
            >
              →
            </button>
          </div>
        \`;
      }
    }

    customElements.define('spain-pagination', SpainPagination);
  `}<\/script>
  <link rel="stylesheet" href="${n}" />
  <link rel="stylesheet" href="${t}" />
  <header class="top-nav"><div class="top-nav__inner"><div class="brand" title="Spain.info DS"></div></div></header>
  <section class="hero"><div class="container"><div class="hero__title">Pagination</div></div></section>

  <section class="intro-strip"><div class="container"><p class="intro-text">La paginación se emplea cuando se necesita dividir un gran volumen de contenido en secciones más manejables, mejorando así la navegación y el rendimiento de la interfaz.</p></div></section>

  <div class="container">
    <div class="pg-grid">
      <div class="pg-col">
        <h4>Descripción y uso</h4>
        <p>Resulta especialmente útil en listados extensos, como listados horizontales, artículos o resultados de búsqueda, donde el usuario puede avanzar o retroceder entre el contenido de manera controlada.</p>
        <h4>Comportamiento</h4>
        <p>Los botones de Siguiente y Anterior permiten navegar entre páginas de contenido de manera secuencial. Su estado depende siempre de la página en la que se encuentre el usuario:</p>
        <p><strong>Página inicial (1):</strong> el botón Anterior aparece deshabilitado. Solo estará activo el botón Siguiente.</p>
        <p><strong>Páginas intermedias (2… n-1):</strong> ambos botones están habilitados, permitiendo avanzar o retroceder libremente.</p>
        <p><strong>Página final (n):</strong> el botón Siguiente aparecerá deshabilitado, quedando únicamente activo el botón Anterior.</p>
        <h4>Variantes y estados</h4>
        <div class="pg-subtitle">Variante</div>
        <ul class="pg-list">
          <li>Sin numeración</li>
          <li>Con numeración</li>
        </ul>
        <div class="pg-subtitle">Fondo</div>
        <ul class="pg-list">
          <li>On-light</li>
          <li>On-dark</li>
        </ul>
        <div class="pg-subtitle">Size</div>
        <ul class="pg-list">
          <li>M</li>
          <li>S</li>
        </ul>
      </div>

        <div class="pg-master-block">

        <div class="pg-title">Master</div>
          <div class="pg-master-container">
          <div class="size-note">M</div>
            <div class="pg-master-example-M">
              <spain-pagination size="m" current-page="1" total-pages="10" show-numbers="false"></spain-pagination>
              <spain-pagination size="m" current-page="5" total-pages="10" show-numbers="false"></spain-pagination>
              <spain-pagination size="m" current-page="10" total-pages="10" show-numbers="false"></spain-pagination>
          </div>
          <div class="pg-swatch">
              <spain-pagination size="m" current-page="1" total-pages="10" show-numbers="false" dark-theme="true"></spain-pagination>
              <spain-pagination size="m" current-page="5" total-pages="10" show-numbers="false" dark-theme="true"></spain-pagination>
              <spain-pagination size="m" current-page="10" total-pages="10" show-numbers="false" dark-theme="true"></spain-pagination>
            </div>
          </div>

          <div class="pg-master-container">
          <div class="size-note">S</div>
            <div class="pg-master-example-S">
              <spain-pagination size="s" current-page="1" total-pages="10" show-numbers="false"></spain-pagination>
              <spain-pagination size="s" current-page="5" total-pages="10" show-numbers="false"></spain-pagination>
              <spain-pagination size="s" current-page="10" total-pages="10" show-numbers="false"></spain-pagination>
            </div>
            <div class="pg-swatch-dark">
              <spain-pagination size="s" current-page="1" total-pages="10" show-numbers="false" dark-theme="true"></spain-pagination>
              <spain-pagination size="s" current-page="5" total-pages="10" show-numbers="false" dark-theme="true"></spain-pagination>
              <spain-pagination size="s" current-page="10" total-pages="10" show-numbers="false" dark-theme="true"></spain-pagination>
          </div>
        </div>

        <div class="pg-title">Variantes</div>
        <div class="pg-variants">
          <div class="pg-variant-group">
            <div class="pg-subtitle">Sin numeración</div>
              <spain-pagination size="m" current-page="2" total-pages="10" show-numbers="false"></spain-pagination>
          </div>
          <div class="pg-variant-group">
            <div class="pg-subtitle">Con numeración</div>
              <spain-pagination size="m" current-page="2" total-pages="10" show-numbers="true"></spain-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
`;e.parameters={docs:{source:{code:'<spain-pagination size="m" current-page="2" total-pages="10" show-numbers="false"></spain-pagination>',state:"closed"}},stencil:{usage:"Paginación con dos variantes: sin numeración (solo botones) y con numeración (botones + indicador de página).",html:`<!-- Sin numeración -->
<spain-pagination size="m" show-numbers="false" current-page="2" total-pages="10"></spain-pagination>

<!-- Con numeración -->
<spain-pagination size="m" show-numbers="true" current-page="2" total-pages="10"></spain-pagination>

<!-- Tema oscuro -->
<spain-pagination size="m" show-numbers="false" current-page="2" total-pages="10" dark-theme="true"></spain-pagination>`,css:`/* Pagination Component Styles */
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.pg-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #E5E5E5;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 16px;
  color: #1B1C20;
}

.pg-btn:hover {
  border-color: #FFD300;
  background: #FFD300;
}

.pg-btn:disabled {
  background: #F5F5F5;
  color: #999;
  cursor: not-allowed;
  border-color: #E5E5E5;
}

.pg-btn.pg-red {
  background: #1B1C20;
  color: #fff;
  border-color: #1B1C20;
}

.pg-btn.pg-red:hover {
  background: #333;
  border-color: #333;
}

.pg-number {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

/* Size variants */
.pg-s .pg-btn {
  width: 32px;
  height: 32px;
  font-size: 14px;
}

.pg-s .pg-number {
  font-size: 12px;
  padding: 0 8px;
}

/* Dark theme */
.pg-dark {
  background: #1B1C20;
  color: #fff;
}

.pg-dark .pg-btn {
  background: transparent;
  color: #fff;
  border-color: #666;
}

.pg-dark .pg-btn:hover {
  background: #333;
  border-color: #fff;
}

.pg-dark .pg-btn.pg-outline-red {
  border-color: #FFD300;
  color: #FFD300;
}

.pg-dark .pg-number {
  color: #fff;
}`,tsx:`import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({ 
  tag: 'spain-pagination', 
  shadow: true,
  styleUrl: 'pagination.css'
})
export class SpainPagination {
  @Prop() size: 'm' | 's' = 'm';
  @Prop() showNumbers: boolean = false;
  @Prop() currentPage: number = 1;
  @Prop() totalPages: number = 10;
  @Prop() darkTheme: boolean = false;
  
  @Event() pageChange: EventEmitter<number>;
  
  private handlePrevious = () => {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  };
  
  private handleNext = () => {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  };
  
  render() {
    const isFirstPage = this.currentPage === 1;
    const isLastPage = this.currentPage === this.totalPages;
    const paginationClass = \`pagination pg-\${this.size} \${this.darkTheme ? 'pg-dark' : ''}\`;
    const prevBtnClass = \`pg-btn \${isFirstPage ? 'pg-gray' : 'pg-red'}\`;
    const nextBtnClass = \`pg-btn \${isLastPage ? 'pg-gray' : 'pg-red'}\`;
    
    return (
      <div class={paginationClass}>
        <button 
          class={prevBtnClass}
          disabled={isFirstPage}
          onClick={this.handlePrevious}
        >
          ←
        </button>
        
        {this.showNumbers && (
          <div class="pg-number">
            {this.currentPage} - {this.totalPages}
          </div>
        )}
        
        <button 
          class={nextBtnClass}
          disabled={isLastPage}
          onClick={this.handleNext}
        >
          →
        </button>
      </div>
    );
  }
}`}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  // Define the Stencil Web Component inline
  const script = \`
    class SpainPagination extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentPage = parseInt(this.getAttribute('current-page')) || 1;
        this.totalPages = parseInt(this.getAttribute('total-pages')) || 10;
        this.showNumbers = this.getAttribute('show-numbers') === 'true';
        this.size = this.getAttribute('size') || 'm';
        this.darkTheme = this.getAttribute('dark-theme') === 'true';
      }

      static get observedAttributes() {
        return ['current-page', 'total-pages', 'show-numbers', 'size', 'dark-theme'];
      }

      attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
          this.currentPage = parseInt(this.getAttribute('current-page')) || 1;
          this.totalPages = parseInt(this.getAttribute('total-pages')) || 10;
          this.showNumbers = this.getAttribute('show-numbers') === 'true';
          this.size = this.getAttribute('size') || 'm';
          this.darkTheme = this.getAttribute('dark-theme') === 'true';
          this.render();
        }
      }

      connectedCallback() {
        this.render();
        this.setupEventListeners();
      }

      disconnectedCallback() {
        this.removeEventListeners();
      }

      setupEventListeners() {
        this.shadowRoot.addEventListener('click', this.handleClick.bind(this));
      }

      removeEventListeners() {
        this.shadowRoot.removeEventListener('click', this.handleClick.bind(this));
      }

      handleClick(e) {
        if (e.target.classList.contains('pg-btn')) {
          const action = e.target.dataset.action;
          if (action === 'prev' && this.currentPage > 1) {
            this.currentPage--;
            this.dispatchEvent(new CustomEvent('pageChange', { 
              detail: this.currentPage,
              bubbles: true 
            }));
            this.render();
          } else if (action === 'next' && this.currentPage < this.totalPages) {
            this.currentPage++;
            this.dispatchEvent(new CustomEvent('pageChange', { 
              detail: this.currentPage,
              bubbles: true 
            }));
            this.render();
          }
        }
      }

      render() {
        const isFirstPage = this.currentPage === 1;
        const isLastPage = this.currentPage === this.totalPages;
        
        // Check if this pagination is inside variants section
        const isInVariants = this.closest('.pg-variants') !== null;
        
        const paginationClass = \\\`pagination pg-\\\${this.size} \\\${this.darkTheme ? 'pg-dark' : ''} \\\${isInVariants ? 'pg-variants-pagination' : ''}\\\`;
        const prevBtnClass = \\\`pg-btn \\\${isFirstPage ? 'pg-gray' : 'pg-red'}\\\`;
        const nextBtnClass = \\\`pg-btn \\\${isLastPage ? 'pg-gray' : 'pg-red'}\\\`;
        
        this.shadowRoot.innerHTML = \\\`
          <link rel="stylesheet" href="\${baseStylesheet}" />
          <link rel="stylesheet" href="\${stylesheet}" />
          <div class="\\\${paginationClass}">
            <button 
              class="\\\${prevBtnClass}"
              data-action="prev"
              \\\${isFirstPage ? 'disabled' : ''}
            >
              ←
            </button>
            
            \\\${this.showNumbers ? \\\`
              <div class="pg-number">
                \\\${this.currentPage} - \\\${this.totalPages}
              </div>
            \\\` : ''}
            
            <button 
              class="\\\${nextBtnClass}"
              data-action="next"
              \\\${isLastPage ? 'disabled' : ''}
            >
              →
            </button>
          </div>
        \\\`;
      }
    }

    customElements.define('spain-pagination', SpainPagination);
  \`;
  return \`
    <script>\${script}<\/script>
  <link rel="stylesheet" href="\${baseStylesheet}" />
  <link rel="stylesheet" href="\${stylesheet}" />
  <header class="top-nav"><div class="top-nav__inner"><div class="brand" title="Spain.info DS"></div></div></header>
  <section class="hero"><div class="container"><div class="hero__title">Pagination</div></div></section>

  <section class="intro-strip"><div class="container"><p class="intro-text">La paginación se emplea cuando se necesita dividir un gran volumen de contenido en secciones más manejables, mejorando así la navegación y el rendimiento de la interfaz.</p></div></section>

  <div class="container">
    <div class="pg-grid">
      <div class="pg-col">
        <h4>Descripción y uso</h4>
        <p>Resulta especialmente útil en listados extensos, como listados horizontales, artículos o resultados de búsqueda, donde el usuario puede avanzar o retroceder entre el contenido de manera controlada.</p>
        <h4>Comportamiento</h4>
        <p>Los botones de Siguiente y Anterior permiten navegar entre páginas de contenido de manera secuencial. Su estado depende siempre de la página en la que se encuentre el usuario:</p>
        <p><strong>Página inicial (1):</strong> el botón Anterior aparece deshabilitado. Solo estará activo el botón Siguiente.</p>
        <p><strong>Páginas intermedias (2… n-1):</strong> ambos botones están habilitados, permitiendo avanzar o retroceder libremente.</p>
        <p><strong>Página final (n):</strong> el botón Siguiente aparecerá deshabilitado, quedando únicamente activo el botón Anterior.</p>
        <h4>Variantes y estados</h4>
        <div class="pg-subtitle">Variante</div>
        <ul class="pg-list">
          <li>Sin numeración</li>
          <li>Con numeración</li>
        </ul>
        <div class="pg-subtitle">Fondo</div>
        <ul class="pg-list">
          <li>On-light</li>
          <li>On-dark</li>
        </ul>
        <div class="pg-subtitle">Size</div>
        <ul class="pg-list">
          <li>M</li>
          <li>S</li>
        </ul>
      </div>

        <div class="pg-master-block">

        <div class="pg-title">Master</div>
          <div class="pg-master-container">
          <div class="size-note">M</div>
            <div class="pg-master-example-M">
              <spain-pagination size="m" current-page="1" total-pages="10" show-numbers="false"></spain-pagination>
              <spain-pagination size="m" current-page="5" total-pages="10" show-numbers="false"></spain-pagination>
              <spain-pagination size="m" current-page="10" total-pages="10" show-numbers="false"></spain-pagination>
          </div>
          <div class="pg-swatch">
              <spain-pagination size="m" current-page="1" total-pages="10" show-numbers="false" dark-theme="true"></spain-pagination>
              <spain-pagination size="m" current-page="5" total-pages="10" show-numbers="false" dark-theme="true"></spain-pagination>
              <spain-pagination size="m" current-page="10" total-pages="10" show-numbers="false" dark-theme="true"></spain-pagination>
            </div>
          </div>

          <div class="pg-master-container">
          <div class="size-note">S</div>
            <div class="pg-master-example-S">
              <spain-pagination size="s" current-page="1" total-pages="10" show-numbers="false"></spain-pagination>
              <spain-pagination size="s" current-page="5" total-pages="10" show-numbers="false"></spain-pagination>
              <spain-pagination size="s" current-page="10" total-pages="10" show-numbers="false"></spain-pagination>
            </div>
            <div class="pg-swatch-dark">
              <spain-pagination size="s" current-page="1" total-pages="10" show-numbers="false" dark-theme="true"></spain-pagination>
              <spain-pagination size="s" current-page="5" total-pages="10" show-numbers="false" dark-theme="true"></spain-pagination>
              <spain-pagination size="s" current-page="10" total-pages="10" show-numbers="false" dark-theme="true"></spain-pagination>
          </div>
        </div>

        <div class="pg-title">Variantes</div>
        <div class="pg-variants">
          <div class="pg-variant-group">
            <div class="pg-subtitle">Sin numeración</div>
              <spain-pagination size="m" current-page="2" total-pages="10" show-numbers="false"></spain-pagination>
          </div>
          <div class="pg-variant-group">
            <div class="pg-subtitle">Con numeración</div>
              <spain-pagination size="m" current-page="2" total-pages="10" show-numbers="true"></spain-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
\`;
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,o as default};
