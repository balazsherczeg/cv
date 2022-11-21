import React from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import styled from 'styled-components';

import Work from './Work';

const Wrapper = styled.div`
  height: var(--headerHeight);
  display: flex;
`;

const Name = styled.div`
  width: ${({ isOpen }) => isOpen ? 'var(--headerHeight)' : `var(--columnWidth)`};
  transition: var(--openingSpeed) width;
`;

// const Inner = styled.div`
//   cursor: pointer;
//   line-height: 24px;
//   padding: ${({ isOpen }) => isOpen ? '0 0 8px 4px' : '0 0 0 8px'};
//   transform-origin: left top;
//   transform: ${({ isOpen }) => isOpen
//     ? 'translateY(calc(var(--headerHeight) - 24px))'
//     : 'rotate(-90deg) translateX(calc(-1 * var(--headerHeight)))'
//   };
//   transition: var(--openingSpeed) transform, var(--openingSpeed) padding;
//   white-space: nowrap;
// `;

const Inner = styled.div`
  cursor: pointer;
  line-height: 24px;
  transform-origin: left top;
  transform: ${({ isOpen }) => isOpen
    ? 'rotate(0deg) translateY(-6px)'
    : 'rotate(90deg) translateY(calc(-1 * var(--columnWidth)))'
  };
  transition: var(--openingSpeed) transform;
  white-space: nowrap;
`;

const Names = ({
  items,
  onNameClick,
  open,
}) => (
  <Wrapper>
    {
      items.map((item) => {
        const isOpen = open === item.name;

        return (
          <Name
            isOpen={isOpen}
            key={item.name}
          >
            <Inner
              isOpen={isOpen}
              onClick={() => onNameClick(isOpen ? null : item.name)}
            >
              {isOpen && item.type === 'work' ? <Work item={item} /> : item.name}
            </Inner>
          </Name>
        )
      })
    }
  </Wrapper>
);

Names.propTypes = {
  items: arrayOf(shape({
    name: string.isRequired
  })).isRequired,
  onNameClick: func.isRequired,
};

export default Names;
