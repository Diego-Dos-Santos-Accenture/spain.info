export default {
  title: 'Foundations/Colors',
  parameters: { layout: 'fullscreen' }
};

const baseStylesheet = 'styles/layout.css';
const stylesheet = 'styles/colors.css';

function toggleThemeScript() {
  const script = document.createElement('script');
  script.innerHTML = `window.__toggleTheme = function(){
    document.body.classList.toggle('dark-theme');
    const button = document.querySelector('.theme-toggle');
    if (button) button.textContent = document.body.classList.contains('dark-theme') ? 'Toggle Light Theme' : 'Toggle Dark Theme';
  }`;
  return script.outerHTML;
}

function hexToRgb(hex) {
  const clean = hex.replace('#','');
  const bigint = parseInt(clean.length === 3 ? clean.split('').map(c=>c+c).join('') : clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}
function relativeLuminance({r,g,b}) {
  const srgb = [r,g,b].map(v=>{
    v = v/255;
    return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4);
  });
  return 0.2126*srgb[0] + 0.7152*srgb[1] + 0.0722*srgb[2];
}
function getContrastText(bgHex) {
  try {
    const L = relativeLuminance(hexToRgb(bgHex));
    return L > 0.5 ? '#1B1C20' : '#FFFFFF';
  } catch { return '#1B1C20'; }
}

