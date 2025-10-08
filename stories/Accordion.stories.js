export default {
  title: 'Components/Accordion',
  parameters: { layout: 'fullscreen' }
};

const baseStylesheet = 'styles/layout.css';
const stylesheet = 'styles/accordion.css';


export const Default = () => `
  <link rel="stylesheet" href="${baseStylesheet}" />
  <link rel="stylesheet" href="${stylesheet}" />
  <script>
    class SpainAccordionItem extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.open = false;
      }
      
      connectedCallback() {
        this.render();
        this.addEventListener('click', this.toggle.bind(this));
      }
      
      toggle() {
        this.open = !this.open;
        this.render();
      }
      
      render() {
        this.shadowRoot.innerHTML = \`
          <link rel="stylesheet" href="${stylesheet}" />
          <div class="accordion__item \${this.open ? 'open' : ''}">
            <span class="accordion__label">\${this.getAttribute('label') || 'Accordion Item'}</span>
            <img class="accordion__icon" src="\${this.open ? '/images/circle-minus.svg' : '/images/circle-plus.svg'}" alt="toggle" />
          </div>
          <div class="accordion__panel" style="display: \${this.open ? 'block' : 'none'}">
            <slot></slot>
          </div>
        \`;
      }
    }
    
    customElements.define('spain-accordion-item', SpainAccordionItem);
  </script>

  <header class="top-nav">
    <div class="top-nav__inner">
      <div class="brand" title="Spain.info DS"></div>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero__title">Accordion</div>
    </div>
  </section>

  <div class="container">
    <div class="description">
      <div class="description-title">Descripción y uso</div>
      <p>El acordeón permite mostrar y ocultar secciones de contenido de forma vertical, optimizando el espacio en pantalla...</p>
    </div>

    <div class="spec-grid">
      <div class="spec-label">Comportamiento</div>
      <div class="spec-value spec-accordion">
        <spain-accordion-item label="¿Qué es y cómo recuperar el IVA?"></spain-accordion-item>
      </div>

      <div class="spec-label">Variantes y estados</div>
      <div class="spec-value">
        <ul>
          <li>Closed (default)</li>
          <li>Hover</li>
          <li>Opened</li>
        </ul>
      </div>

      <div class="spec-label">Ejemplo</div>
      <div class="spec-value spec-accordion">
        <spain-accordion-item label="¿Qué es y cómo recuperar el IVA?">
          <p>El IVA o impuesto de valor añadido es un impuesto indirecto que grava el consumo final de productos y servicios. Todos los residentes fuera de la Unión Europea pueden solicitar la devolución del importe derivado de compras ocasionales de artículos de uso personal o para regalo.</p>
          <div class="acc-chip">Llegar en coche</div>
          <div class="acc-chip">Llegar en avión</div>
        </spain-accordion-item>
      </div>
    </div>
  </div>
`;

Default.parameters = {
  docs: { source: { code: '<div class="accordion__item">¿Qué es y cómo recuperar el IVA?</div>', state: 'closed' } },
  stencil: {
    html: '<spain-accordion><spain-accordion-item label="¿Qué es y cómo recuperar el IVA?">Contenido del panel</spain-accordion-item></spain-accordion>',
    css: `
.accordion {
  width: 100%;
}

.accordion__item {
  background: #F5F5F5;
  border-radius: 40px;
  padding: 8px 16px;
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  transition: background .2s, border-color .2s;
  cursor: pointer;
}

.accordion__item:hover {
  background: #FFD300;
  border-color: #FFD300;
}

.accordion__item.open {
  background: #fff;
  border: 1px solid #E5E5E5;
}

.accordion__label {
  font-weight: 600;
  color: #1D1C20;
}

.accordion__icon {
  width: 20px;
  height: 20px;
}

.accordion__panel {
  display: none;
  padding: 12px 16px 0 16px;
  color: #1D1C20;
}

.accordion__item.open + .accordion__panel {
  display: block;
}

.accordion__chip {
  background: #F5F5F5;
  border-radius: 40px;
  padding: 8px 16px;
  display: inline-block;
  margin: 8px 8px 0 0;
  color: #1D1C20;
  transition: background .2s;
  cursor: pointer;
}

.accordion__chip:hover {
  background: #FFD300;
}
`,
    tsx: `
import { Component, h, Prop, State } from '@stencil/core';

@Component({ tag: 'spain-accordion-item', shadow: true })
export class SpainAccordionItem {
  @Prop() label: string;
  @State() open = false;
  
  private toggle = () => (this.open = !this.open);
  
  render() {
    return (
      <div>
        <button 
          class={\`accordion__item \${this.open ? 'open' : ''}\`} 
          onClick={this.toggle}
        >
          <span class="accordion__label">{this.label}</span>
          <img 
            class="accordion__icon" 
            src={this.open ? '/images/circle-minus.svg' : '/images/circle-plus.svg'} 
            alt="toggle" 
          />
        </button>
        <div class="accordion__panel" role="region" hidden={!this.open}>
          <slot />
        </div>
      </div>
    );
  }
}

@Component({ tag: 'spain-accordion', shadow: true })
export class SpainAccordion {
  render() {
    return <div class="accordion"><slot /></div>;
  }
}
`
  }
};