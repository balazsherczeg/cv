import React from 'react';
import styled from 'styled-components';

const Root = styled.footer`
  line-height: 1.5rem;
`;

const Footer = () => (
  <Root>
    <ul>
      <li>
        Phone: <a href="tel:+37255971327">+372 55971327</a>
      </li>
      <li>
        Mail: <a href="mailto:+37255971327">balazs@herczeg.ee</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/balazs-herczeg">LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/balazsherczeg">GitHub</a>
      </li>
    </ul>
  </Root>
);

export default Footer;
