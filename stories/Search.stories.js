export default {
  title: 'Components/Search',
  parameters: { layout: 'fullscreen' }
};

const baseStylesheet = '/styles/layout.css';
const stylesheet = '/styles/search.css';
const searchImg = '/images/Search.png';

export const Default = () => `
  <link rel="stylesheet" href="${baseStylesheet}" />
  <link rel="stylesheet" href="${stylesheet}" />

  <header class="top-nav"><div class="top-nav__inner"><div class="brand" title="Spain.info DS"></div></div></header>
  <section class="hero"><div class="container"><div class="hero__title">Search</div></div></section>

  <section class="intro-strip"><div class="container"><p class="intro-text">El componente Search permite a los usuarios encontrar destinos, actividades o recursos dentro de spain.info de manera rápida y eficiente.</p></div></section>

  <div class="container">
    <div class="srch-grid">
      <div class="srch-col">
        <h4>Descripción y uso</h4>
        <p>Desde la apertura, el usuario puede escribir y filtrar contenidos con ayuda de sugerencias guiadas. Permite acceso rápido a búsquedas recientes y criterios guardados.</p>
        <h4>Comportamiento</h4>
        <ul class="srch-list">
          <li>Entrada de texto con sugerencias auto-completadas</li>
          <li>Filtros de categoría y fecha</li>
          <li>Resultados ordenados por relevancia</li>
        </ul>
        <h4>Variantes y estados</h4>
        <ul class="srch-list">
          <li>Desktop</li>
          <li>Tablet</li>
          <li>Mobile</li>
        </ul>
      </div>

      <div>
        <div class="srch-title">Master</div>
        <div class="srch-master">
          <img class="srch-image" src="${searchImg}" alt="Search master" />
        </div>
      </div>
    </div>
  </div>
`;

Default.parameters = { docs: { source: { code: '<div class="search"></div>', state: 'closed' } } };


