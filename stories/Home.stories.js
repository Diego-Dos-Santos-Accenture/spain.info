export default {
  title: 'Home',
  parameters: { layout: 'fullscreen' }
};

const stylesheet = 'styles/home.css';

export const Homepage = () => `
  <link rel="stylesheet" href="${stylesheet}" />
  <header class="top-nav">
    <div class="top-nav__inner">
      <div class="brand" title="Spain.info DS"></div>
    </div>
  </header>
  <main class="home">
    <img class="home__logo" src="/images/Logotipo.svg" alt="Spain.info logo" />
  </main>
`;


