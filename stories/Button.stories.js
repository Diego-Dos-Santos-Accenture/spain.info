export default {
  title: 'Components/Button',
  parameters: { layout: 'fullscreen' }
};

const stylesheet = 'styles/buttons.css';

export const Primary = () => `
  <link rel="stylesheet" href="${stylesheet}" />
  <script>
    class SpainButton extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
      
      connectedCallback() {
        this.render();
        this.setupEventListeners();
      }
      
      disconnectedCallback() {
        // Clean up event listeners
        const button = this.shadowRoot?.querySelector('button');
        if (button && this.handleMouseEnter) {
          button.removeEventListener('mouseenter', this.handleMouseEnter);
          button.removeEventListener('mouseleave', this.handleMouseLeave);
          button.removeEventListener('focus', this.handleFocus);
          button.removeEventListener('blur', this.handleBlur);
          button.removeEventListener('mousedown', this.handleMouseDown);
          button.removeEventListener('mouseup', this.handleMouseUp);
        }
      }
      
      setupEventListeners() {
        const button = this.shadowRoot.querySelector('button');
        if (button) {
          // Bind methods to preserve context
          this.handleMouseEnter = () => button.classList.add('btn-hover');
          this.handleMouseLeave = () => button.classList.remove('btn-hover');
          this.handleFocus = () => button.classList.add('btn-focused');
          this.handleBlur = () => button.classList.remove('btn-focused');
          this.handleMouseDown = () => button.classList.add('btn-pressed');
          this.handleMouseUp = () => button.classList.remove('btn-pressed');
          
          button.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('click'));
          });
          
          // Add hover effects
          button.addEventListener('mouseenter', this.handleMouseEnter);
          button.addEventListener('mouseleave', this.handleMouseLeave);
          button.addEventListener('focus', this.handleFocus);
          button.addEventListener('blur', this.handleBlur);
          button.addEventListener('mousedown', this.handleMouseDown);
          button.addEventListener('mouseup', this.handleMouseUp);
        }
      }
      
      render() {
        const variant = this.getAttribute('variant') || 'primary';
        const size = this.getAttribute('size') || 'm';
        const disabled = this.getAttribute('disabled') === 'true';
        const icon = this.getAttribute('icon') || '';
        const darkTheme = this.getAttribute('dark-theme') === 'true';
        
        const baseClasses = \`btn btn-\${variant} btn-\${size} button__btn button__btn--\${variant} button__btn--\${size}\`;
        const darkClasses = darkTheme ? 'dark-theme' : '';
        const allClasses = \`\${baseClasses} \${darkClasses}\`.trim();
        
        this.shadowRoot.innerHTML = \`
          <link rel="stylesheet" href="${stylesheet}" />
          <button 
            class="\${allClasses}"
            \${disabled ? 'disabled' : ''}
          >
            <slot></slot>
            \${icon ? \`<img src="\${icon}" alt="icon" class="btn-icon button__icon" />\` : ''}
          </button>
        \`;
      }
    }
    
    customElements.define('spain-button', SpainButton);
  </script>

  <header class="top-nav">
    <div class="top-nav__inner">
      <div class="brand" title="Spain.info DS"></div>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero__title">Button - Primary</div>
    </div>
  </section>

  <div class="container">
    <div class="section">
      <h2>Primary Button</h2>
      
      <div class="button-demo">
        <h3>Sizes</h3>
        <div class="button-row">
          <spain-button variant="primary" size="l" icon="/images/Placeholder.svg">Button</spain-button>
          <spain-button variant="primary" size="m" icon="/images/Placeholder.svg">Button</spain-button>
          <spain-button variant="primary" size="xs" icon="/images/Placeholder.svg">Button</spain-button>
        </div>
        
        <h3>States</h3>
        <div class="button-row">
          <spain-button variant="primary" size="l">Active</spain-button>
          <spain-button variant="primary" size="l" disabled="true">Disabled</spain-button>
        </div>
      </div>
    </div>
  </div>
`;
Primary.parameters = {
  docs: { source: { code: '<button class="btn btn-primary btn-l">Button</button>', state: 'closed' } },
  stencil: {
    usage: 'Botón primario con diferentes tamaños y estados.',
    html: '<spain-button variant="primary" size="l">Button</spain-button>',
    css: `
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 24px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: #FFD300;
  color: #1B1C20;
}

.btn-primary:hover {
  background: #E6BE00;
}

.btn-primary:disabled {
  background: #E5E5E5;
  color: #999;
  cursor: not-allowed;
}

.btn-l {
  padding: 16px 32px;
  font-size: 16px;
}

.btn-m {
  padding: 12px 24px;
  font-size: 14px;
}

.btn-xs {
  padding: 8px 16px;
  font-size: 12px;
}

.btn-icon {
  width: 16px;
  height: 16px;
}
`,
    tsx: `
import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({ tag: 'spain-button', shadow: true })
export class SpainButton {
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' | 'link' = 'primary';
  @Prop() size: 'l' | 'm' | 'xs' = 'm';
  @Prop() disabled: boolean = false;
  @Prop() icon: string = '';
  
  @Event() click: EventEmitter<void>;
  
  private handleClick = () => {
    if (!this.disabled) {
      this.click.emit();
    }
  };
  
  render() {
    const buttonClass = \`btn btn-\${this.variant} btn-\${this.size}\`;
    
    return (
      <button 
        class={buttonClass} 
        disabled={this.disabled}
        onClick={this.handleClick}
      >
        <slot />
        {this.icon && <img class="btn-icon" src={this.icon} alt="icon" />}
      </button>
    );
  }
}
`
  }
};

