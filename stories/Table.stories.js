export default {
  title: 'Components/Table',
  parameters: { layout: 'fullscreen' }
};

const baseStylesheet = '/styles/layout.css';
const stylesheet = '/styles/table.css';

export const Default = () => `
  <link rel="stylesheet" href="${baseStylesheet}" />
  <link rel="stylesheet" href="${stylesheet}" />
  ${tableInlineScript}

  <header class="top-nav"><div class="top-nav__inner"><div class="brand" title="Spain.info DS"></div></div></header>
  <section class="hero"><div class="container"><div class="hero__title">Table</div></div></section>

  <section class="intro-strip"><div class="container"><p class="intro-text">Las tablas organizan y presentan datos en filas y columnas, facilitando su lectura, comparación y análisis.</p></div></section>

  <div class="container">
    <div class="tb-grid">
      <div class="tb-aside">
        <h4>Descripción y uso</h4>
        <p>Es especialmente útil para mostrar grandes volúmenes de información estructurada de manera clara y accesible. Se recomienda su uso cuando la información se debe presentar de forma comparativa entre listas, categorías o grupos.</p>
        <p>Debe estar compuesta de un número claro de columnas y un número de líneas.</p>
      </div>

      <div class="tb-container">
        <div class="tb-title">Master</div>
        <div class="tb-card">
          <spain-table
            variant="master"
            headers='["Category title","Category title","Category title","Category title","Category title"]'
            rows='${JSON.stringify(Array.from({length:5}).map(()=>["Body text","Body text","Body text","Body text","Body text"]))}'
          ></spain-table>
        </div>

        <div class="tb-title">Example</div>
        <div class="tb-card">
          <spain-table
            variant="example"
            headers='["Indicador","Valor actual","Comparativa con 2024","Comparativa con 2019 (pre-pandemia)","Notas clave"]'
            rows='${JSON.stringify([
              ["Turistas internacionales recibidos",">85,6 millones","+14,3 %","+1,9 %","Primer año que supera los registros previos a la pandemia"],
              ["Gasto turístico",">108.692 millones de euros","+23,9 %","+18,2 %","Fuerte recuperación cualitativa, sobre todo en calidad del turismo (gasto medio)"],
              ["Mercado emisor Estados Unidos","3,8 millones de turistas","+39,7 %","+16,9 %","EE.UU. como mercado destacado por crecimiento en gasto y pernoctaciones"],
              ["Llegadas hasta noviembre 2024 / récord acumulado parcial",">83,6 millones de turistas internacionales hasta noviembre 2024","+10,7 %","+13,7 %"," "]
            ])}'
          ></spain-table>
        </div>

        <div class="tb-title tb-full">Propiedades</div>
        <div class="tb-card tb-full">
          <spain-table
            variant="props"
            headers='["Nombre","Valor","Contenido","Más info"]'
            rows='${JSON.stringify([
              ["Title","Obligatorio","Mín de 60 caracteres","Título de la tabla"],
              ["Category row","Obligatorio","Máx de 30 caracteres por item","Títulos de columna"],
              ["Body text","Obligatorio","Máx de 120 caracteres por item","Descripción/valor"],
              ["Botón","Opcional","–","Acción"]
            ])}'
          ></spain-table>
        </div>
      </div>
    </div>
  </div>
`;

Default.parameters = { 
  docs: { source: { code: '<spain-table headers="[]" rows="[]"></spain-table>', state: 'closed' } },
  stencil: {
    usage: 'Tabla adaptable en Stencil. Copia HTML, CSS y TSX para reutilizarla sin cambios visuales.',
    html: '<spain-table headers="[\"Col 1\",\"Col 2\"]" rows="[[\"A\",\"B\"],[\"C\",\"D\"]]"></spain-table>',
    css: `
.tb, .table__table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  color: #1D1C20;
}

.tb thead th {
  background: #1B1C20;
  color: #fff;
  text-align: left;
  padding: 12px;
  font-weight: 600;
  font-size: 12px;
}

.tb tbody td {
  padding: 12px;
  border-top: 1px solid #EAEAEA;
  font-size: 12px;
  color: #4A4A4A;
}
`,
    tsx: 'import { Component, h, Prop } from "@stencil/core";\n\n@Component({ tag: "spain-table", shadow: true, styleUrl: "table.css" })\nexport class SpainTable {\n  @Prop() headers: string[] = [];\n  @Prop() rows: string[][] = [];\n  @Prop() variant?: string;\n  render(){\n    return (\n      <table class={\"tb table__table \" + (this.variant ? \"tb-\"+this.variant : \"\")}>\n        <thead><tr>{this.headers.map(h => <th>{h}</th>)}</tr></thead>\n        <tbody>{this.rows.map(r => <tr>{r.map(c => <td innerHTML={c}></td>)}</tr>)}</tbody>\n      </table>\n    );\n  }\n}'
  }
};

const tableInlineScript = (() => {
  const script = document.createElement('script');
  script.innerHTML = `
    (function(){
      class SpainTable extends HTMLElement{
        static get observedAttributes(){ return ['headers','rows','variant']; }
        constructor(){ super(); this.attachShadow({mode:'open'}); }
        attributeChangedCallback(){ this.render(); }
        connectedCallback(){ this.render(); }
        parse(name){ try{ return JSON.parse(this.getAttribute(name)||'[]'); }catch(e){ return []; } }
        render(){
          const headers = this.parse('headers');
          const rows = this.parse('rows');
          const variant = this.getAttribute('variant')||'';
          const headHtml = '<tr>'+headers.map(h=>'<th>'+h+'</th>').join('')+'</tr>';
          const bodyHtml = rows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('');
          this.shadowRoot.innerHTML = 
            '<link rel="stylesheet" href="${baseStylesheet}" />'+
            '<link rel="stylesheet" href="${stylesheet}" />'+
            '<table class="tb table__table tb-'+variant+'">'+
            '<thead>'+headHtml+'</thead>'+
            '<tbody>'+bodyHtml+'</tbody>'+
            '</table>';
        }
      }
      if(!customElements.get('spain-table')) customElements.define('spain-table', SpainTable);
    })();
  `;
  return script.outerHTML;
})();