export default {
  title: 'Components/Segmented Buttons',
  parameters: { layout: 'fullscreen' }
};

const baseStylesheet = '/styles/layout.css';
const stylesheet = '/styles/segmented-buttons.css';
const placeholderImg = '/images/Placeholder.png';

export const Default = () => `
  <script>
    (function(){
      const baseStylesheet = '${baseStylesheet}';
      const stylesheet = '${stylesheet}';

      class SpainSegmentedOption extends HTMLElement {
        static get observedAttributes(){ return ['active','disabled','value']; }
        constructor(){
          super();
          this.attachShadow({mode:'open'});
          this._buttonEl = null;
        }
        connectedCallback(){
          this.render();
          this.shadowRoot.addEventListener('click', this.onClick);
          this.updateState();
        }
        disconnectedCallback(){ this.shadowRoot.removeEventListener('click', this.onClick); }
        attributeChangedCallback(){ this.updateState(); }
        onClick = () => {
          if(this.hasAttribute('disabled')) return;
          const value = this.getAttribute('value') || '';
          this.dispatchEvent(new CustomEvent('optionClick', { detail: value, bubbles: true, composed: true }));
        }
        render(){
          this.shadowRoot.innerHTML =
            '<link rel="stylesheet" href="' + baseStylesheet + '" />' +
            '<link rel="stylesheet" href="' + stylesheet + '" />' +
            '<button class="seg-btn" >' +
              '<slot></slot>' +
            '</button>';
          this._buttonEl = this.shadowRoot.querySelector('button');
        }
        updateState(){
          if(!this._buttonEl){ this._buttonEl = this.shadowRoot.querySelector('button'); }
          if(!this._buttonEl) return;
          const isActive = this.hasAttribute('active');
          const isDisabled = this.hasAttribute('disabled');
          this._buttonEl.className = 'seg-btn' + (isActive ? ' is-active' : '');
          if(isDisabled) this._buttonEl.setAttribute('disabled',''); else this._buttonEl.removeAttribute('disabled');
        }
      }

      class SpainSegmentedButtons extends HTMLElement {
        static get observedAttributes(){ return ['size','value']; }
        constructor(){
          super();
          this.attachShadow({mode:'open'});
          this.size = this.getAttribute('size') || 'm';
          this.value = this.getAttribute('value') || '';
        }
        connectedCallback(){
          this.render();
          this.addEventListener('optionClick', this.onOptionClick);
          this.updateOptionsActive();
        }
        disconnectedCallback(){ this.removeEventListener('optionClick', this.onOptionClick); }
        attributeChangedCallback(){
          this.size = this.getAttribute('size') || 'm';
          this.value = this.getAttribute('value') || '';
          this.updateOptionsActive();
        }
        onOptionClick = (e) => {
          this.value = String(e.detail || '');
          this.setAttribute('value', this.value);
          this.updateOptionsActive();
          this.dispatchEvent(new CustomEvent('change', { detail: this.value, bubbles: true }));
        }
        updateOptionsActive(){
          const options = this.querySelectorAll('spain-segmented-option');
          options.forEach(opt => {
            opt.setAttribute('data-size', this.size);
            if((opt.getAttribute('value')||'') === this.value){ opt.setAttribute('active',''); }
            else { opt.removeAttribute('active'); }
          });
        }
        render(){
          const cls = 'segmented seg-' + this.size;
          this.shadowRoot.innerHTML =
            '<link rel="stylesheet" href="' + baseStylesheet + '" />' +
            '<link rel="stylesheet" href="' + stylesheet + '" />' +
            '<div class="' + cls + '" role="tablist"><slot></slot></div>';
        }
      }

      if(!customElements.get('spain-segmented-option')) customElements.define('spain-segmented-option', SpainSegmentedOption);
      if(!customElements.get('spain-segmented-buttons')) customElements.define('spain-segmented-buttons', SpainSegmentedButtons);
    })();
  </script>

  <link rel="stylesheet" href="${baseStylesheet}" />
  <link rel="stylesheet" href="${stylesheet}" />

  <header class="top-nav"><div class="top-nav__inner"><div class="brand" title="Spain.info DS"></div></div></header>
  <section class="hero"><div class="container"><div class="hero__title">Segmented Buttons</div></div></section>

  <section class="intro-strip"><div class="container"><p class="intro-text">Los Segmented Buttons permiten elegir una única opción entre varias dentro del mismo control, optimizando espacio y claridad.</p></div></section>

  <div class="container">
    <div class="sg-grid">
      <div class="sg-col">
        <h4>Descripción y uso</h4>
        <p>Útil para filtros y modos. Solo una opción activa a la vez.</p>
        <h4>Comportamiento</h4>
        <ul class="sg-list">
          <li>Estado: normal, activo, deshabilitado</li>
          <li>Accesible por teclado (Tab, Enter)</li>
        </ul>
        <h4>Size</h4>
        <ul class="sg-list"><li>M</li><li>S</li></ul>
      </div>

      <div class="sg-container">
        <div class="sg-title">Master</div>
        <div class="sg-master">
          <div class="sg-row">
            <spain-segmented-buttons size="m" value="option-1">
              <spain-segmented-option value="option-1">Option 1 <img class="sg-image" src="/images/Placeholder.svg" alt="Placeholder" /></spain-segmented-option>
              <spain-segmented-option value="option-2">Option 2 <img class="sg-image" src="/images/Placeholder.svg" alt="Placeholder" /></spain-segmented-option>
              <spain-segmented-option value="option-3">Option 3 <img class="sg-image" src="/images/Placeholder.svg" alt="Placeholder" /></spain-segmented-option>
              <spain-segmented-option value="option-4">Option 4 <img class="sg-image" src="/images/Placeholder.svg" alt="Placeholder" /></spain-segmented-option>
            </spain-segmented-buttons>
          </div>

          <div class="sg-row">
            <spain-segmented-buttons size="s" value="option-1">
              <spain-segmented-option value="option-1">Option 1 <img class="sg-image" src="/images/Placeholder.svg" alt="Placeholder" /></spain-segmented-option>
              <spain-segmented-option value="option-2">Option 2 <img class="sg-image" src="/images/Placeholder.svg" alt="Placeholder" /></spain-segmented-option>
            </spain-segmented-buttons>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

Default.parameters = {
  docs: { source: { code: '<spain-segmented-buttons size="m" value="option-1"><spain-segmented-option value="option-1">Option 1</spain-segmented-option><spain-segmented-option value="option-2">Option 2</spain-segmented-option></spain-segmented-buttons>', state: 'closed' } },
  stencil: {
    usage: 'Segmented Buttons con tamaños M y S. Copia HTML, CSS y TSX para reutilizar el componente tal cual.',
    html: '<spain-segmented-buttons size="m" value="option-1">\n  <spain-segmented-option value="option-1">Option 1 <img class="sg-image" src="/images/Placeholder.svg" alt="" /></spain-segmented-option>\n  <spain-segmented-option value="option-2">Option 2 <img class="sg-image" src="/images/Placeholder.svg" alt="" /></spain-segmented-option>\n  <spain-segmented-option value="option-3">Option 3 <img class="sg-image" src="/images/Placeholder.svg" alt="" /></spain-segmented-option>\n  <spain-segmented-option value="option-4">Option 4 <img class="sg-image" src="/images/Placeholder.svg" alt="" /></spain-segmented-option>\n</spain-segmented-buttons>\n\n<spain-segmented-buttons size="s" value="option-1">\n  <spain-segmented-option value="option-1">Option 1 <img class="sg-image" src="/images/Placeholder.svg" alt="" /></spain-segmented-option>\n  <spain-segmented-option value="option-2">Option 2 <img class="sg-image" src="/images/Placeholder.svg" alt="" /></spain-segmented-option>\n</spain-segmented-buttons>',
    css: `