export const Secondary = () => `
  <link rel="stylesheet" href="${stylesheet}" />
  <script>
    // Stencil Button Component (inline para demo)
    class SpainButton extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
      
      connectedCallback() {
        this.render();
        this.setupEventListeners();
      }
      
      disconnectedCallback() {
        // Clean up event listeners
        const button = this.shadowRoot?.querySelector('button');
        if (button && this.handleMouseEnter) {
          button.removeEventListener('mouseenter', this.handleMouseEnter);
          button.removeEventListener('mouseleave', this.handleMouseLeave);
          button.removeEventListener('focus', this.handleFocus);
          button.removeEventListener('blur', this.handleBlur);
          button.removeEventListener('mousedown', this.handleMouseDown);
          button.removeEventListener('mouseup', this.handleMouseUp);
        }
      }
      
      setupEventListeners() {
        const button = this.shadowRoot.querySelector('button');
        if (button) {
          // Bind methods to preserve context
          this.handleMouseEnter = () => button.classList.add('btn-hover');
          this.handleMouseLeave = () => button.classList.remove('btn-hover');
          this.handleFocus = () => button.classList.add('btn-focused');
          this.handleBlur = () => button.classList.remove('btn-focused');
          this.handleMouseDown = () => button.classList.add('btn-pressed');
          this.handleMouseUp = () => button.classList.remove('btn-pressed');
          
          button.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('click'));
          });
          
          // Add hover effects
          button.addEventListener('mouseenter', this.handleMouseEnter);
          button.addEventListener('mouseleave', this.handleMouseLeave);
          button.addEventListener('focus', this.handleFocus);
          button.addEventListener('blur', this.handleBlur);
          button.addEventListener('mousedown', this.handleMouseDown);
          button.addEventListener('mouseup', this.handleMouseUp);
        }
      }
      
      render() {
        const variant = this.getAttribute('variant') || 'secondary';
        const size = this.getAttribute('size') || 'm';
        const disabled = this.getAttribute('disabled') === 'true';
        const icon = this.getAttribute('icon') || '';
        
        this.shadowRoot.innerHTML = \`
          <link rel="stylesheet" href="${stylesheet}" />
          <button 
            class="btn btn-\${variant} btn-\${size} button__btn button__btn--\${variant} button__btn--\${size}"
            \${disabled ? 'disabled' : ''}
          >
            <slot></slot>
            \${icon ? \`<img src="\${icon}" alt="icon" class="btn-icon button__icon" />\` : ''}
          </button>
        \`;
      }
    }
    
    customElements.define('spain-button', SpainButton);
  </script>

  <header class="top-nav">
    <div class="top-nav__inner">
      <div class="brand" title="Spain.info DS"></div>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero__title">Button - Secondary</div>
    </div>
  </section>

  <div class="container">
    <div class="section">
      <h2>Secondary Button</h2>
      
      <div class="button-demo">
        <h3>Sizes</h3>
        <div class="button-row">
          <spain-button variant="secondary" size="l" icon="/images/Placeholder.svg">Button</spain-button>
          <spain-button variant="secondary" size="m" icon="/images/Placeholder.svg">Button</spain-button>
          <spain-button variant="secondary" size="xs" icon="/images/Placeholder.svg">Button</spain-button>
        </div>
        
        <h3>States</h3>
        <div class="button-row">
          <spain-button variant="secondary" size="l">Active</spain-button>
          <spain-button variant="secondary" size="l" disabled="true">Disabled</spain-button>
        </div>
      </div>
    </div>
  </div>
`;
Secondary.parameters = {
  docs: { source: { code: '<button class="btn btn-secondary btn-l">Button</button>', state: 'closed' } },
  stencil: {
    usage: 'Botón secundario con borde y fondo transparente.',
    html: '<spain-button variant="secondary" size="l">Button</spain-button>',
    css: `
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 24px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary {
  background: transparent;
  color: #1B1C20;
  border: 1px solid #1B1C20;
}

.btn-secondary:hover {
  background: #1B1C20;
  color: #fff;
}

.btn-secondary:disabled {
  background: transparent;
  color: #999;
  border-color: #E5E5E5;
  cursor: not-allowed;
}

.btn-l {
  padding: 16px 32px;
  font-size: 16px;
}

.btn-m {
  padding: 12px 24px;
  font-size: 14px;
}

.btn-xs {
  padding: 8px 16px;
  font-size: 12px;
}

.btn-icon {
  width: 16px;
  height: 16px;
}
`,
    tsx: `
import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({ tag: 'spain-button', shadow: true })
export class SpainButton {
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' | 'link' = 'primary';
  @Prop() size: 'l' | 'm' | 'xs' = 'm';
  @Prop() disabled: boolean = false;
  @Prop() icon: string = '';
  
  @Event() click: EventEmitter<void>;
  
  private handleClick = () => {
    if (!this.disabled) {
      this.click.emit();
    }
  };
  
  render() {
    const buttonClass = \`btn btn-\${this.variant} btn-\${this.size}\`;
    
    return (
      <button 
        class={buttonClass} 
        disabled={this.disabled}
        onClick={this.handleClick}
      >
        <slot />
        {this.icon && <img class="btn-icon" src={this.icon} alt="icon" />}
      </button>
    );
  }
}
`
  }
};

