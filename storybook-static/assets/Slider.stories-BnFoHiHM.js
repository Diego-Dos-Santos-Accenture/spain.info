const l={title:"Components/Slider",parameters:{layout:"fullscreen"}},n="/styles/slider.css",r="/styles/layout.css";function a(){return`
  <link rel="stylesheet" href="${r}" />
  <link rel="stylesheet" href="${n}" />

  <header class="top-nav">
    <div class="top-nav__inner">
      <div class="brand" title="Spain.info DS"></div>
    </div>
  </header>

  <section class="hero"><div class="container"><div class="hero__title">Slider</div></div></section>

  <section class="intro-strip"><div class="container"><p class="intro-text">El Slider es un componente interactivo que permite al usuario explorar y navegar por un conjunto de elementos de manera secuencial y dinámica dentro de un espacio reducido.</p></div></section>

  <main class="main">
    <div class="container">
      <div class="section">
        <div class="section-row">
          <div class="section-aside">
            <h2>Descripción y uso</h2>
            <p>Este componente está diseñado para mostrar contenido en formato horizontal, facilitando el recorrido de elementos como imágenes, tarjetas o testimonios.</p>
            <p>Su uso está asociado al componente "Carousel"</p>

            <h2>Comportamiento</h2>
            <p>El Slider se compone de dos elementos principales que trabajan de forma conjunta para guiar al usuario en la navegación:</p>
            <ul>
              <li>Barra de progreso informa visualmente de la ubicación actual dentro del conjunto de elementos. Esta barra únicamente se visualizará en desktop.</li>
              <li>Componente Pagination que permite al usuario moverse entre dichos elementos.</li>
            </ul>

            <h2>Variantes y estados</h2>
            <h3>Variantes</h3>
            <ul>
              <li>Paginación inicial</li>
              <li>Paginación intermedia</li>
              <li>Paginación final</li>
            </ul>
          </div>

          <div class="section-content">
            <div class="slider-master">
              <div class="slider-title">Master</div>
              
              <div class="slider-examples">
                <img src="/images/Slider.png" alt="Slider Master" />

                <h4>Example</h4>
                <div class="slider-progress-demo"><spain-progress-3 step="1"></spain-progress-3></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <script>
    (function(){
      class SpainProgress3 extends HTMLElement {
        static get observedAttributes(){ return ['step']; }
        constructor(){
          super();
          this.attachShadow({mode:'open'});
          this.step = parseInt(this.getAttribute('step')) || 1;
        }
        connectedCallback(){ this.render(); this.bind(); }
        attributeChangedCallback(){ this.step = parseInt(this.getAttribute('step')) || 1; this.update(); }
        bind(){
          const prev = this.shadowRoot.querySelector('[data-prev]');
          const next = this.shadowRoot.querySelector('[data-next]');
          prev.addEventListener('click',()=>{ if(this.step>1){ this.step--; this.setAttribute('step', String(this.step)); this.dispatch(); }});
          next.addEventListener('click',()=>{ if(this.step<3){ this.step++; this.setAttribute('step', String(this.step)); this.dispatch(); }});
        }
        dispatch(){ this.dispatchEvent(new CustomEvent('change',{ detail:this.step, bubbles:true })); }
        update(){
          const fill = this.shadowRoot.querySelector('.prg-fill');
          const prev = this.shadowRoot.querySelector('[data-prev]');
          const next = this.shadowRoot.querySelector('[data-next]');
          var segment = 40; /* percent width of the red segment */
          var left;
          if(this.step === 1) left = 0;            /* left aligned */
          else if(this.step === 2) left = 30;       /* centered approx */
          else left = 60;                           /* right aligned */
          fill.style.width = segment + '%';
          fill.style.left = left + '%';
          prev.disabled = this.step === 1;
          next.disabled = this.step === 3;
        }
        render(){
          this.shadowRoot.innerHTML =
            '<style>'+
            '.prg{display:flex;align-items:center;gap:12px}'+
            '.prg-line{position:relative;flex:1;height:2px;background:#F2F2F2}'+
            '.prg-fill{position:absolute;top:0;height:2px;background:#E73625;width:40%;left:0}'+
            '.prg-actions{display:inline-flex;gap:8px}'+
            '.prg-btn{width:24px;height:24px;border-radius:50%;border:none;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:#fff;background:#E73625}'+
            '.prg-btn:disabled{background:#EAEAEA;color:#8C8C8C;cursor:not-allowed}'+
            '</style>'+
            '<div class="prg" role="group" aria-label="Carousel progress">'+
            '<div class="prg-line"><div class="prg-fill"></div></div>'+
            '<div class="prg-actions">'+
            '<button class="prg-btn" data-prev aria-label="Anterior">‹</button>'+
            '<button class="prg-btn" data-next aria-label="Siguiente">›</button>'+
            '</div>'+
            '</div>';
          this.update();
        }
      }
      if(!customElements.get('spain-progress-3')) customElements.define('spain-progress-3', SpainProgress3);
      const mount = document.getElementById('carousel-progress');
      if(mount) mount.innerHTML = '<spain-progress-3 step="1"></spain-progress-3>';
    })();
  <\/script>
`}const o={stencil:{usage:"Barra de progreso para Carousel con 3 etapas y dos botones a la derecha.",html:'<spain-progress-3 step="1"></spain-progress-3>',css:`
.prg {
  display: flex;
  align-items: center;
  gap: 12px;
}

.prg-line {
  position: relative;
  flex: 1;
  height: 2px;
  background: #F2F2F2;
}

.prg-fill {
  position: absolute;
  top: 0;
  height: 2px;
  background: #E73625;
  width: 40%;
  left: 0;
}

.prg-actions {
  display: inline-flex;
  gap: 8px;
}

.prg-btn {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #E73625;
}

.prg-btn:disabled {
  background: #EAEAEA;
  color: #8C8C8C;
  cursor: not-allowed;
}
`,tsx:`import { Component, h, Prop, State, Listen } from "@stencil/core";

@Component({ tag: "spain-progress-3", shadow: true, styleUrl: "slider.css" })
export class SpainProgress3 {
  @Prop({ mutable: true, reflect: true }) step: 1 | 2 | 3 = 1;
  @State() left: string = "0%";

  componentWillLoad() { this.updatePosition(); }

  @Listen("click")
  onHostClick(ev: Event) {
    const target = ev.composedPath()[0] as HTMLElement;
    if (target && (target as any).getAttribute) {
      if ((target as any).getAttribute("data-prev") !== null && this.step > 1) { this.step = (this.step - 1) as any; this.updatePosition(); }
      if ((target as any).getAttribute("data-next") !== null && this.step < 3) { this.step = (this.step + 1) as any; this.updatePosition(); }
    }
  }

  private updatePosition() {
    if (this.step === 1) this.left = "0%";
    else if (this.step === 2) this.left = "30%";
    else this.left = "60%";
  }

  render() {
    const prevDisabled = this.step === 1;
    const nextDisabled = this.step === 3;
    return (
      <div class="prg" role="group" aria-label="Carousel progress">
        <div class="prg-line"><div class="prg-fill" style={{ left: this.left }} /></div>
        <div class="prg-actions">
          <button class="prg-btn" data-prev disabled={prevDisabled}>‹</button>
          <button class="prg-btn" data-next disabled={nextDisabled}>›</button>
        </div>
      </div>
    );
  }
}`}},e={render:a,parameters:o};var t,s,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: renderSlider,
  parameters: sliderParameters
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,l as default};
