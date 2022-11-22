import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import '../assets/styles/reset.css';

const GlobalStyle = createGlobalStyle`
  body {
    --backgroundColor: #eee;

    background-color: var(--backgroundColor);
    padding: 0 2em;
    font-family: 'Source Sans Pro', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a, a:visited {
    text-decoration: none;
    color: #526077;
  }
`;

const Wrapper = styled.div`
  --pageHeaderHeight: 4rem;
  padding-top: var(--pageHeaderHeight);
`;

const Layout = ({ children }: React.PropsWithChildren) => (
  <Wrapper>
    <GlobalStyle />
    {children}
  </Wrapper>
);

export default Layout;
