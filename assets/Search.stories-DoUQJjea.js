const n={title:"Components/Search",parameters:{layout:"fullscreen"}},r="/styles/layout.css",t="/styles/search.css",c="/images/Search.png",s=()=>`
  <link rel="stylesheet" href="${r}" />
  <link rel="stylesheet" href="${t}" />

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
          <img class="srch-image" src="${c}" alt="Search master" />
        </div>
      </div>
    </div>
  </div>
`;s.parameters={docs:{source:{code:'<div class="search"></div>',state:"closed"}}};var e,a,i;s.parameters={...s.parameters,docs:{...(e=s.parameters)==null?void 0:e.docs,source:{originalSource:`() => \`
  <link rel="stylesheet" href="\${baseStylesheet}" />
  <link rel="stylesheet" href="\${stylesheet}" />

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
          <img class="srch-image" src="\${searchImg}" alt="Search master" />
        </div>
      </div>
    </div>
  </div>
\``,...(i=(a=s.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const l=["Default"];export{s as Default,l as __namedExportsOrder,n as default};
