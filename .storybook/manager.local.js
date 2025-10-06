// .storybook/manager.js
import React, { useState } from 'react';
import { addons, types, useParameter } from '@storybook/manager-api';
import { AddonPanel } from '@storybook/components';

const ADDON_ID = 'spaininfo/stencil';
const PANEL_ID = `${ADDON_ID}/panel`;

function StencilPanel() {
  const params = useParameter('stencil');

  if (!params) {
    return <div style={{ padding: 16 }}>No Code snippet provided for this story.</div>;
  }

  // tabs dinâmicas
  const tabs = [];
  if (params.html) tabs.push('HTML');
  if (params.css) tabs.push('CSS');
  if (params.tsx) tabs.push('TSX');

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const CodeBlock = ({ code }) => (
    <pre
      style={{
        background: '#0f172a',
        color: '#e2e8f0',
        padding: 12,
        borderRadius: 6,
        overflowX: 'auto',
        whiteSpace: 'pre-wrap',
        marginTop: 12,
      }}
    >
      <code>{code}</code>
    </pre>
  );

  return (
    <div style={{ padding: 16 }}>
      {params.usage && <p style={{ marginBottom: 16 }}>{params.usage}</p>}

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              border: '1px solid #ccc',
              background: activeTab === tab ? '#0f172a' : '#f1f1f1',
              color: activeTab === tab ? '#fff' : '#000',
              cursor: 'pointer',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Conteúdo */}
      {activeTab === 'HTML' && params.html && <CodeBlock code={params.html} />}
      {activeTab === 'CSS' && params.css && <CodeBlock code={params.css} />}
      {activeTab === 'TSX' && params.tsx && <CodeBlock code={params.tsx} />}
    </div>
  );
}


addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Code',
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <StencilPanel />
      </AddonPanel>
    ),
  });
});