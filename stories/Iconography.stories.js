export default {
  title: 'Foundations/Iconography',
  parameters: { layout: 'fullscreen' }
};

const stylesheet = 'styles/iconography.css';

export const Default = () => `
  <link rel="stylesheet" href="${stylesheet}" />
  <header class="top-nav">
    <div class="top-nav__inner">
      <div class="brand" title="Spain.info DS">
        
      </div>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero__title">Iconos</div>
    </div>
  </section>

  <div class="container">
  <div class="description">
    <div class="description-title">Descripción y uso</div>
    <p>Los estilos de iconos en spain.info están diseñados para ofrecer flexibilidad y coherencia en diferentes contextos de uso. Se admiten variaciones de tonos (ej. default y estados de alerta) y tamaños (XS, S, M, L, XL, 2XL). Por último, dentro de texto, los iconos pueden adaptarse a jerarquías visuales y necesidades de comunicación específicas.</p>
  </div>
    <div class="grid-2">
      <div>
        <div class="fw-700 mb-12">Propiedades</div>
        <p>
          Los estilos de iconos en spain.info están diseñados para ofrecer flexibilidad y coherencia en diferentes contextos de uso. Se admiten variaciones de tonos (ej. default y estados de alerta) y tamaños (XS, S, M, L, XL, 2XL). Por último, dentro de texto, los iconos pueden adaptarse a jerarquías visuales y necesidades de comunicación específicas.
        </p>
      </div>
      <div>
        <div class="card mt-24">
          <div class="icon-rows rg-12">
            <div class="text-666 fs-14">Estilos</div>
            <div class="icon-row">
              <span class="icon s-xs c-default"></span>
              <span class="icon s-s c-default"></span>
              <span class="icon s-m c-default"></span>
              <span class="icon s-l c-default"></span>
              <span class="icon s-xl c-default"></span>
              <span class="icon s-2xl c-default"></span>
            </div>

            <div class="text-666 fs-14">Brand</div>
            <div class="icon-row">
              <span class="icon s-xs c-brand"></span>
              <span class="icon s-s c-brand"></span>
              <span class="icon s-m c-brand"></span>
              <span class="icon s-l c-brand"></span>
              <span class="icon s-xl c-brand"></span>
              <span class="icon s-2xl c-brand"></span>
            </div>

            <div class="text-666 fs-14">Info</div>
            <div class="icon-row">
              <span class="icon s-xs c-info"></span>
              <span class="icon s-s c-info"></span>
              <span class="icon s-m c-info"></span>
              <span class="icon s-l c-info"></span>
              <span class="icon s-xl c-info"></span>
              <span class="icon s-2xl c-info"></span>
            </div>

            <div class="text-666 fs-14">Success</div>
            <div class="icon-row">
              <span class="icon s-xs c-success"></span>
              <span class="icon s-s c-success"></span>
              <span class="icon s-m c-success"></span>
              <span class="icon s-l c-success"></span>
              <span class="icon s-xl c-success"></span>
              <span class="icon s-2xl c-success"></span>
            </div>

            <div class="text-666 fs-14">Negative</div>
            <div class="icon-row">
              <span class="icon s-xs c-negative"></span>
              <span class="icon s-s c-negative"></span>
              <span class="icon s-m c-negative"></span>
              <span class="icon s-l c-negative"></span>
              <span class="icon s-xl c-negative"></span>
              <span class="icon s-2xl c-negative"></span>
            </div>

            <div class="text-666 fs-14">Warning</div>
            <div class="icon-row">
              <span class="icon s-xs c-warning"></span>
              <span class="icon s-s c-warning"></span>
              <span class="icon s-m c-warning"></span>
              <span class="icon s-l c-warning"></span>
              <span class="icon s-xl c-warning"></span>
              <span class="icon s-2xl c-warning"></span>
            </div>
          </div>
        </div>

        <div class="card mt-24">
          <div class="sizes">
            <div class="text-666 fs-14">Tamaños</div>
            <div class="size-cell"><span class="icon s-xs c-default"></span><span class="fs-12 text-666">XS</span></div>
            <div class="size-cell"><span class="icon s-s c-default"></span><span class="fs-12 text-666">S</span></div>
            <div class="size-cell"><span class="icon s-m c-default"></span><span class="fs-12 text-666">M</span></div>
            <div class="size-cell"><span class="icon s-l c-default"></span><span class="fs-12 text-666">L</span></div>
            <div class="size-cell"><span class="icon s-xl c-default"></span><span class="fs-12 text-666">XL</span></div>
            <div class="size-cell"><span class="icon s-2xl c-default"></span><span class="fs-12 text-666">2XL</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>


`;