export const Tertiary = () => `
  <link rel="stylesheet" href="${stylesheet}" />
  <script>
    class SpainButton extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
      
      connectedCallback() {
        this.render();
        this.setupEventListeners();
      }
      
      disconnectedCallback() {
        // Clean up event listeners
        const button = this.shadowRoot?.querySelector('button');
        if (button && this.handleMouseEnter) {
          button.removeEventListener('mouseenter', this.handleMouseEnter);
          button.removeEventListener('mouseleave', this.handleMouseLeave);
          button.removeEventListener('focus', this.handleFocus);
          button.removeEventListener('blur', this.handleBlur);
          button.removeEventListener('mousedown', this.handleMouseDown);
          button.removeEventListener('mouseup', this.handleMouseUp);
        }
      }
      
      setupEventListeners() {
        const button = this.shadowRoot.querySelector('button');
        if (button) {
          // Bind methods to preserve context
          this.handleMouseEnter = () => button.classList.add('btn-hover');
          this.handleMouseLeave = () => button.classList.remove('btn-hover');
          this.handleFocus = () => button.classList.add('btn-focused');
          this.handleBlur = () => button.classList.remove('btn-focused');
          this.handleMouseDown = () => button.classList.add('btn-pressed');
          this.handleMouseUp = () => button.classList.remove('btn-pressed');
          
          button.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('click'));
          });
          
          // Add hover effects
          button.addEventListener('mouseenter', this.handleMouseEnter);
          button.addEventListener('mouseleave', this.handleMouseLeave);
          button.addEventListener('focus', this.handleFocus);
          button.addEventListener('blur', this.handleBlur);
          button.addEventListener('mousedown', this.handleMouseDown);
          button.addEventListener('mouseup', this.handleMouseUp);
        }
      }
      
      render() {
        const variant = this.getAttribute('variant') || 'tertiary';
        const size = this.getAttribute('size') || 'm';
        const disabled = this.getAttribute('disabled') === 'true';
        const icon = this.getAttribute('icon') || '';
        
        this.shadowRoot.innerHTML = \`
          <link rel="stylesheet" href="${stylesheet}" />
          <button 
            class="btn btn-\${variant} btn-\${size} button__btn button__btn--\${variant} button__btn--\${size}"
            \${disabled ? 'disabled' : ''}
          >
            <slot></slot>
            \${icon ? \`<img src="\${icon}" alt="icon" class="btn-icon button__icon" />\` : ''}
          </button>
        \`;
      }
    }
    
    customElements.define('spain-button', SpainButton);
  </script>

  <header class="top-nav">
    <div class="top-nav__inner">
      <div class="brand" title="Spain.info DS"></div>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero__title">Button - Tertiary</div>
    </div>
  </section>

  <div class="container">
    <div class="section">
      <h2>Tertiary Button</h2>
      
      <div class="button-demo">
        <h3>Sizes</h3>
        <div class="button-row">
          <spain-button variant="tertiary" size="l" icon="/images/Placeholder.svg">Button</spain-button>
          <spain-button variant="tertiary" size="m" icon="/images/Placeholder.svg">Button</spain-button>
          <spain-button variant="tertiary" size="xs" icon="/images/Placeholder.svg">Button</spain-button>
        </div>
        
        <h3>States</h3>
        <div class="button-row">
          <spain-button variant="tertiary" size="l">Active</spain-button>
          <spain-button variant="tertiary" size="l" disabled="true">Disabled</spain-button>
        </div>
      </div>
    </div>
  </div>
`;
Tertiary.parameters = {
  docs: { source: { code: '<button class="btn btn-tertiary btn-l">Button</button>', state: 'closed' } },
  stencil: {
    usage: 'Botón terciario con estilo minimalista.',
    html: '<spain-button variant="tertiary" size="l">Button</spain-button>',
    css: `
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 24px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-tertiary {
  background: transparent;
  color: #666;
  text-decoration: underline;
}

.btn-tertiary:hover {
  color: #1B1C20;
  text-decoration: none;
}

.btn-tertiary:disabled {
  color: #999;
  cursor: not-allowed;
  text-decoration: none;
}

.btn-l {
  padding: 16px 32px;
  font-size: 16px;
}

.btn-m {
  padding: 12px 24px;
  font-size: 14px;
}

.btn-xs {
  padding: 8px 16px;
  font-size: 12px;
}

.btn-icon {
  width: 16px;
  height: 16px;
}
`,
    tsx: `
import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({ tag: 'spain-button', shadow: true })
export class SpainButton {
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' | 'link' = 'primary';
  @Prop() size: 'l' | 'm' | 'xs' = 'm';
  @Prop() disabled: boolean = false;
  @Prop() icon: string = '';
  
  @Event() click: EventEmitter<void>;
  
  private handleClick = () => {
    if (!this.disabled) {
      this.click.emit();
    }
  };
  
  render() {
    const buttonClass = \`btn btn-\${this.variant} btn-\${this.size}\`;
    
    return (
      <button 
        class={buttonClass} 
        disabled={this.disabled}
        onClick={this.handleClick}
      >
        <slot />
        {this.icon && <img class="btn-icon" src={this.icon} alt="icon" />}
      </button>
    );
  }
}
`
  }
};

