const { addons, types } = require('@storybook/manager-api');
const React = require('react');

const ADDON_ID = 'spaininfo/stencil';
const PANEL_ID = `${ADDON_ID}/panel`;

function StencilPanel() {
  const [api, setApi] = React.useState(null);
  React.useEffect(() => {
    // manager-only; api available via window
    setApi(window.__STORYBOOK_ADDONS_API__);
  }, []);

  const state = api?.store?.getState?.();
  const current = state?.storyId && api?.getCurrentStoryData?.(state.storyId);
  const params = current?.parameters?.stencil;

  if (!params) {
    return React.createElement('div', { style: { padding: 16 } }, 'No Stencil snippet provided for this story.');
  }

  function CodeBlock({ title, code, lang }) {
    return React.createElement(
      'div',
      { style: { marginBottom: 16 } },
      React.createElement('div', { style: { fontWeight: 600, marginBottom: 8 } }, title),
      React.createElement('pre', { style: { background: '#0f172a', color: '#e2e8f0', padding: 12, borderRadius: 6, overflowX: 'auto' } },
        React.createElement('code', null, code)
      )
    );
  }

  return React.createElement(
    'div',
    { style: { padding: 16 } },
    params.usage && React.createElement('p', { style: { marginBottom: 16 } }, params.usage),
    params.html && React.createElement(CodeBlock, { title: 'HTML', code: params.html }),
    params.tsx && React.createElement(CodeBlock, { title: 'TSX (Stencil View)', code: params.tsx })
  );
}

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.TAB,
    title: 'Stencil',
    route: ({ storyId }) => `/stencil/${storyId}`,
    match: ({ viewMode }) => viewMode === 'story',
    render: ({ active, key }) => active ? React.createElement(StencilPanel, { key }) : null,
  });
});


