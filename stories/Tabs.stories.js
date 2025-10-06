export default {
  title: 'Components/Tabs',
  parameters: { layout: 'fullscreen' }
};

const baseStylesheet = '/styles/layout.css';
const stylesheet = '/styles/tabs.css';
const mobileImg = '/images/Mobile.png';

function tabsScript(){
  const script = document.createElement('script');
  script.innerHTML = `
    (function(){
      function initTabs(root){
        const buttons = Array.from(root.querySelectorAll('[role=tab]'));
        const panels = Array.from(root.querySelectorAll('[role=tabpanel]'));
        function activate(id){
          buttons.forEach(btn=>{
            const isActive = btn.getAttribute('aria-controls')===id;
            btn.classList.toggle('is-active', isActive);
            btn.setAttribute('aria-selected', String(isActive));
            btn.tabIndex = isActive ? 0 : -1;
          });
          panels.forEach(p=>{
            const show = p.id===id;
            p.hidden = !show;
          });
        }
        buttons.forEach(btn=>{
          btn.addEventListener('click', ()=>activate(btn.getAttribute('aria-controls')));
          btn.addEventListener('keydown', (e)=>{
            if(e.key==='ArrowRight' || e.key==='ArrowLeft'){
              e.preventDefault();
              const dir = e.key==='ArrowRight' ? 1 : -1;
              const idx = (buttons.indexOf(btn)+dir+buttons.length)%buttons.length;
              buttons[idx].focus();
              activate(buttons[idx].getAttribute('aria-controls'));
            }
          });
        });
        const current = buttons.find(b=>b.classList.contains('is-active')) || buttons[0];
        if(current) activate(current.getAttribute('aria-controls'));
      }
      document.addEventListener('DOMContentLoaded', ()=>{
        document.querySelectorAll('.tabs__list').forEach(initTabs);
        var demoBtn = document.querySelector('.tabs-demo .tabs__btn:not([disabled])');
        if(demoBtn){
          // start in Active state
          demoBtn.classList.add('tabs__btn--active');
          // cycle states: Active -> Hover -> Selected -> Active
          demoBtn.addEventListener('click', function(){
            if(this.classList.contains('tabs__btn--active')){
              this.classList.remove('tabs__btn--active');
              this.classList.add('tabs__btn--hover');
            } else if(this.classList.contains('tabs__btn--hover')){
              this.classList.remove('tabs__btn--hover');
              this.classList.add('tabs__btn--selected');
            } else if(this.classList.contains('tabs__btn--selected')){
              this.classList.remove('tabs__btn--selected');
              this.classList.add('tabs__btn--active');
            } else {
              this.classList.add('tabs__btn--active');
            }
            this.setAttribute('aria-selected', String(this.classList.contains('tabs__btn--selected')));
          });
        }
      });
    })();
  `;
  return script.outerHTML;
}

