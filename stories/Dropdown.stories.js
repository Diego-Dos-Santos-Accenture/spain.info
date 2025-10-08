export default {
  title: 'Components/Dropdown',
  parameters: { layout: 'fullscreen' }
};

const baseStylesheet = '/styles/layout.css';
const stylesheet = '/styles/dropdown.css';

function script() {
  document.querySelectorAll('[data-dd]').forEach((root) => {
    const trigger = root.querySelector('.dd-trigger');
    trigger.addEventListener('click', () => root.classList.toggle('dd-open'));
    root.querySelectorAll('.dd-option').forEach((opt) => {
      opt.addEventListener('click', () => {
        root.classList.remove('dd-open');
        const label = root.querySelector('.dd-label');
        label.textContent = opt.textContent.trim();
      });
    });
    document.addEventListener('click', (e) => {
      if (!root.contains(e.target)) root.classList.remove('dd-open');
    });
  });
}

export const Default = () => {
  setTimeout(script, 0);
  return `
  <link rel="stylesheet" href="${baseStylesheet}" />
  <link rel="stylesheet" href="${stylesheet}" />
  <script type="module">
    // Stencil-like Dropdown components (inline for demo)
    class SpainDropdownOption extends HTMLElement {
      constructor(){
        super();
        this.attachShadow({ mode: 'open' });
      }
      connectedCallback() {
        this.shadowRoot.innerHTML =
          '<link rel="stylesheet" href="/styles/dropdown.css" />' +
          '<div class="dd-option"><slot></slot></div>';
        const el = this.shadowRoot.querySelector('.dd-option');
        el.addEventListener('click', () => {
          this.dispatchEvent(new CustomEvent('optionClick', { bubbles: true, composed: true, detail: (this.textContent || '').trim() }));
        });
      }
    }
    if (!customElements.get('spain-dropdown-option')) {
      customElements.define('spain-dropdown-option', SpainDropdownOption);
    }

    class SpainDropdown extends HTMLElement {
      static get observedAttributes() { return ['open','size','label','disabled','selected-value']; }
      constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.isOpen = this.getAttribute('open') === 'true';
        this.handleTriggerClick = this.handleTriggerClick.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
        this.onDocClick = this.onDocClick.bind(this);
      }
      connectedCallback(){
        this.render();
        document.addEventListener('click', this.onDocClick);
        this.shadowRoot.addEventListener('optionClick', this.onOptionClick);
      }
      disconnectedCallback(){
        document.removeEventListener('click', this.onDocClick);
        this.shadowRoot.removeEventListener('optionClick', this.onOptionClick);
      }
      attributeChangedCallback(){ this.isOpen = this.getAttribute('open') === 'true'; this.render(); }
      onDocClick(e){ if (!this.contains(e.target)) { this.isOpen = false; this.setAttribute('open','false'); this.render(); } }
      handleTriggerClick(){ if (this.hasAttribute('disabled')) return; this.isOpen = !this.isOpen; this.setAttribute('open', String(this.isOpen)); this.render(); }
      onOptionClick(e){ 
        this.isOpen = false; 
        this.setAttribute('open', 'false');
        // Update the selected value attribute
        this.setAttribute('selected-value', e.detail);
        this.render(); 
        this.dispatchEvent(new CustomEvent('change', { detail: e.detail })); 
      }
      render(){
        const size = this.getAttribute('size') || 'm';
        const label = this.getAttribute('label') || 'Label';
        const selectedValue = this.getAttribute('selected-value') || label;
        const openClass = this.isOpen ? 'dd-open' : '';
        this.shadowRoot.innerHTML = 
          '<link rel="stylesheet" href="/styles/dropdown.css" />' +
          '<div class="dd dd-' + size + ' ' + openClass + '">' +
          '  <button class="dd-trigger" type="button"><span class="dd-label">' + selectedValue + '</span><span class="dd-caret"></span></button>' +
          (this.isOpen ? '<div class="dd-menu"><slot></slot></div>' : '') +
          '</div>';
        const trigger = this.shadowRoot.querySelector('.dd-trigger');
        if (trigger) trigger.onclick = this.handleTriggerClick;
      }
    }
    if (!customElements.get('spain-dropdown')) {
      customElements.define('spain-dropdown', SpainDropdown);
    }
  </script>
  <header class="top-nav">
    <div class="top-nav__inner"><div class="brand" title="Spain.info DS"></div></div>
  </header>
  <section class="hero"><div class="container"><div class="hero__title">Dropdown</div></div></section>

  <section class="intro-strip">
    <div class="container">
      <p class="intro-text">El dropdown despliega una lista de opciones al interactuar con él, permitiendo al usuario seleccionar un valor o acceder a acciones adicionales.</p>
    </div>
  </section>

  <div class="container dropdown-page">
    <div class="dd-grid">
      <div class="section-aside">
        <h2>Comportamiento</h2>
        <p>Al hacer click o tap sobre el componente, este se expande y se cierra mostrando un listado de opciones.</p>
        <h2>Variantes y estados</h2>
        <div class="size-note">Tamaños</div>
        <ul class="dd-list"><li>L</li><li>M</li><li>S</li></ul>
        <div class="size-note">Estados</div>
        <ul class="dd-list"><li>Active</li><li>Hover</li><li>Opened</li><li>Selected</li></ul>
      </div>

      <div>
        <div class="master-title">Master</div>
        <div class="master-row size-col">
          <div class="size-note-row"></div>
          <div class="size-note-row">L</div>
          <div class="size-note-row">M</div>
          <div class="size-note-row">S</div>
        </div>

        <div class="master-row">
          <div class="size-note">Active</div>
          <div data-dd class="dd dd-l">
            <div class="dd-trigger dd">
              <span class="dd-label">Label</span><span class="dd-caret"></span>
            </div>
          </div>
          <div data-dd class="dd dd-m">
            <div class="dd-trigger dd">
              <span class="dd-label">Label</span><span class="dd-caret"></span>
            </div>
          </div>
          <div data-dd class="dd dd-s">
            <div class="dd-trigger dd">
              <span class="dd-label">Label</span><span class="dd-caret"></span>
            </div>
          </div>
        </div>

        <div class="master-row">
          <div class="size-note">Hover</div>
          <div class="dd dd-l dd-ring"><div class="dd-trigger dd"><span class="dd-label">Label</span><span class="dd-caret"></span></div></div>
          <div class="dd dd-m dd-ring"><div class="dd-trigger dd"><span class="dd-label">Label</span><span class="dd-caret"></span></div></div>
          <div class="dd dd-s dd-ring"><div class="dd-trigger dd"><span class="dd-label">Label</span><span class="dd-caret"></span></div></div>
        </div>

        <div class="master-row">
          <div class="size-note">Opened</div>
          <spain-dropdown size="l" label="Label" open="true">
            <spain-dropdown-option>Option 1</spain-dropdown-option>
            <spain-dropdown-option>Option 2</spain-dropdown-option>
            <spain-dropdown-option>Option 3</spain-dropdown-option>
            <spain-dropdown-option>Option 4</spain-dropdown-option>
            <spain-dropdown-option>Option 5</spain-dropdown-option>
            <spain-dropdown-option>Option 6</spain-dropdown-option>
            <spain-dropdown-option>Option 7</spain-dropdown-option>
          </spain-dropdown>
          <spain-dropdown size="m" label="Label" open="true">
            <spain-dropdown-option>Option 1</spain-dropdown-option>
            <spain-dropdown-option>Option 2</spain-dropdown-option>
            <spain-dropdown-option>Option 3</spain-dropdown-option>
            <spain-dropdown-option>Option 4</spain-dropdown-option>
            <spain-dropdown-option>Option 5</spain-dropdown-option>
            <spain-dropdown-option>Option 6</spain-dropdown-option>
            <spain-dropdown-option>Option 7</spain-dropdown-option>
          </spain-dropdown>
          <spain-dropdown size="s" label="Label" open="true">
            <spain-dropdown-option>Option 1</spain-dropdown-option>
            <spain-dropdown-option>Option 2</spain-dropdown-option>
            <spain-dropdown-option>Option 3</spain-dropdown-option>
            <spain-dropdown-option>Option 4</spain-dropdown-option>
            <spain-dropdown-option>Option 5</spain-dropdown-option>
            <spain-dropdown-option>Option 6</spain-dropdown-option>
            <spain-dropdown-option>Option 7</spain-dropdown-option>
          </spain-dropdown>
        </div>

        <div class="master-row master-row-selected">
          <div class="size-note">Selected</div>
          <div data-dd class="dd dd-l">
            <div class="dd-trigger dd">
              <span class="dd-label">Option selected</span><span class="dd-caret"></span>
            </div>
          </div>
          <div data-dd class="dd dd-m">
            <div class="dd-trigger dd">
              <span class="dd-label">Option selected</span><span class="dd-caret"></span>
            </div>
          </div>
          <div data-dd class="dd dd-s">
            <div class="dd-trigger dd">
              <span class="dd-label">Option selected</span><span class="dd-caret"></span>
            </div>
          </div>
        </div>

        <div class="master-row master-example-selected">
            <div class="size-note">Examples</div>
            <div class="col-flex-24">
                <div data-dd class="dd dd-m"><div class="dd-trigger dd"><span class="dd-label example-label">Santa Cruz de Tenerife</span><span class="dd-caret"></span></div><div class="dd-menu"><div class="dd-option">Santa Cruz de Tenerife</div><div class="dd-option">Las Palmas</div><div class="dd-option">Madrid</div></div></div>
                <div class="dd dd-s dd-example-selected"><div class="dd-trigger dd"><span class="dd-label example-label-short">Santa Cruz de T...</span><span class="dd-caret"></span></div></div>
            </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

Default.parameters = { 
  docs: { source: { code: '<div class="dd dd-m"><span class="dd-label">Label</span></div>', state: 'closed' } },
  stencil: {
    usage: 'Dropdown en estado abierto con lista de opciones desplegable.',
    html: '<spain-dropdown size="m" label="Label" open="true"><spain-dropdown-option>Option 1</spain-dropdown-option><spain-dropdown-option>Option 2</spain-dropdown-option></spain-dropdown>',
    css: `
.dd {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 200px;
}

.dd-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s;
}

