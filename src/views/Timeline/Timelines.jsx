import React, { useState } from 'react';
import styled from 'styled-components';
import breaks from 'data/breaks.yaml';
import music from 'data/music.yaml';
import projects from 'data/projects.yaml';
import skills from 'data/skills.yaml';
import work from 'data/work.yaml';
import Breaks from './Breaks';
import Events from './Events';
import Names from './Names';
import Timeline from './Timeline';
import Years from './Years';

const Outer = styled.div`
  padding-bottom: 50vh;
`;

const Wrapper = styled.div`
  --headerHeight: 9em;
  --columnWidth: 24px;
  --openingSpeed: 0.4s;

  height: 500vh;
  position: relative;
`;

const Header = styled.div`
  background-color: var(--backgroundColor);
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const Layer = styled.div`
  height: calc(100% - var(--headerHeight));
  left: 0;
  position: absolute;
  right: 0;
  top: var(--headerHeight);
  ${({ clickThrough }) => clickThrough && 'pointer-events: none;'}
`;

const Periods = styled.div`
  display: flex;
  height: 100%;
`;

const items = [...skills, ...work, ...projects, ...music];

const Timelines = () => {
  const [open, setOpen] = useState(null);

  return (
    <Outer>
      <Wrapper>
        <Header>
          <Names items={items} onNameClick={setOpen} open={open} />
        </Header>

        <Layer>
          <Periods>
            {items.map((item) => (
              <Timeline
                {...item}
                isOpen={open === item.name}
                onClick={setOpen}
                key={`timeline-${item.name}`}
              />
            ))}
          </Periods>
        </Layer>

        <Layer clickThrough>
          <Breaks items={breaks} />
        </Layer>

        <Layer clickThrough>
          <Years />
        </Layer>

        <Layer>
          <Periods>
            {items.map((item) => (
              <Events
                {...item}
                isOpen={open === item.name}
                onClick={setOpen}
                key={`event-${item.name}`}
              />
            ))}
          </Periods>
        </Layer>
      </Wrapper>
    </Outer>
  );
};
export default Timelines;