.segmented {
  display: inline-flex;
  background: #fff;
  border: 2px solid #1D1C20;
  border-radius: 999px;
  gap: 4px;
  height: 44px;
  padding: 4px;
  align-items: center;
  box-sizing: border-box;
}

.segmented.seg-m {
  width: 496px;
}

.segmented.seg-s {
  width: 248px;
}

.segmented .seg-btn {
  border: 0;
  background: transparent;
  padding: 16px;
  border-radius: 999px;
  cursor: pointer;
  color: #1D1C20;
  font-weight: 500;
  flex: 1 1 0;
  text-align: center;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
  line-height: 24px;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}

.segmented .seg-btn.is-active {
  background: #FFD300;
  color: #1B1C20;
}

.segmented .seg-btn:disabled {
  opacity: .4;
  cursor: not-allowed;
}

.segmented .seg-btn:focus-visible {
  outline: 3px solid #FFD300;
  outline-offset: 2px;
  border-radius: 999px;
}

.segmented .seg-btn img {
  width: 18px;
  height: 18px;
  margin-left: 10px;
  display: inline-block;
  vertical-align: middle;
  border: none;
  flex-shrink: 0;
}

.segmented.seg-s .seg-btn {
  padding: 10px;
  height: 32px;
  min-height: 32px;
}`,
    tsx: `import { Component, h, Prop, Event, EventEmitter, Element } from '@stencil/core';

@Component({ tag: 'spain-segmented-option', shadow: true, styleUrl: 'segmented-buttons.css' })
export class SpainSegmentedOption {
  @Prop() value: string;
  @Prop() disabled = false;
  @Prop() active = false;
  @Event() optionClick: EventEmitter<string>;
  private onClick = () => { if (!this.disabled) this.optionClick.emit(this.value); };
  render() {
    const cls = 'seg-btn' + (this.active ? ' is-active' : '');
    return (<button class={cls} disabled={this.disabled} onClick={this.onClick}><slot /></button>);
  }
}

@Component({ tag: 'spain-segmented-buttons', shadow: true, styleUrl: 'segmented-buttons.css' })
export class SpainSegmentedButtons {
  @Element() el!: HTMLElement;
  @Prop() size: 'm' | 's' = 'm';
  @Prop({ mutable: true, reflect: true }) value = '';
  @Event() change: EventEmitter<string>;
  private onOptionClick = (e: CustomEvent<string>) => { this.value = e.detail; this.updateActive(); this.change.emit(this.value); };
  componentDidLoad() { this.updateActive(); this.el.addEventListener('optionClick', this.onOptionClick as any); }
  disconnectedCallback() { this.el.removeEventListener('optionClick', this.onOptionClick as any); }
  private updateActive() {
    this.el.querySelectorAll('spain-segmented-option').forEach((opt: any) => {
      opt.active = opt.value === this.value;
      opt.setAttribute('data-size', this.size);
    });
  }
  render() { return (<div class={'segmented seg-' + this.size} role="tablist"><slot /></div>); }
}`
  }
};