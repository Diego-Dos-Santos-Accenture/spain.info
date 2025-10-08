export default {
  title: 'Foundations/Colors',
  parameters: { layout: 'fullscreen' }
};

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

export const ColorsPage = () => `
  <link rel="stylesheet" href="${stylesheet}" />
  ${toggleThemeScript()}
  <header class="top-nav">
    <div class="top-nav__inner">
      <div class="brand" title="Spain.info DS"></div>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero__title">Colores Primitivos</div>
    </div>
  </section>

  <section class="intro-strip">
    <div class="container">
      <p class="intro-text">Los colores primitivos constituyen la paleta esencial del sistema de diseño de spain.info. Son los tonos fundamentales que representan la identidad visual de la marca y sirven como base para la creación de todas las demás variaciones cromáticas.</p>
      <p class="intro-text">A partir de estos colores se construyen jerarquías, contrastes y matices que garantizan coherencia visual en todos los productos y canales. Su uso asegura una comunicación clara, consistente y alineada con los valores de la marca.</p>
    </div>
  </section>

  <div class="container" id="colors" style="padding-top: 12px;">
    <div class="section">
      <h2>Rojo</h2>
      <div class="color-grid">
        ${[
          ['#FDE5E9','Red 0.5','--spain-color-red-05'],
          ['#FAD3D0','Red 1','--spain-color-red-1'],
          ['#F5A49A','Red 2','--spain-color-red-2'],
          ['#F17F68','Red 3','--spain-color-red-3'],
          ['#EE4E35','Red 4','--spain-color-red-4'],
          ['#F70300','Red 5 (Primary)','--spain-color-red-5'],
          ['#BB2622','Red 6','--spain-color-red-6'],
          ['#9B1F22','Red 7','--spain-color-red-7'],
          ['#7C2021','Red 8','--spain-color-red-8'],
          ['#5D2021','Red 9','--spain-color-red-9'],
          ['#3F2021','Red 9.5','--spain-color-red-95']
        ].map(([hex,name,varName])=>`
          <div class="color-card">
            <div class="color-swatch" style="background-color: ${hex};"></div>
            <div class="color-name">${name}</div>
            <div class="color-hex">${hex}</div>
            <div class="color-variable">${varName}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <h2>Amarillo</h2>
      <div class="color-grid">
        ${[
          ['#FFFDE3','Yellow 0.5','--spain-color-yellow-05'],
          ['#FFF8CC','Yellow 1','--spain-color-yellow-1'],
          ['#FFF3B0','Yellow 2','--spain-color-yellow-2'],
          ['#FFED98','Yellow 3','--spain-color-yellow-3'],
          ['#FFE252','Yellow 4','--spain-color-yellow-4'],
          ['#FFD300','Yellow 5 (Primary)','--spain-color-yellow-5'],
          ['#CDAF00','Yellow 6','--spain-color-yellow-6'],
          ['#9D8300','Yellow 7','--spain-color-yellow-7'],
          ['#6D5800','Yellow 8','--spain-color-yellow-8'],
          ['#3D3200','Yellow 9','--spain-color-yellow-9'],
          ['#1A1900','Yellow 9.5','--spain-color-yellow-95']
        ].map(([hex,name,varName])=>`
          <div class="color-card">
            <div class="color-swatch" style="background-color: ${hex};"></div>
            <div class="color-name">${name}</div>
            <div class="color-hex">${hex}</div>
            <div class="color-variable">${varName}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <h2>Verde</h2>
      <div class="color-grid">
        ${[
          ['#F2F9EE','Green 0.5','--spain-color-green-05'],
          ['#E4F1DE','Green 1','--spain-color-green-1'],
          ['#C8E6C1','Green 2','--spain-color-green-2'],
          ['#AFDED3','Green 3','--spain-color-green-3'],
          ['#94C879','Green 4','--spain-color-green-4'],
          ['#70B459','Green 5 (Primary)','--spain-color-green-5'],
          ['#5B9B46','Green 6','--spain-color-green-6'],
          ['#478235','Green 7','--spain-color-green-7'],
          ['#306A23','Green 8','--spain-color-green-8'],
          ['#204F13','Green 9','--spain-color-green-9'],
          ['#1C310B','Green 9.5','--spain-color-green-95']
        ].map(([hex,name,varName])=>`
          <div class="color-card">
            <div class="color-swatch" style="background-color: ${hex};"></div>
            <div class="color-name">${name}</div>
            <div class="color-hex">${hex}</div>
            <div class="color-variable">${varName}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <h2>System Colors</h2>
      <div class="system-colors">
        ${[
          ['#EA2B30','Error','--spain-color-error-1'],
          ['#B08F30','Warning','--spain-color-warning-1'],
          ['#397C42','Success','--spain-color-success-1'],
          ['#2359C7','Info','--spain-color-info-1']
        ].map(([hex,name,varName])=>`
          <div class="color-card">
            <div class="color-swatch" style="background-color: ${hex};"></div>
            <div class="color-name">${name}</div>
            <div class="color-hex">${hex}</div>
            <div class="color-variable">${varName}</div>
          </div>
        `).join('')}
      </div>
    </div>

  <div class="container">
    <div class="toolbar">
      <button class="theme-toggle" onclick="window.__toggleTheme()">Toggle Dark Theme</button>
    </div>
  </div>
  </div>
`;

ColorsPage.storyName = 'Colors Page';