const l={title:"Foundations/Typography",parameters:{layout:"fullscreen"}},d="/styles/typography.css",a=()=>`
  <link rel="stylesheet" href="${d}" />
  <header class="top-nav">
    <div class="top-nav__inner">
      <div class="brand" title="Spain.info DS"></div>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero__title">Typography</div>
    </div>
  </section>

  <div class="container">
    <div class="description">
      <div class="description-title">Descripción y uso</div>
        <p>La tipografía en un sistema de diseño es fundamental para transmitir la identidad visual y garantizar la legibilidad en todos los entornos. Una tipografía bien definida ayuda a crear jerarquía, ritmo y coherencia en la comunicación, guiando al usuario a través de títulos, subtítulos, párrafos y elementos interactivos. Su correcta aplicación refuerza el tono de la marca y aporta accesibilidad a la experiencia.</p>
    </div>
    <div class="spec-grid">
      <div class="spec">
        <div class="spec__title">Display</div>
        <div class="spec__family">Inter</div>
        <div class="spec__sample">
          <div class="display-xxl">Think you know spain?</div>
        </div>
      </div>
      <div class="spec">
        <div class="spec__title">Heading</div>
        <div class="spec__family">Inter SemiBold</div>
        <div class="spec__sample">
          <div class="heading-lg">Cabecera de página ciudad del conocimiento</div>
        </div>
      </div>
      <div class="spec">
        <div class="spec__title">Body</div>
        <div class="spec__family">Inter Regular</div>
        <div class="spec__sample">
          <div class="body-md">El turismo es galaxias ciudad del conocimiento y experiencias.
          Descubre la riqueza cultural y gastronómica que ofrece España.</div>
        </div>
      </div>
      <div class="spec">
        <div class="spec__title">Label</div>
        <div class="spec__family">Inter Medium</div>
        <div class="spec__sample">
          <div class="label-sm">Etiqueta de formulario</div>
        </div>
      </div>
      <div class="spec">
        <div class="spec__title">Button</div>
        <div class="spec__family">Inter SemiBold</div>
        <div class="spec__sample">
          <button class="btn-cta">CTA button</button>
        </div>
      </div>
      <div class="spec">
        <div class="spec__title">Button Link</div>
        <div class="spec__family">Inter Medium</div>
        <div class="spec__sample">
          <a href="#" class="link-action">Link action</a>
        </div>
      </div>
    </div>

    <div class="examples">
      <div class="example">
        <h4>Ejemplo</h4>
        <div class="display-xxl fs-32">Huelva cuna de América</div>
        <div class="heading-lg mt-8">Huelva cuna de América</div>
        <div class="body-md mt-8">Balance de la feria de las maravillas. Este bloque muestra la jerarquía típica: Display, título y cuerpo.</div>
      </div>
      <div class="example">
        <h4>Display + label + body</h4>
        <div class="heading-lg">Título + label + body</div>
        <div class="label-sm mt-8">Etiqueta</div>
        <div class="body-md mt-8">Texto de ejemplo para el cuerpo del contenido en interfaz clara.</div>
      </div>
      <div class="example example--dark">
        <h4>Dark</h4>
        <div class="display-xxl fs-32 text-white">Huelva cuna de América</div>
        <div class="body-md mt-8 text-ddd">Variación en fondo oscuro manteniendo legibilidad y contraste.</div>
      </div>
    </div>
  </div>
`;var i,s,e;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => \`
  <link rel="stylesheet" href="\${stylesHref}" />
  <header class="top-nav">
    <div class="top-nav__inner">
      <div class="brand" title="Spain.info DS"></div>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero__title">Typography</div>
    </div>
  </section>

  <div class="container">
    <div class="description">
      <div class="description-title">Descripción y uso</div>
        <p>La tipografía en un sistema de diseño es fundamental para transmitir la identidad visual y garantizar la legibilidad en todos los entornos. Una tipografía bien definida ayuda a crear jerarquía, ritmo y coherencia en la comunicación, guiando al usuario a través de títulos, subtítulos, párrafos y elementos interactivos. Su correcta aplicación refuerza el tono de la marca y aporta accesibilidad a la experiencia.</p>
    </div>
    <div class="spec-grid">
      <div class="spec">
        <div class="spec__title">Display</div>
        <div class="spec__family">Inter</div>
        <div class="spec__sample">
          <div class="display-xxl">Think you know spain?</div>
        </div>
      </div>
      <div class="spec">
        <div class="spec__title">Heading</div>
        <div class="spec__family">Inter SemiBold</div>
        <div class="spec__sample">
          <div class="heading-lg">Cabecera de página ciudad del conocimiento</div>
        </div>
      </div>
      <div class="spec">
        <div class="spec__title">Body</div>
        <div class="spec__family">Inter Regular</div>
        <div class="spec__sample">
          <div class="body-md">El turismo es galaxias ciudad del conocimiento y experiencias.
          Descubre la riqueza cultural y gastronómica que ofrece España.</div>
        </div>
      </div>
      <div class="spec">
        <div class="spec__title">Label</div>
        <div class="spec__family">Inter Medium</div>
        <div class="spec__sample">
          <div class="label-sm">Etiqueta de formulario</div>
        </div>
      </div>
      <div class="spec">
        <div class="spec__title">Button</div>
        <div class="spec__family">Inter SemiBold</div>
        <div class="spec__sample">
          <button class="btn-cta">CTA button</button>
        </div>
      </div>
      <div class="spec">
        <div class="spec__title">Button Link</div>
        <div class="spec__family">Inter Medium</div>
        <div class="spec__sample">
          <a href="#" class="link-action">Link action</a>
        </div>
      </div>
    </div>

    <div class="examples">
      <div class="example">
        <h4>Ejemplo</h4>
        <div class="display-xxl fs-32">Huelva cuna de América</div>
        <div class="heading-lg mt-8">Huelva cuna de América</div>
        <div class="body-md mt-8">Balance de la feria de las maravillas. Este bloque muestra la jerarquía típica: Display, título y cuerpo.</div>
      </div>
      <div class="example">
        <h4>Display + label + body</h4>
        <div class="heading-lg">Título + label + body</div>
        <div class="label-sm mt-8">Etiqueta</div>
        <div class="body-md mt-8">Texto de ejemplo para el cuerpo del contenido en interfaz clara.</div>
      </div>
      <div class="example example--dark">
        <h4>Dark</h4>
        <div class="display-xxl fs-32 text-white">Huelva cuna de América</div>
        <div class="body-md mt-8 text-ddd">Variación en fondo oscuro manteniendo legibilidad y contraste.</div>
      </div>
    </div>
  </div>
\``,...(e=(s=a.parameters)==null?void 0:s.docs)==null?void 0:e.source}}};const c=["Default"];export{a as Default,c as __namedExportsOrder,l as default};
