export default {
  title: 'Components/Alert',
  parameters: { layout: 'fullscreen' }
};

const baseStylesheet = '/styles/layout.css';
const stylesheet = '/styles/alert.css';

export const Default = () => `
  <link rel="stylesheet" href="${baseStylesheet}" />
  <link rel="stylesheet" href="${stylesheet}" />
  <script>
    // Stencil Alert Component (inline para demo)
    class SpainAlert extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
      
      connectedCallback() {
        this.render();
        this.setupEventListeners();
      }
      
      setupEventListeners() {
        const closeBtn = this.shadowRoot.querySelector('.alert-close');
        const actionBtn = this.shadowRoot.querySelector('.alert-btn');
        
        if (closeBtn) {
          closeBtn.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('close'));
          });
        }
        
        if (actionBtn) {
          actionBtn.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('buttonClick'));
          });
        }
      }
      
      render() {
        const variant = this.getAttribute('variant') || 'normal';
        const title = this.getAttribute('title') || '';
        const description = this.getAttribute('description') || '';
        const showClose = this.getAttribute('show-close') === 'true';
        const showButton = this.getAttribute('show-button') === 'true';
        const buttonText = this.getAttribute('button-text') || 'Button';
        const leadingIcon = this.getAttribute('leading-icon') || '';
        
        this.shadowRoot.innerHTML = \`
          <link rel="stylesheet" href="${stylesheet}" />
          <div class="alert-card alert-\${variant}">
            \${leadingIcon ? \`<span class="alert-icon">\${leadingIcon}</span>\` : ''}
            <div class="alert-body">
              \${title ? \`<div class="alert-title">\${title}</div>\` : ''}
              \${description ? \`<div class="alert-desc">\${description}</div>\` : ''}
            </div>
            <div class="flex-row-8">
              \${showButton ? \`<button class="alert-btn">\${buttonText}</button>\` : ''}
              \${showClose ? \`<button class="alert-close">×</button>\` : ''}
            </div>
          </div>
        \`;
      }
    }
    
    customElements.define('spain-alert', SpainAlert);
  </script>

  <header class="top-nav">
    <div class="top-nav__inner">
      <div class="brand" title="Spain.info DS"></div>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero__title">Alert</div>
    </div>
  </section>

  <div class="container alert-page">
    <div class="description">
      <div class="description-title">Descripción y uso</div>
        <p>Puede emplearse para indicar errores, advertencias, confirmaciones de éxito o información relevante que influya en la interacción. Su diseño debe ser claro y diferenciarse visualmente según el tipo de mensaje. No se recomienda utilizar las alertas para contenidos secundarios o mensajes de poca importancia, ya que perderían eficacia y podrían generar fatiga visual en la experiencia del usuario.</p>
    </div>

    <div class="alert-grid">
      <div class="alert-col">

        <div class="alert-title">Comportamiento</div>
        <p>Puede contener un título, descripción, icono, botón de acción e icono para cerrar; el componente es configurable y permite añadir estos elementos de forma opcional según el caso de uso.</p>

        <div class="alert-title">Variantes y estados</div>
        <ul class="alert-list">
          <li>Brand</li>
          <li>Normal</li>
          <li>Info</li>
          <li>Warning</li>
          <li>Error</li>
          <li>Success</li>
        </ul>

        <div class="alert-title">Propiedades</div>
        <ul class="alert-list">
          <li>Body</li>
          <li>Description</li>
          <li>Close Icon</li>
          <li>Button</li>
          <li>Leading Icon</li>
        </ul>
      </div>

      <div>
        <div class="alert-row">
          <div class="alert-variant-label">Brand</div>
          <spain-alert variant="brand" title="Title" description="Description" show-button="true" show-close="true"></spain-alert>
        </div>

        <div class="alert-row mt-12">
          <div class="alert-variant-label">Normal</div>
          <spain-alert variant="normal" title="Title" description="Description" show-button="true" show-close="true"></spain-alert>
        </div>

        <div class="alert-row mt-12">
          <div class="alert-variant-label">Info</div>
          <spain-alert variant="info" title="Title" description="Description" show-button="true" show-close="true"></spain-alert>
        </div>

        <div class="alert-row mt-12">
          <div class="alert-variant-label">Warning</div>
          <spain-alert variant="warning" title="Title" description="Description" show-button="true" show-close="true"></spain-alert>
        </div>

        <div class="alert-row mt-12">
          <div class="alert-variant-label">Error</div>
          <spain-alert variant="error" title="Title" description="Description" show-button="true" show-close="true"></spain-alert>
        </div>

        <div class="alert-row mt-12">
          <div class="alert-variant-label">Success</div>
          <spain-alert variant="success" title="Title" description="Description" show-button="true" show-close="true"></spain-alert>
        </div>

        <div class="alert-row example">
          <div class="alert-variant-label">Ejemplo</div>
          <spain-alert variant="success" title="Congratulations!" description="You successfully subscribed to our newsletter." show-close="true" leading-icon="✓"></spain-alert>
        </div>
      </div>

      <div></div>
    </div>
  </div>
`;

Default.parameters = {
  docs: { source: { code: '<div class="alert-card alert-success"><div class="alert-title">Title</div><div class="alert-desc">Description</div></div>', state: 'closed' } },
  stencil: {
    usage: 'Ejemplo de cómo usar el Alert como Web Component de Stencil con diferentes variantes.',
    html: '<spain-alert variant="success" title="Congratulations!" description="You successfully subscribed to our newsletter." show-close="true"></spain-alert>',
    css: `.alert-card{display:flex;gap:12px;align-items:flex-start;padding:16px;border-radius:12px;background:#FFFFFF;border:1px solid #E5E5E5}
.alert-card.alert-success{border-color:#22C55E}
.alert-title{font-weight:700;color:#1B1C20}
.alert-desc{color:#4A4A4A}
.alert-btn{background:#1B1C20;color:#fff;border:none;border-radius:24px;padding:6px 12px}
.alert-close{background:transparent;border:none;font-size:18px}
`,
    tsx: `
import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({ tag: 'spain-alert', shadow: true })
export class SpainAlert {
  @Prop() variant: 'brand' | 'normal' | 'info' | 'warning' | 'error' | 'success' = 'normal';
  @Prop() title: string = '';
  @Prop() description: string = '';
  @Prop() showClose: boolean = false;
  @Prop() showButton: boolean = false;
  @Prop() buttonText: string = 'Button';
  @Prop() leadingIcon: string = '';
  
  @Event() close: EventEmitter<void>;
  @Event() buttonClick: EventEmitter<void>;
  
  private handleClose = () => {
    this.close.emit();
  };
  
  private handleButtonClick = () => {
    this.buttonClick.emit();
  };
  
  render() {
    const alertClass = \`alert-card alert-\${this.variant}\`;
    
    return (
      <div class={alertClass}>
        {this.leadingIcon && <span class="alert-icon">{this.leadingIcon}</span>}
        
        <div class="alert-body">
          {this.title && <div class="alert-title">{this.title}</div>}
          {this.description && <div class="alert-desc">{this.description}</div>}
        </div>
        
        <div class="flex-row-8">
          {this.showButton && (
            <button class="alert-btn" onClick={this.handleButtonClick}>
              {this.buttonText}
            </button>
          )}
          {this.showClose && (
            <button class="alert-close" onClick={this.handleClose}>×</button>
          )}
        </div>
      </div>
    );
  }
}
`
  }
};
