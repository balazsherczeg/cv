import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  @media print {
    display: none;
  }
`;

const NoPrint = ({
  children,
}: React.PropsWithChildren<Record<never, never>>) => {
  return <Root>{children}</Root>;
};

export default NoPrint;
