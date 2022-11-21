import React from 'react';
import { bool, func, node, string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;
  flex-shrink: 0;
  height: 100%;
  position: relative;
  transition: var(--openingSpeed) width;
  width: ${({ isOpen }) =>
    isOpen ? 'var(--headerHeight)' : 'var(--columnWidth)'};
`;

const Column = ({ children, isOpen, name, onClick }) => (
  <Wrapper isOpen={isOpen} onClick={() => onClick(isOpen ? null : name)}>
    {children}
  </Wrapper>
);

Column.propTypes = {
  children: node.isRequired,
  isOpen: bool.isRequired,
  name: string.isRequired,
  onClick: func.isRequired,
};

export default Column;
