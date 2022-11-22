import React from 'react';
import Header from 'components/Header';
import Layout from 'components/Layout';
import { Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import Timelines from './Timelines';

const GlobalStyle = createGlobalStyle`
  body {
    --backgroundColor: #eee;

    background-color: var(--backgroundColor);
  }
`;

const App = () => (
  <Layout>
    <GlobalStyle />
    <Header>
      <Link to="list">List view</Link>
    </Header>
    <main>
      <Timelines />
    </main>
  </Layout>
);

export default App;