.dd-trigger:hover {
  border-color: #FFD300;
  box-shadow: 0 0 0 3px rgba(255, 211, 0, 0.1);
}

.dd-label {
  font-size: 14px;
  color: #1B1C20;
}

.dd-caret {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #666;
  transition: transform 0.2s;
}

.dd-open .dd-caret {
  transform: rotate(180deg);
}

.dd-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: 4px;
}

.dd-option {
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 14px;
  color: #1B1C20;
}

.dd-option:hover {
  background: #F8F8F7;
}

.dd-l .dd-trigger {
  padding: 16px 20px;
  font-size: 16px;
}

.dd-m .dd-trigger {
  padding: 12px 16px;
  font-size: 14px;
}

.dd-s .dd-trigger {
  padding: 8px 12px;
  font-size: 12px;
}
`,
    tsx: `
import { Component, h, Prop, State, Event, EventEmitter, Listen } from '@stencil/core';

@Component({ tag: 'spain-dropdown-option', shadow: true })
export class SpainDropdownOption {
  @Event() optionClick: EventEmitter<string>;
  
  private handleClick = () => {
    this.optionClick.emit();
  };
  
  render() {
    return (
      <div class="dd-option" onClick={this.handleClick}>
        <slot />
      </div>
    );
  }
}

@Component({ tag: 'spain-dropdown', shadow: true })
export class SpainDropdown {
  @Prop() size: 'l' | 'm' | 's' = 'm';
  @Prop() label: string = 'Label';
  @Prop() open: boolean = false;
  @Prop() disabled: boolean = false;
  
  @State() isOpen: boolean = false;
  
  @Event() change: EventEmitter<string>;
  
  private handleTriggerClick = () => {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  };
  
  private handleOptionClick = (event: CustomEvent) => {
    this.isOpen = false;
    this.change.emit(event.detail);
  };
  
  @Listen('click', { target: 'document' })
  handleOutsideClick(event: Event) {
    if (!this.el.contains(event.target as Node)) {
      this.isOpen = false;
    }
  }
  
  render() {
    const dropdownClass = \`dd dd-\${this.size} \${this.isOpen ? 'dd-open' : ''}\`;
    
    return (
      <div class={dropdownClass}>
        <div class="dd-trigger" onClick={this.handleTriggerClick}>
          <span class="dd-label">{this.label}</span>
          <span class="dd-caret"></span>
        </div>
        {this.isOpen && (
          <div class="dd-menu">
            <slot />
          </div>
        )}
      </div>
    );
  }
}
`
  }
};
