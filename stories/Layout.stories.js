export default {
  title: 'Foundations/Layout',
  parameters: { layout: 'fullscreen' }
};

const stylesheet = 'styles/layout.css';

export const Default = () => `
  <link rel="stylesheet" href="${stylesheet}" />
  <header class="top-nav">
    <div class="top-nav__inner">
      <div class="brand" title="Spain.info DS"></div>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero__title">Layout</div>
    </div>
  </section>

  <div class="container">
    <div class="description">
      <div class="description-title">Descripción y uso</div>
      <p>
        La escala está compuesta por incrementos progresivos desde 4px hasta 252px, lo que permite cubrir tanto 
        microajustes en componentes pequeños como grandes separaciones en estructuras de página. Gracias a esta 
        sistematización, se garantiza una experiencia coherente, limpia y flexible en todos los dispositivos.
      </p>
    </div>
      <div class="grid-configs">
        <div class="grid-config">
          <h3>M - Mobile</h3>
          <div class="grid-specs">
            <div class="spec-item"><strong>Min:</strong> 375px</div>
            <div class="spec-item"><strong>Max:</strong> 679px</div>
            <div class="spec-item"><strong>Cols:</strong> 6</div>
            <div class="spec-item"><strong>Margin:</strong> 24px</div>
            <div class="spec-item"><strong>Gutter:</strong> 16px</div>
          </div>
          <div class="grid-visual mobile-grid">
            <img src="images/MMobile.png" alt="M - Mobile Grid" />
          </div>
        </div>

        <div class="grid-config">
          <h3>M - Tablet</h3>
          <div class="grid-specs">
            <div class="spec-item"><strong>Min:</strong> 680px</div>
            <div class="spec-item"><strong>Max:</strong> 1023px</div>
            <div class="spec-item"><strong>Cols:</strong> 12</div>
            <div class="spec-item"><strong>Margin:</strong> 56px</div>
            <div class="spec-item"><strong>Gutter:</strong> 16px</div>
          </div>
          <div class="grid-visual tablet-grid">
            <img src="images/MTablet.png" alt="M - Tablet Grid" />
          </div>
        </div>

        <div class="grid-config">
          <h3>L - Tablet</h3>
          <div class="grid-specs">
            <div class="spec-item"><strong>Min:</strong> 1024px</div>
            <div class="spec-item"><strong>Max:</strong> 1279px</div>
            <div class="spec-item"><strong>Cols:</strong> 12</div>
            <div class="spec-item"><strong>Margin:</strong> 56px</div>
            <div class="spec-item"><strong>Gutter:</strong> 16px</div>
          </div>
          <div class="grid-visual tablet-grid">
            <img src="images/LTablet.png" alt="L - Tablet Grid" />
          </div>
        </div>

        <div class="grid-config">
          <h3>XL - Desktop</h3>
          <div class="grid-specs">
            <div class="spec-item"><strong>Min:</strong> 1280px</div>
            <div class="spec-item"><strong>Max:</strong> 1600px</div>
            <div class="spec-item"><strong>Cols:</strong> 12</div>
            <div class="spec-item"><strong>Margin:</strong> 96px</div>
            <div class="spec-item"><strong>Gutter:</strong> 32px</div>
          </div>
          <div class="grid-visual desktop-grid">
            <img src="images/XLDesktop.png" alt="XL - Desktop Grid" />
          </div>
        </div>

        <div class="grid-config">
          <h3>XXL - Desktop Large</h3>
          <div class="grid-specs">
            <div class="spec-item"><strong>Min:</strong> 1600px</div>
            <div class="spec-item"><strong>Max:</strong> -</div>
            <div class="spec-item"><strong>Cols:</strong> 12</div>
            <div class="spec-item"><strong>Margin:</strong> 256px</div>
            <div class="spec-item"><strong>Gutter:</strong> 32px</div>
          </div>
          <div class="grid-visual desktop-large-grid">
            <img src="images/XXLDesktopLarge.png" alt="XXL - Desktop Large Grid" />
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>Space Sizers</h2>
      <h3>Descripción y uso</h3>
        <p>
          La escala está compuesta por incrementos progresivos desde 4px hasta 252px, lo que permite cubrir tanto 
          microajustes en componentes pequeños como grandes separaciones en estructuras de página. Gracias a esta 
          sistematización, se garantiza una experiencia coherente, limpia y flexible en todos los dispositivos.
        </p>
        <div class="space-sizers">
          <div class="space-item">
            <span class="space-label">SZ 20 - 252px</span>
            <div class="space-bar w-252"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 19 - 216px</span>
            <div class="space-bar w-216"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 18 - 184px</span>
            <div class="space-bar w-184"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 17 - 156px</span>
            <div class="space-bar w-156"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 16 - 132px</span>
            <div class="space-bar w-132"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 15 - 112px</span>
            <div class="space-bar w-112"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 14 - 92px</span>
            <div class="space-bar w-92"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 13 - 80px</span>
            <div class="space-bar w-80"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 12 - 72px</span>
            <div class="space-bar w-72"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 11 - 64px</span>
            <div class="space-bar w-64"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 10 - 52px</span>
            <div class="space-bar w-52"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 9 - 44px</span>
            <div class="space-bar w-44"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 8 - 40px</span>
            <div class="space-bar w-40"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 7 - 32px</span>
            <div class="space-bar w-32"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 6 - 24px</span>
            <div class="space-bar w-24"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 5 - 20px</span>
            <div class="space-bar w-20"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 4 - 16px</span>
            <div class="space-bar w-16"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 3 - 12px</span>
            <div class="space-bar w-12"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 2 - 8px</span>
            <div class="space-bar w-8"></div>
          </div>
          <div class="space-item">
            <span class="space-label">SZ 1 - 4px</span>
            <div class="space-bar w-4"></div>
          </div>
        </div>
    </div>

  </div>
`;
