import React, { useMemo, useState } from 'react';
import { addons, types, useStorybookState } from '@storybook/manager-api';
import { AddonPanel } from '@storybook/components';

const ADDON_ID = 'spaininfo-code';
const PANEL_ID = `${ADDON_ID}/panel`;

const Section = ({ label, code }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard?.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }).catch(() => {});
  };
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 0 8px 0' }}>
        <h4 style={{ margin: 0, color: '#e6e6e6' }}>{label}</h4>
        <button onClick={handleCopy} style={{ fontSize: 11, padding: '4px 8px', borderRadius: 4, border: '1px solid #3a3a3a', background: copied ? '#2a2a2a' : '#1e1e1e', color: '#e6e6e6', cursor: 'pointer' }}>{copied ? 'Copied!' : 'Copy'}</button>
      </div>
      <pre style={{
        background: '#1e1e1e',
        color: '#dcdcdc',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #2a2a2a',
        fontSize: '11px',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        margin: 0,
      }}>{code || 'No content available'}</pre>
    </div>
  );
};

const CodePanel = () => {
  const state = useStorybookState();
  const storyId = state?.storyId;
  const story = storyId ? state.storiesHash?.[storyId] : null;
  const stencil = story?.parameters?.stencil || {};

  const [activeTab, setActiveTab] = useState('html');
  const tabs = useMemo(() => ([
    { key: 'html', label: 'HTML', code: stencil.html },
    { key: 'css', label: 'CSS', code: stencil.css },
    { key: 'tsx', label: 'TSX (Stencil)', code: stencil.tsx },
  ]), [stencil.html, stencil.css, stencil.tsx]);

  const active = tabs.find(t => t.key === activeTab) || tabs[0];

  return (
    <div style={{
      padding: '16px',
      fontFamily: 'monospace',
      fontSize: '12px',
      lineHeight: '1.4',
      overflow: 'auto',
      maxHeight: '100%',
      backgroundColor: '#0f111a',
      borderTop: '1px solid #2a2a2a',
    }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            style={{
              padding: '6px 10px',
              borderRadius: 4,
              border: '1px solid ' + (activeTab === t.key ? '#e6e6e6' : '#3a3a3a'),
              background: activeTab === t.key ? '#1e1e1e' : '#15171f',
              color: '#e6e6e6',
              cursor: 'pointer',
              fontSize: 12,
            }}
          >{t.label}</button>
        ))}
      </div>
      <Section label={active.label} code={active.code} />
    </div>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Code',
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <CodePanel />
      </AddonPanel>
    ),
  });
});