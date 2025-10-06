export default {
  title: 'Components/Card',
  parameters: { layout: 'fullscreen' }
};

const baseStylesheet = '/styles/layout.css';
const stylesheet = '/styles/card.css';

export const Default = () => `
  <link rel="stylesheet" href="${baseStylesheet}" />
  <link rel="stylesheet" href="${stylesheet}" />
  <script>
    // Stencil Card Component (inline para demo)
    class SpainCard extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
      
      connectedCallback() {
        this.render();
        this.setupEventListeners();
      }
      
      setupEventListeners() {
        const card = this.shadowRoot.querySelector('.card');
        if (card) {
          card.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('cardClick', {
              detail: {
                title: this.getAttribute('title'),
                url: this.getAttribute('url')
              }
            }));
          });
          
          // Add hover effects
          card.addEventListener('mouseenter', () => {
            card.classList.add('card--hover');
          });
          
          card.addEventListener('mouseleave', () => {
            card.classList.remove('card--hover');
          });
        }
      }
      
      render() {
        const title = this.getAttribute('title') || '';
        const description = this.getAttribute('description') || '';
        const image = this.getAttribute('image') || '';
        const orientation = this.getAttribute('orientation') || 'vertical';
        const size = this.getAttribute('size') || 'default';
        const background = this.getAttribute('background') || 'white';
        const variation = this.getAttribute('variation') || '';
        
        const cardClasses = \`card card--\${orientation} card--\${size} card--\${background} \${variation ? \`card--variation-\${variation}\` : ''}\`;
        
        this.shadowRoot.innerHTML = \`
          <link rel="stylesheet" href="${stylesheet}" />
          <div class="\${cardClasses}">
            \${image ? \`<img src="\${image}" alt="Card image" class="card__image" />\` : ''}
            <div class="card__content">
              \${title ? \`<h3 class="card__title">\${title}</h3>\` : ''}
              \${description ? \`<p class="card__description">\${description}</p>\` : ''}
              <slot name="content"></slot>
            </div>
          </div>
        \`;
      }
    }
    
    customElements.define('spain-card', SpainCard);
  </script>
  
  <header class="top-nav"><div class="top-nav__inner"><div class="brand" title="Spain.info DS"></div></div></header>
  <section class="hero"><div class="container"><div class="hero__title">Card-default</div></div></section>

  <section class="intro-strip"><div class="container"><p class="intro-text">Las cards-default permiten presentar información agrupada en bloques visuales claros y consistentes.</p></div></section>

  <div class="container">
    <div class="card-grid">
      <div class="card-aside">
        <h4>Descripción y uso</h4>
        <p>Las cards-default agrupan contenido relacionado en bloques visuales claros y consistentes. Pueden contener imágenes, títulos, descripciones, botones, enlaces, iconos y chips. Son ideales para mostrar colecciones de elementos similares, como productos, noticias, eventos o destinos turísticos, facilitando al usuario la comprensión y la interacción.</p>
        
        <p>Su diseño flexible facilita la inclusión de texto, imágenes y acciones en un mismo contenedor.</p>

        <h4>Comportamiento</h4>
        <ul class="card-list">
          <li>Activar click: cada tarjeta al ser clickada dirige al usuario a una nueva pantalla.</li>
          <li>El color de Background por defecto es Background 01 - White, pero debe cambiarse por Background 03 - Soft grey cuando el fondo del módulo en el que se encuentra es blanco y no tiene contraste.</li>
        </ul>

        <h4>Variantes y estados</h4>
        <p>Estados</p>
        <ul class="card-list">
          <li>Active (default)</li>
          <li>Hover</li>
        </ul>
        <p>Tamaño</p>
        <ul class="card-list">
          <li>Default</li>
          <li>Large</li>
        </ul>
        <p>Orientación</p>
        <ul class="card-list">
          <li>Horizontal</li>
          <li>Vertical</li>
        </ul>
        <p>Background color</p>
        <ul class="card-list">
          <li>Background 01 - White</li>
          <li>Background 03 - Soft Grey</li>
        </ul>
      </div>

      <div class="card-content">
        <div class="card-title">Master</div>
        <div class="card-master-grid">
          <spain-card 
            title="El norte por explorar" 
            description="Montañas, costas bravas y un clima refrescante. Otra forma de hacer turismo por España." 
            image="/images/imgCard1.png" 
            orientation="vertical"
            variation="small">
          </spain-card>
          
          <spain-card 
            title="El norte por explorar" 
            description="Montañas, costas bravas y un clima refrescante. Otra forma de hacer turismo por España." 
            image="/images/imgCard1.png" 
            orientation="vertical"
            variation="small">
          </spain-card>
          
          <spain-card 
            title="El norte por explorar" 
            description="Montañas, costas bravas y un clima refrescante. Otra forma de hacer turismo por España." 
            image="/images/imgCard2.png" 
            orientation="vertical"
            variation="row2">
          </spain-card>
          
          <spain-card 
            title="El norte por explorar" 
            description="Montañas, costas bravas y un clima refrescante. Otra forma de hacer turismo por España." 
            image="/images/imgCard2.png" 
            orientation="vertical"
            variation="row2">
          </spain-card>
          
          <div class="card card--horizontal card--large card--static">
            <img src="/images/imgCard1.png" alt="Card image" class="card__image" />
            <div class="card__content">
              <h3 class="card__title">Cimadevilla milenaria</h3>
              <p class="card__description">Calles empedradas, vestigios romanos y el pulso del Cantábrico. Otra forma de hacer turismo por España.</p>
            </div>
          </div>
          
          <div class="card card--horizontal card--large card--static">
            <img src="/images/imgCard1.png" alt="Card image" class="card__image" />
            <div class="card__content">
              <h3 class="card__title">Cimadevilla milenaria</h3>
              <p class="card__description">Calles empedradas, vestigios romanos y el pulso del Cantábrico. Otra forma de hacer turismo por España.</p>
            </div>
          </div>
        </div>

        <div class="card-title">Variaciones</div>
        <div class="card-variations-grid">
          <!-- Primera fila - 2 cards de 255px altura imagen, 415px altura card -->
          <div class="card card--vertical card--variation-small">
            <img src="/images/imgCard1.png" alt="Card image" class="card__image" />
            <div class="card__content">
              <h3 class="card__title">El norte por explorar</h3>
              <p class="card__description">Montañas, costas bravas y un clima refrescante. Otra forma de hacer turismo por España.</p>
            </div>
          </div>
          
          <div class="card card--vertical card--variation-small">
            <img src="/images/imgCard1.png" alt="Card image" class="card__image" />
            <div class="card__content">
              <h3 class="card__title">El norte por explorar</h3>
              <p class="card__description">Montañas, costas bravas y un clima refrescante. Otra forma de hacer turismo por España.</p>
            </div>
          </div>
          
          <!-- Segunda fila - 2 cards de 453px altura imagen, 613px altura card -->
          <div class="card card--vertical card--variation-row2">
            <img src="/images/imgCard2.png" alt="Card image" class="card__image" />
            <div class="card__content">
              <h3 class="card__title">El norte por explorar</h3>
              <p class="card__description">Montañas, costas bravas y un clima refrescante. Otra forma de hacer turismo por España.</p>
            </div>
          </div>
          
          <div class="card card--vertical card--variation-row2">
            <img src="/images/imgCard2.png" alt="Card image" class="card__image" />
            <div class="card__content">
              <h3 class="card__title">El norte por explorar</h3>
              <p class="card__description">Montañas, costas bravas y un clima refrescante. Otra forma de hacer turismo por España.</p>
            </div>
          </div>
          
          <!-- Tercera fila - 2 cards horizontales de 620x104px -->
          <div class="card card--horizontal card--variation-horizontal">
            <img src="/images/imgCard1.png" alt="Card image" class="card__image" />
            <div class="card__content">
              <h3 class="card__title">Cimadevilla milenaria</h3>
              <p class="card__description">Calles empedradas, vestigios romanos y el pulso del Cantábrico. Otra forma de hacer turismo por España.</p>
            </div>
          </div>
          
          <div class="card card--horizontal card--variation-horizontal">
            <img src="/images/imgCard1.png" alt="Card image" class="card__image" />
            <div class="card__content">
              <h3 class="card__title">Cimadevilla milenaria</h3>
              <p class="card__description">Calles empedradas, vestigios romanos y el pulso del Cantábrico. Otra forma de hacer turismo por España.</p>
            </div>
          </div>
        </div>

        <div class="card-title card-title--full">Propiedades</div>
        <div class="card-properties">
          <table class="card-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Valor</th>
                <th>Contenido</th>
                <th>Ayuda</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Title</td>
                <td>Obligatorio</td>
                <td>Max. 90 caracteres</td>
                <td>Título de la card. Obligatorio.</td>
              </tr>
              <tr>
                <td>Subtítulo</td>
                <td>Opcional</td>
                <td>Max. 100 caracteres</td>
                <td>Subtítulo de la card, opcional.</td>
              </tr>
              <tr>
                <td>Image</td>
                <td>Obligatorio</td>
                <td>-</td>
                <td>Imagen del destino o servicio.</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>Opcional</td>
                <td>Formato DD/MM/AAAA</td>
                <td>Fecha o rango de fechas del evento.</td>
              </tr>
              <tr>
                <td>Chip</td>
                <td>Opcional</td>
                <td>Categoría de la comunidad</td>
                <td>Chip para la card (ej. playa, montaña).</td>
              </tr>
              <tr>
                <td>URL</td>
                <td>Obligatorio</td>
                <td>Max. 90 caracteres</td>
                <td>URL de la card (ej. destino, evento).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
`;