export const ButtonLink = () => `
  <link rel="stylesheet" href="${stylesheet}" />
  <script>
    class SpainButton extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
      
      connectedCallback() {
        this.render();
        this.setupEventListeners();
      }
      
      disconnectedCallback() {
        // Clean up event listeners
        const button = this.shadowRoot?.querySelector('button');
        if (button && this.handleMouseEnter) {
          button.removeEventListener('mouseenter', this.handleMouseEnter);
          button.removeEventListener('mouseleave', this.handleMouseLeave);
          button.removeEventListener('focus', this.handleFocus);
          button.removeEventListener('blur', this.handleBlur);
          button.removeEventListener('mousedown', this.handleMouseDown);
          button.removeEventListener('mouseup', this.handleMouseUp);
        }
      }
      
      setupEventListeners() {
        const button = this.shadowRoot.querySelector('button');
        if (button) {
          // Bind methods to preserve context
          this.handleMouseEnter = () => button.classList.add('btn-hover');
          this.handleMouseLeave = () => button.classList.remove('btn-hover');
          this.handleFocus = () => button.classList.add('btn-focused');
          this.handleBlur = () => button.classList.remove('btn-focused');
          this.handleMouseDown = () => button.classList.add('btn-pressed');
          this.handleMouseUp = () => button.classList.remove('btn-pressed');
          
          button.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('click'));
          });
          
          // Add hover effects
          button.addEventListener('mouseenter', this.handleMouseEnter);
          button.addEventListener('mouseleave', this.handleMouseLeave);
          button.addEventListener('focus', this.handleFocus);
          button.addEventListener('blur', this.handleBlur);
          button.addEventListener('mousedown', this.handleMouseDown);
          button.addEventListener('mouseup', this.handleMouseUp);
        }
      }
      
      render() {
        const variant = this.getAttribute('variant') || 'link';
        const size = this.getAttribute('size') || 'm';
        const disabled = this.getAttribute('disabled') === 'true';
        const icon = this.getAttribute('icon') || '';
        
        this.shadowRoot.innerHTML = \`
          <link rel="stylesheet" href="${stylesheet}" />
          <button 
            class="btn btn-\${variant} btn-\${size} button__btn button__btn--\${variant} button__btn--\${size}"
            \${disabled ? 'disabled' : ''}
          >
            <slot></slot>
            \${icon ? \`<img src="\${icon}" alt="icon" class="btn-icon button__icon" />\` : ''}
          </button>
        \`;
      }
    }
    
    customElements.define('spain-button', SpainButton);
  </script>

  <header class="top-nav">
    <div class="top-nav__inner">
      <div class="brand" title="Spain.info DS"></div>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero__title">Button - Link</div>
    </div>
  </section>

  <div class="container">
    <div class="section">
      <h2>Button Link</h2>
      
      <div class="button-demo">
        <h3>Sizes</h3>
        <div class="button-row">
          <spain-button variant="link" size="l" icon="/images/Placeholder.svg">Button</spain-button>
          <spain-button variant="link" size="m" icon="/images/Placeholder.svg">Button</spain-button>
          <spain-button variant="link" size="xs" icon="/images/Placeholder.svg">Button</spain-button>
        </div>
        
        <h3>States</h3>
        <div class="button-row">
          <spain-button variant="link" size="l">Active</spain-button>
          <spain-button variant="link" size="l" disabled="true">Disabled</spain-button>
        </div>
      </div>
    </div>
  </div>
`;
ButtonLink.parameters = {
  docs: { source: { code: '<button class="btn btn-link btn-l">Button</button>', state: 'closed' } },
  stencil: {
    usage: 'Botón con estilo de enlace para acciones secundarias.',
    html: '<spain-button variant="link" size="l">Button</spain-button>',
    css: `
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 24px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-link {
  background: transparent;
  color: #1B1C20;
  text-decoration: none;
  padding: 8px 0;
}

.btn-link:hover {
  color: #FFD300;
  text-decoration: underline;
}

.btn-link:disabled {
  color: #999;
  cursor: not-allowed;
  text-decoration: none;
}

.btn-l {
  padding: 12px 0;
  font-size: 16px;
}

.btn-m {
  padding: 8px 0;
  font-size: 14px;
}

.btn-xs {
  padding: 6px 0;
  font-size: 12px;
}

.btn-icon {
  width: 16px;
  height: 16px;
}
`,
    tsx: `
import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({ tag: 'spain-button', shadow: true })
export class SpainButton {
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' | 'link' = 'primary';
  @Prop() size: 'l' | 'm' | 'xs' = 'm';
  @Prop() disabled: boolean = false;
  @Prop() icon: string = '';
  
  @Event() click: EventEmitter<void>;
  
  private handleClick = () => {
    if (!this.disabled) {
      this.click.emit();
    }
  };
  
  render() {
    const buttonClass = \`btn btn-\${this.variant} btn-\${this.size}\`;
    
    return (
      <button 
        class={buttonClass} 
        disabled={this.disabled}
        onClick={this.handleClick}
      >
        <slot />
        {this.icon && <img class="btn-icon" src={this.icon} alt="icon" />}
      </button>
    );
  }
}
`
  }
};