export const ColorTokens = () => `
  <link rel="stylesheet" href="${baseStylesheet}" />
  <link rel="stylesheet" href="${stylesheet}" />

  <header class="top-nav">
    <div class="top-nav__inner">
      <div class="brand" title="Spain.info DS"></div>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero__title">Color Tokens</div>
    </div>
  </section>

  <section class="intro-strip">
    <div class="container">
      <p class="intro-text">Los tokens de color establecen una capa intermedia entre los colores primitivos y su uso en la interfaz. Funcionan como variables que permiten aplicar la paleta cromática de manera consistente y flexible en todo el sistema de diseño, garantizando coherencia y escalabilidad.</p>
    </div>
  </section>

  

  <div class="container">
    <div class="section">
      <div class="section-row">
        <aside class="section-aside">
          <h2>Background</h2>
          <p>Los tokens de fondo definen las variantes cromáticas que se aplican a los contenedores y superficies. Se han agrupado en versiones claras (light) y oscuras (dark), lo que permite adaptarse a diferentes jerarquías visuales y asegurar contraste y legibilidad en cada contexto.</p>
        </aside>
        <div class="section-content">
      <div class="color-grid">
        ${[
          ['#FFFFFF','Background 01 - White','--spain-bg-01'],
          ['#F8F8F7','Background 02 - Soft Grey','--spain-bg-02'],
          ['#1B1C20','Background 03 - Black','--spain-bg-03'],
          ['#FFDB00','Background 04 - Yellow','--spain-bg-04'],
          ['#E71C03','Background 05 - Red','--spain-bg-05'],
          ['#619546','Background 06 - Green','--spain-bg-06'],
          ['#FF9999','Background - Error on-light','--spain-bg-error-light'],
          ['#9BDEB6','Background - Success on-light','--spain-bg-success-light'],
          ['#9EBDEB','Background - Info on-light','--spain-bg-info-light'],
          ['#FCF4D6','Background - Warning on-light','--spain-bg-warning-light']
        ].map(([hex,name,varName])=>{
          const text = getContrastText(hex);
          return `
          <div class="color-card card-lg">
            <div class="color-swatch swatch-lg swatch-center" style="background-color: ${hex};">
              <div class="swatch-typo-aa ${getContrastText(hex)==='#FFFFFF' ? 'text-light' : 'text-dark'}">Aa</div>
              <div class="swatch-typo-name ${getContrastText(hex)==='#FFFFFF' ? 'text-light' : 'text-dark'}">${name}</div>
            </div>
            <div class="color-hex">${hex}</div>
            <div class="color-variable">${varName}</div>
          </div>`;
        }).join('')}
      </div>
        </div>
      </div>
    </div>

    

    <div class="section">
      <div class="section-row">
        <aside class="section-aside">
          <h2>Border</h2>
          <p>Los tokens de color de borde se emplean en bordes como botones secundarios, tablas, text fields, o cualquier componente que haga uso de borde para resaltar su contenido.</p>
        </aside>
        <div class="section-content">
      <div class="color-grid">
        ${[
          ['#1B1C20','Border 01 - Black','--spain-border-01'],
          ['#B2B2B2','Border 02 - Grey','--spain-border-02'],
          ['#FFDB00','Border 03 - Yellow','--spain-border-03'],
          ['#E71C03','Border 04 - Red','--spain-border-04'],
          ['#FFFFFF','Border 05 - White','--spain-border-05']
        ].map(([hex,name,varName])=>{
          return `
          <div class="color-card card-lg card-bordered">
            <div class="color-swatch swatch-lg swatch-center" style="background-color:#FFFFFF; border: 2px solid ${hex};">
              <div class="swatch-typo-aa text-dark">Aa</div>
              <div class="swatch-typo-name text-dark">${name}</div>
            </div>
            <div class="color-hex">${hex}</div>
            <div class="color-variable">${varName}</div>
          </div>`;
        }).join('')}
      </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-row">
        <aside class="section-aside">
          <h2>Text</h2>
          <p>Los tokens de color de texto especifican las variantes tipográficas en función de su propósito: principal, secundario, deshabilitado o inverso. Esto asegura que el contenido escrito mantenga la legibilidad y el contraste adecuados, alineándose con las pautas de accesibilidad.</p>
          <p>Este icono indica que el color de texto y fondo contrastan en base a criterios AA de Accesibilidad.</p>
        </aside>
        <div class="section-content">
      <div class="color-grid">
        ${[
          ['#1B1C20','Text on-light 01','--spain-text-onlight-01','light'],
          ['#666666','Text on-light 02','--spain-text-onlight-02','light'],
          ['#FFFFFF','Text on-dark 01','--spain-text-ondark-01','dark'],
          ['#E5E5E5','Text on-dark 02','--spain-text-ondark-02','dark'],
          ['#999999','Text on-dark 03','--spain-text-ondark-03','dark'],
          ['#EA2828','Error on-light 01','--spain-text-error-light-01','light'],
          ['#197C42','Success on-light 01','--spain-text-success-light-01','light'],
          ['#2969C7','Info on-light 01','--spain-text-info-light-01','light'],
          ['#8D6F05','Warning on-light 01','--spain-text-warning-light-01','light'],
          ['#FF9999','Error on-dark 02','--spain-text-error-dark-02','dark'],
          ['#9BDEB6','Success on-dark 02','--spain-text-success-dark-02','dark'],
          ['#9EBDEB','Info on-dark 02','--spain-text-info-dark-02','dark'],
          ['#F1C21B','Warning on-dark 02','--spain-text-warning-dark-02','dark']
        ].map(([hex,name,varName,mode])=>{
          const bg = mode === 'dark' ? '#1B1C20' : '#FFFFFF';
          return `
          <div class="color-card card-lg">
            <div class="color-swatch swatch-lg swatch-center" style="background-color:${bg};">
              <div class="swatch-typo-aa" style="color:${hex}">Aa</div>
              <div class="swatch-typo-name" style="color:${hex}">${name}</div>
            </div>
            <div class="color-hex">${hex}</div>
            <div class="color-variable">${varName}</div>
          </div>`;
        }).join('')}
      </div>
      <p class="intro-text mt-16">Este icono indica contraste AA accesible entre texto y fondo.</p>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-row">
        <aside class="section-aside">
          <h2>Interaction</h2>
          <p>Los tokens de color de interacción definen las variantes cromáticas que se aplican a los elementos con interacción. Se dividen en versiones clara (light), oscura (dark) y para elementos seleccionados (selected), lo que permite adaptarse a diferentes jerarquías visuales y asegurar contraste y legibilidad en cada contexto.</p>
          <p>Los tokens de color “Interaction map” se utilizan únicamente para elementos de mapas.</p>
        </aside>
        <div class="section-content">
      <div class="color-grid">
        ${[
          ['#B91602','Interaction link-light 01','--spain-link-light-01'],
          ['#EC4935','Interaction link-dark 01','--spain-link-dark-01'],
          ['#FFDB00','Interaction Selected','--spain-interaction-selected']
        ].map(([hex,name,varName])=>{
          const text = getContrastText(hex);
          return `
          <div class="color-card card-lg">
            <div class="color-swatch swatch-lg swatch-center" style="background-color:${hex};">
              <div class="swatch-typo-aa ${getContrastText(hex)==='#FFFFFF' ? 'text-light' : 'text-dark'} ${name.includes('link') ? 'is-link' : ''}">Aa</div>
              <div class="swatch-typo-name ${getContrastText(hex)==='#FFFFFF' ? 'text-light' : 'text-dark'}">${name}</div>
            </div>
            <div class="color-hex">${hex}</div>
            <div class="color-variable">${varName}</div>
          </div>`;
        }).join('')}
      </div>
        </div>
      </div>
    </div>

    

    <div class="section">
      <div class="section-row">
        <aside class="section-aside">
          <h2>Components</h2>
          <p>Los tokens de color de componentes aplican los valores cromáticos a elementos concretos como botones, formularios, tarjetas o iconos. Su función es mantener consistencia visual y de marca en todos los patrones interactivos, sin importar el contexto o la plataforma.</p>
        </aside>
        <div class="section-content">
      <div class="color-grid">
        ${[
          ['#E71C03','Button - Primary Light - Active','--spain-button-primary-light-active'],
          ['#EC4935','Button - Primary Light - Hover','--spain-button-primary-light-hover'],
          ['#E5E5E5','Button - Primary Light - Disabled','--spain-button-primary-light-disabled'],
          ['#B91602','Button - Primary Light - Pressed & Focus','--spain-button-primary-light-pressed-focus']
        ].map(([hex,name,varName])=>{
          const text = getContrastText(hex);
          return `
          <div class="color-card card-lg">
            <div class="color-swatch swatch-lg swatch-center" style="background-color:${hex};">
              <div class="swatch-typo-aa ${getContrastText(hex)==='#FFFFFF' ? 'text-light' : 'text-dark'}">Aa</div>
              <div class="swatch-typo-name ${getContrastText(hex)==='#FFFFFF' ? 'text-light' : 'text-dark'}">${name}</div>
            </div>
            <div class="color-hex">${hex}</div>
            <div class="color-variable">${varName}</div>
          </div>`;
        }).join('')}
      </div>
        </div>
      </div>
    </div>
  </div>
`;

ColorTokens.storyName = 'Color Tokens';