Default.parameters = {
  docs: { source: { code: '<div class="card"><img class="card__image" /><div class="card__content"><h3 class="card__title">Title</h3></div></div>', state: 'closed' } },
  stencil: {
    usage: 'Use the Card as a Stencil component in HTML or JSX.',
    html: '<spain-card title="El norte por explorar" description="Montañas, costas bravas y un clima refrescante." image="/images/imgCard1.png" orientation="vertical"></spain-card>',
    css: `.card{display:flex;flex-direction:column;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);transition:all 0.2s;cursor:pointer}
.card:hover{transform:translateY(-2px);box-shadow:0 4px 16px rgba(0,0,0,0.15)}
.card--horizontal{flex-direction:row}
.card--large{width:620px;height:104px}
.card__image{width:100%;height:200px;object-fit:cover}
.card--horizontal .card__image{width:200px;height:100%}
.card--large .card__image{width:200px;height:104px}
.card__content{padding:16px;flex:1}
.card--large .card__content{padding:12px 16px}
.card__title{font-size:18px;font-weight:600;color:#1B1C20;margin:0 0 8px 0}
.card--large .card__title{font-size:16px;margin:0 0 4px 0}
.card__description{font-size:14px;color:#666;line-height:1.4;margin:0}
.card--large .card__description{font-size:12px;line-height:1.3}
`,
    tsx: `
import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({ tag: 'spain-card', styleUrl: 'card.css', shadow: true })
export class SpainCard {
  @Prop() title: string;
  @Prop() description: string;
  @Prop() image: string;
  @Prop() orientation: 'vertical' | 'horizontal' = 'vertical';
  @Prop() size: 'default' | 'large' = 'default';
  @Prop() background: 'white' | 'soft-grey' = 'white';
  
  @Event() cardClick: EventEmitter<{title: string, url: string}>;
  
  private handleClick = () => {
    this.cardClick.emit({
      title: this.title,
      url: this.getAttribute('url') || ''
    });
  };
  
  render() {
    const cardClass = \`card card--\${this.orientation} card--\${this.size} card--\${this.background}\`;
    
    return (
      <div class={cardClass} onClick={this.handleClick}>
        {this.image && <img src={this.image} alt="Card image" class="card__image" />}
        <div class="card__content">
          {this.title && <h3 class="card__title">{this.title}</h3>}
          {this.description && <p class="card__description">{this.description}</p>}
          <slot name="content" />
        </div>
      </div>
    );
  }
}
`
  }
};