export const DarkTheme = () => `
  <link rel="stylesheet" href="${stylesheet}" />
  <script>
    // Stencil Button Component (inline para demo)
    class SpainButton extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
      
      connectedCallback() {
        this.render();
        this.setupEventListeners();
      }
      
      disconnectedCallback() {
        // Clean up event listeners
        const button = this.shadowRoot?.querySelector('button');
        if (button && this.handleMouseEnter) {
          button.removeEventListener('mouseenter', this.handleMouseEnter);
          button.removeEventListener('mouseleave', this.handleMouseLeave);
          button.removeEventListener('focus', this.handleFocus);
          button.removeEventListener('blur', this.handleBlur);
          button.removeEventListener('mousedown', this.handleMouseDown);
          button.removeEventListener('mouseup', this.handleMouseUp);
        }
      }
      
      setupEventListeners() {
        const button = this.shadowRoot.querySelector('button');
        if (button) {
          // Bind methods to preserve context
          this.handleMouseEnter = () => button.classList.add('btn-hover');
          this.handleMouseLeave = () => button.classList.remove('btn-hover');
          this.handleFocus = () => button.classList.add('btn-focused');
          this.handleBlur = () => button.classList.remove('btn-focused');
          this.handleMouseDown = () => button.classList.add('btn-pressed');
          this.handleMouseUp = () => button.classList.remove('btn-pressed');
          
          button.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('click'));
          });
          
          // Add hover effects
          button.addEventListener('mouseenter', this.handleMouseEnter);
          button.addEventListener('mouseleave', this.handleMouseLeave);
          button.addEventListener('focus', this.handleFocus);
          button.addEventListener('blur', this.handleBlur);
          button.addEventListener('mousedown', this.handleMouseDown);
          button.addEventListener('mouseup', this.handleMouseUp);
        }
      }
      
      render() {
        const variant = this.getAttribute('variant') || 'primary';
        const size = this.getAttribute('size') || 'm';
        const disabled = this.getAttribute('disabled') === 'true';
        const icon = this.getAttribute('icon') || '';
        const darkTheme = this.getAttribute('dark-theme') === 'true';
        
        const baseClasses = \`btn btn-\${variant} btn-\${size} button__btn button__btn--\${variant} button__btn--\${size}\`;
        const darkClasses = darkTheme ? 'dark-theme' : '';
        const allClasses = \`\${baseClasses} \${darkClasses}\`.trim();
        
        this.shadowRoot.innerHTML = \`
          <link rel="stylesheet" href="${stylesheet}" />
          <button 
            class="\${allClasses}"
            \${disabled ? 'disabled' : ''}
          >
            <slot></slot>
            \${icon ? \`<img src="\${icon}" alt="icon" class="btn-icon button__icon" />\` : ''}
          </button>
        \`;
      }
    }
    
    customElements.define('spain-button', SpainButton);
  </script>

  <header class="top-nav">
    <div class="top-nav__inner">
      <div class="brand" title="Spain.info DS"></div>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero__title">Buttons - Dark Theme</div>
    </div>
  </section>

  <div class="container dark-theme">
    <div class="section">
      <h2>All Button Variants - Dark Theme</h2>
      
      <div class="button-demo">
        <h3>Primary</h3>
        <div class="button-row">
          <spain-button variant="primary" size="l" icon="/images/Placeholder.svg">Button</spain-button>
          <spain-button variant="primary" size="m" icon="/images/Placeholder.svg">Button</spain-button>
          <spain-button variant="primary" size="xs" icon="/images/Placeholder.svg">Button</spain-button>
        </div>
        
        <h3>Secondary</h3>
        <div class="button-row">
          <spain-button variant="secondary" size="l" icon="/images/Placeholder.svg" dark-theme="true">Button</spain-button>
          <spain-button variant="secondary" size="m" icon="/images/Placeholder.svg" dark-theme="true">Button</spain-button>
          <spain-button variant="secondary" size="xs" icon="/images/Placeholder.svg" dark-theme="true">Button</spain-button>
        </div>
        
        <h3>Tertiary</h3>
        <div class="button-row">
          <spain-button variant="tertiary" size="l" icon="/images/Placeholder.svg" dark-theme="true">Button</spain-button>
          <spain-button variant="tertiary" size="m" icon="/images/Placeholder.svg" dark-theme="true">Button</spain-button>
          <spain-button variant="tertiary" size="xs" icon="/images/Placeholder.svg" dark-theme="true">Button</spain-button>
        </div>
        
        <h3>Button Link</h3>
        <div class="button-row">
          <spain-button variant="link" size="l" icon="/images/Placeholder.svg">Button</spain-button>
          <spain-button variant="link" size="m" icon="/images/Placeholder.svg">Button</spain-button>
          <spain-button variant="link" size="xs" icon="/images/Placeholder.svg">Button</spain-button>
        </div>
      </div>
    </div>
  </div>
`;