export const Default = () => `
  <link rel="stylesheet" href="${baseStylesheet}" />
  <link rel="stylesheet" href="${stylesheet}" />
  ${tabsScript()}

  <header class="top-nav"><div class="top-nav__inner"><div class="brand" title="Spain.info DS"></div></div></header>
  <section class="hero"><div class="container"><div class="hero__title">Tabs</div></div></section>

  <section class="intro-strip"><div class="container"><p class="intro-text">Los Tabs permiten organizar contenido en secciones alternables en una misma superficie.</p></div></section>

  <div class="container">
    <div class="tabs-grid">
      <div class="tabs-col">
        <h4>Descripción y uso</h4>
        <p>En Spain.info, las Tabs facilitan la comparación y el acceso rápido a información agrupada, manteniendo la interfaz limpia y estructurada, evitando que el usuario tenga que navegar a nuevas páginas. Están compuestas por el componente Tag (tamaño M).</p>

        <h4>Comportamiento</h4>
        <p>Las tags actúan como elementos interactivos que al pulsarlos pasan a un estado seleccionado y muestran otro contenido.</p>
        <p>En vista mobile, puede hacerse scroll si no caben en el ancho de la pantalla.</p>
        <p>Cuando una tab se encuentra en estado Disabled no se puede acceder a su contenido. No puede haber más de una tab seleccionada al mismo tiempo.</p>

        <h4>Variantes y estados</h4>
        <p>Estados</p>
        <ul class="tabs-list-bullets">
          <li>Active</li>
          <li>Hover</li>
          <li>Selected</li>
          <li>Disabled</li>
        </ul>

        <h4>Anatomía</h4>
        <ul class="tabs-list-bullets">
          <li>Icono (opcional)</li>
          <li>Texto</li>
        </ul>
      </div>

      <div class="tabs-master-col">
        <div class="tabs-title">Master</div>
        <div class="tabs-master">
          <div class="tabs__labels">
            <span class="tabs__label tabs__label--active">Active</span>
            <span class="tabs__label tabs__label--hover">Hover</span>
            <span class="tabs__label tabs__label--selected">Selected</span>
            <span class="tabs__label tabs__label--disabled">Disabled</span>
          </div>
          <div class="tabs__list" role="tablist" aria-label="Tabs master">
            <button class="tabs__btn tabs__btn--active" role="tab" aria-selected="true" aria-controls="tab-panel-1" id="tab-1">Tab 1</button>
            <button class="tabs__btn tabs__btn--hover" role="tab" aria-selected="false" aria-controls="tab-panel-2" id="tab-2">Tab 2</button>
            <button class="tabs__btn" role="tab" aria-selected="false" aria-controls="tab-panel-3" id="tab-3">Tab 3</button>
            <button class="tabs__btn tabs__btn--disabled" role="tab" aria-selected="false" aria-controls="tab-panel-4" id="tab-4" disabled>Tab 4</button>
            <button class="tabs__btn" role="tab" aria-selected="false" aria-controls="tab-panel-5" id="tab-5">Tab 5</button>
            <button class="tabs__btn" role="tab" aria-selected="false" aria-controls="tab-panel-6" id="tab-6">Tab 6</button>
          </div>

          <!-- Spec view only; no content panels for master -->
        </div>

        <div class="tabs-title">Example</div>
        <div class="tabs-demo">
          <div class="tabs__list" role="tablist" aria-label="Tabs demo">
            <button class="tabs__btn" role="tab" aria-selected="false" id="tabs-demo-1">Tab</button>
            <button class="tabs__btn tabs__btn--disabled" role="tab" aria-selected="false" id="tabs-demo-2" disabled>Tab</button>
          </div>
        </div>

        <div class="tabs-title">Example - Mobile</div>
        <div class="tabs-mobile-row">
          <img class="tabs-mobile" src="${mobileImg}" alt="Tabs mobile example" />
        </div>
      </div>
    </div>
  </div>
`;

Default.parameters = { 
  docs: { source: { code: '<div class="tabs"><button class="tab-btn is-active">Tab</button></div>', state: 'closed' } },
  stencil: {
    usage: 'Ejemplo funcional con dos tabs: una interactiva (Active/ Hover/ Selected) y otra Disabled.',
    html: '<spain-tabs-demo></spain-tabs-demo>',
    css: `.tabs__list{display:flex;gap:8px;padding:6px 0;border-radius:999px;width:fit-content;background:#fff}
.tabs__btn{appearance:none;border:2px solid #1D1C20;background:transparent;padding:12px 24px;border-radius:999px;font-weight:600;color:#1D1C20;cursor:pointer;font-size:16px;line-height:1}
.tabs__btn--active{background:#FFD300;border-color:#1D1C20;color:#1B1C20}
.tabs__btn--disabled{background:#E5E5E5;color:#666;border-color:#E5E5E5;cursor:not-allowed}
.tabs__btn--hover{background:transparent;border-color:#FFD300;color:#1B1C20}
.tabs__btn--selected{background:transparent;border-color:#1D1C20;color:#1B1C20}
.tabs__btn:not(:disabled):not(.tabs__btn--active):not(.tabs__btn--selected):hover{background:transparent;border-color:#FFD300;color:#1B1C20}`,
    tsx: 'import { Component, h, State } from "@stencil/core";\n\n@Component({ tag: "spain-tabs-demo", shadow: true, styleUrl: "tabs.css" })\nexport class SpainTabsDemo {\n  @State() state: "active" | "hover" | "selected" = "active";\n\n  private onClick = () => {\n    this.state = this.state === "active" ? "hover" : this.state === "hover" ? "selected" : "active";\n  };\n\n  private getFirstBtnClass(){\n    if(this.state === "active") return "tabs__btn tabs__btn--active";\n    if(this.state === "hover") return "tabs__btn tabs__btn--hover";\n    return "tabs__btn tabs__btn--selected";\n  }\n\n  render(){\n    return (\n      <div class="tabs__list" role="tablist" aria-label="Tabs demo">\n        <button class={this.getFirstBtnClass()} role="tab" onClick={this.onClick}>Tab</button>\n        <button class="tabs__btn tabs__btn--disabled" role="tab" disabled>Tab</button>\n      </div>\n    );\n  }\n}'
  }
};


