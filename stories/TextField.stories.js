export default {
  title: 'Components/Text Field',
  parameters: { layout: 'fullscreen' }
};

const baseStylesheet = '/styles/layout.css';
const stylesheet = '/styles/text-field.css';
const textFieldScript = '/stories/text-field.js';

export const Default = () => `
  <link rel="stylesheet" href="${baseStylesheet}" />
  <link rel="stylesheet" href="${stylesheet}" />
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
                      '<link rel="stylesheet" href="${baseStylesheet}" />'+
                      '<link rel="stylesheet" href="${stylesheet}" />'+
                      '<div class="text-field text-field--m text-field--inside">'+
                        '<label class="text-field__label">'+label+'</label>'+
                        '<input class="text-field__input" type="'+type+'" value="'+value+'" placeholder="'+label+'" />'+
                        '<div class="text-field__support">'+support+'</div>'+
                      '</div>';
      }
    }
    if(!customElements.get('spain-text-field')) customElements.define('spain-text-field', SpainTextField);
  })();
  </script>
  
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
          <img src="/images/TextField-structure.png" alt="Text Field Master" />
        </div>

        <div class="tf-title">Content & Supporting text</div>
        <div class="tf-card">
          <img src="/images/Content&Support.png" alt="Text Field Content" />
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
`;

Default.parameters = { docs: { source: { code: '<input class="text-field__input" />', state: 'closed' } } };
