import React from 'react';
import 'assets/styles/reset.css';
import 'assets/styles/style.css';
import Header from 'components/Header';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Timelines from './Timelines';

const Layout = styled.div`
  padding-top: var(--pageHeaderHeight);
  padding-bottom: 3rem;
`;

const App = () => (
  <Layout>
    <Header>
      <Link to="list">List view</Link>
    </Header>
    <main>
      <Timelines />
    </main>
  </Layout>
);

export default App;
