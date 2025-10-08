const l={title:"Components/Text Field",parameters:{layout:"fullscreen"}},t="styles/layout.css",s="styles/text-field.css",e=()=>`
  <link rel="stylesheet" href="${t}" />
  <link rel="stylesheet" href="${s}" />
  <script>
  (function(){
    class SpainTextField extends HTMLElement{
      static get observedAttributes(){ return ['label','support','value','autofocus','type']; }
      constructor(){ super(); this.attachShadow({mode:'open'}); }
      connectedCallback(){ this.render(); this.afterRender(); }
      attributeChangedCallback(){ this.render(); this.afterRender(); }
      afterRender(){
        const input = this.shadowRoot.querySelector('input');
        if(!input) return;
        if(this.hasAttribute('autofocus')){ setTimeout(()=>input.focus(), 0); }
        input.addEventListener('focus',()=>{ this.container().classList.add('is-focused'); });
        input.addEventListener('blur',()=>{ this.container().classList.remove('is-focused'); });
        input.addEventListener('input',()=>{
          if(input.value) this.container().classList.add('has-value');
          else this.container().classList.remove('has-value');
        });
      }
      container(){ return this.shadowRoot.querySelector('.text-field'); }
      render(){
        const label = this.getAttribute('label')||'Label';
        const support = this.getAttribute('support')||'Supporting text';
        const value = this.getAttribute('value')||'';
        const type = this.getAttribute('type')||'text';
        this.shadowRoot.innerHTML =
                      '<link rel="stylesheet" href="${t}" />'+
                      '<link rel="stylesheet" href="${s}" />'+
                      '<div class="text-field text-field--m text-field--inside">'+
                        '<label class="text-field__label">'+label+'</label>'+
                        '<input class="text-field__input" type="'+type+'" value="'+value+'" placeholder="'+label+'" />'+
                        '<div class="text-field__support">'+support+'</div>'+
                      '</div>';
      }
    }
    if(!customElements.get('spain-text-field')) customElements.define('spain-text-field', SpainTextField);
  })();
  <\/script>
  
  <header class="top-nav"><div class="top-nav__inner"><div class="brand" title="Spain.info DS"></div></div></header>
  <section class="hero"><div class="container"><div class="hero__title">Text Field</div></div></section>

  <section class="intro-strip"><div class="container"><p class="intro-text">El Text Field es un componente fundamental para la entrada de datos en formularios e interfaces.</p></div></section>

  <div class="container">
    <div class="tf-grid">
      <div class="tf-aside">
        <h4>Descripción y uso</h4>
        <p>Se utiliza para capturar información escrita por usuarios, ya sea en campos simples (nombre, email) o entradas más complejas. Debe mantener siempre claridad, accesibilidad y consistencia visual, con estados y mensajes diferenciados.</p>

        <h4>Comportamiento</h4>
        <p>El label puede ubicarse dentro o fuera del campo. El componente muestra estados de interacción (active, hover, focused, error) y mensajes de ayuda o error.</p>

        <h4>Variantes y estados</h4>
        <ul class="tf-list">
          <li>Sizes: M y S</li>
          <li>Estados: Active, Hover, Focused, Error</li>
          <li>Label inside / Label outside</li>
        </ul>
      </div>

      <div class="tf-content">
        <div class="tf-grid-spec">
          <img src="images/TextField-structure.png" alt="Text Field Master" />
        </div>

        <div class="tf-title">Content & Supporting text</div>
        <div class="tf-card">
          <img src="images/Content&Support.png" alt="Text Field Content" />
        </div>

        <div class="tf-title">Examples</div>
        <div class="tf-card tf-examples-panel">
          <div class="tf-example-row">
            <spain-text-field label="Nombre" type="text" support="Supporting text"></spain-text-field>
            <spain-text-field label="Correo" type="email" support="Supporting text"></spain-text-field>
          </div>
          <div class="tf-example-row">
            <spain-text-field label="Contraseña" type="password" support="Mínimo 8 caracteres" autofocus></spain-text-field>
            <spain-text-field label="Contraseña" type="password" support="Mínimo 8 caracteres" autofocus></spain-text-field>
          </div>
        </div>

    </div>
  </div>
`;e.parameters={docs:{source:{code:'<spain-text-field label="Label" support="Supporting text"></spain-text-field>',state:"closed"}},stencil:{usage:"Campo de texto con label flotante (inside), soporte y estados (active/hover/focused/error).",html:'<spain-text-field label="Nombre" type="text" support="Supporting text"></spain-text-field>',css:`
.text-field {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  gap: 6px;
}

.text-field__label {
  position: absolute;
  top: 12px;
  left: 12px;
  color: #666;
  transition: all .15s ease-in-out;
  pointer-events: none;
}

.text-field__input {
  border: 2px solid #1D1C20;
  border-radius: 12px;
  padding: 12px 12px;
  font-size: 16px;
  line-height: 24px;
  color: #1B1C20;
  background: #fff;
}

.text-field.is-focused .text-field__input {
  outline: 3px solid #FFD300;
  outline-offset: 2px;
}

.text-field--inside.has-value .text-field__label,
.text-field--inside.is-focused .text-field__label {
  top: -8px;
  left: 10px;
  font-size: 12px;
  color: #1B1C20;
  background: transparent;
}

.text-field__support {
  font-size: 12px;
  color: #666;
}
`,tsx:`import { Component, h, Prop, State, Element } from '@stencil/core';

@Component({ tag: 'spain-text-field', shadow: true, styleUrl: 'text-field.css' })
export class SpainTextField {
  @Element() el!: HTMLElement;
  @Prop() label: string = 'Label';
  @Prop() support: string = 'Supporting text';
  @Prop() value: string = '';
  @Prop() type: 'text' | 'email' | 'password' = 'text';
  @State() focused = false;

  private onFocus = () => { this.focused = true; };
  private onBlur = () => { this.focused = false; };
  private onInput = (e: Event) => { this.value = (e.target as HTMLInputElement).value; };

  render(){
    const cls = 'text-field text-field--m text-field--inside' + (this.focused ? ' is-focused' : '') + (this.value ? ' has-value' : '');
    return (
      <div class={cls}>
        <label class="text-field__label">{this.label}</label>
        <input class="text-field__input" type={this.type} value={this.value} placeholder={this.label} onFocus={this.onFocus} onBlur={this.onBlur} onInput={this.onInput} />
        <div class="text-field__support">{this.support}</div>
      </div>
    );
  }
}`}};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => \`
  <link rel="stylesheet" href="\${baseStylesheet}" />
  <link rel="stylesheet" href="\${stylesheet}" />
  <script>
  (function(){
    class SpainTextField extends HTMLElement{
      static get observedAttributes(){ return ['label','support','value','autofocus','type']; }
      constructor(){ super(); this.attachShadow({mode:'open'}); }
      connectedCallback(){ this.render(); this.afterRender(); }
      attributeChangedCallback(){ this.render(); this.afterRender(); }
      afterRender(){
        const input = this.shadowRoot.querySelector('input');
        if(!input) return;
        if(this.hasAttribute('autofocus')){ setTimeout(()=>input.focus(), 0); }
        input.addEventListener('focus',()=>{ this.container().classList.add('is-focused'); });
        input.addEventListener('blur',()=>{ this.container().classList.remove('is-focused'); });
        input.addEventListener('input',()=>{
          if(input.value) this.container().classList.add('has-value');
          else this.container().classList.remove('has-value');
        });
      }
      container(){ return this.shadowRoot.querySelector('.text-field'); }
      render(){
        const label = this.getAttribute('label')||'Label';
        const support = this.getAttribute('support')||'Supporting text';
        const value = this.getAttribute('value')||'';
        const type = this.getAttribute('type')||'text';
        this.shadowRoot.innerHTML =
                      '<link rel="stylesheet" href="\${baseStylesheet}" />'+
                      '<link rel="stylesheet" href="\${stylesheet}" />'+
                      '<div class="text-field text-field--m text-field--inside">'+
                        '<label class="text-field__label">'+label+'</label>'+
                        '<input class="text-field__input" type="'+type+'" value="'+value+'" placeholder="'+label+'" />'+
                        '<div class="text-field__support">'+support+'</div>'+
                      '</div>';
      }
    }
    if(!customElements.get('spain-text-field')) customElements.define('spain-text-field', SpainTextField);
  })();
  <\/script>
  
  <header class="top-nav"><div class="top-nav__inner"><div class="brand" title="Spain.info DS"></div></div></header>
  <section class="hero"><div class="container"><div class="hero__title">Text Field</div></div></section>

  <section class="intro-strip"><div class="container"><p class="intro-text">El Text Field es un componente fundamental para la entrada de datos en formularios e interfaces.</p></div></section>

  <div class="container">
    <div class="tf-grid">
      <div class="tf-aside">
        <h4>Descripción y uso</h4>
        <p>Se utiliza para capturar información escrita por usuarios, ya sea en campos simples (nombre, email) o entradas más complejas. Debe mantener siempre claridad, accesibilidad y consistencia visual, con estados y mensajes diferenciados.</p>

        <h4>Comportamiento</h4>
        <p>El label puede ubicarse dentro o fuera del campo. El componente muestra estados de interacción (active, hover, focused, error) y mensajes de ayuda o error.</p>

        <h4>Variantes y estados</h4>
        <ul class="tf-list">
          <li>Sizes: M y S</li>
          <li>Estados: Active, Hover, Focused, Error</li>
          <li>Label inside / Label outside</li>
        </ul>
      </div>

      <div class="tf-content">
        <div class="tf-grid-spec">
          <img src="images/TextField-structure.png" alt="Text Field Master" />
        </div>

        <div class="tf-title">Content & Supporting text</div>
        <div class="tf-card">
          <img src="images/Content&Support.png" alt="Text Field Content" />
        </div>

        <div class="tf-title">Examples</div>
        <div class="tf-card tf-examples-panel">
          <div class="tf-example-row">
            <spain-text-field label="Nombre" type="text" support="Supporting text"></spain-text-field>
            <spain-text-field label="Correo" type="email" support="Supporting text"></spain-text-field>
          </div>
          <div class="tf-example-row">
            <spain-text-field label="Contraseña" type="password" support="Mínimo 8 caracteres" autofocus></spain-text-field>
            <spain-text-field label="Contraseña" type="password" support="Mínimo 8 caracteres" autofocus></spain-text-field>
          </div>
        </div>

    </div>
  </div>
\``,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const o=["Default"];export{e as Default,o as __namedExportsOrder,l as default};