DarkTheme.parameters = {
  docs: { source: { code: '<div class="dark-theme"><button class="btn btn-primary">Button</button></div>', state: 'closed' } },
  stencil: {
    usage: 'Todos los botones en tema oscuro con estilos adaptados.',
    html: '<div class="dark-theme"><spain-button variant="primary" size="l">Button</spain-button></div>',
    css: `
.dark-theme {
  background: #1B1C20;
  color: #fff;
  padding: 24px;
  border-radius: 8px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 24px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: #FFD300;
  color: #1B1C20;
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
}

.btn-tertiary {
  background: transparent;
  color: #999;
  text-decoration: underline;
}

.btn-link {
  background: transparent;
  color: #fff;
  text-decoration: none;
}

.btn-l {
  padding: 16px 32px;
  font-size: 16px;
}

.btn-m {
  padding: 12px 24px;
  font-size: 14px;
}

.btn-xs {
  padding: 8px 16px;
  font-size: 12px;
}

.btn-icon {
  width: 16px;
  height: 16px;
}
`,
    tsx: `
import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({ tag: 'spain-button', shadow: true })
export class SpainButton {
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' | 'link' = 'primary';
  @Prop() size: 'l' | 'm' | 'xs' = 'm';
  @Prop() disabled: boolean = false;
  @Prop() icon: string = '';
  @Prop() darkTheme: boolean = false;
  
  @Event() click: EventEmitter<void>;
  
  private handleClick = () => {
    if (!this.disabled) {
      this.click.emit();
    }
  };
  
  render() {
    const buttonClass = \`btn btn-\${this.variant} btn-\${this.size}\`;
    const containerClass = this.darkTheme ? 'dark-theme' : '';
    
    return (
      <div class={containerClass}>
        <button 
          class={buttonClass} 
          disabled={this.disabled}
          onClick={this.handleClick}
        >
          <slot />
          {this.icon && <img class="btn-icon" src={this.icon} alt="icon" />}
        </button>
      </div>
    );
  }
}
`
  }
};