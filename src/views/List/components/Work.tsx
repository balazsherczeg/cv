import React from 'react';
import styled from 'styled-components';
import type { Work as WorkType } from 'data/work';

const Root = styled.div`
  & .interval {
    opacity: 0.5;
    font-variation-settings: 'wght' 400;
    margin-right: 0.5rem;
  }

  .name {
    font-variation-settings: 'wght' 400;
    font-size: 1.2rem;
  }

  & .description {
    font-family: var(--sansItalic);
    padding-left: 1rem;
  }
`;

const getYear = (date: number) => String(date).slice(0, 4);

const renderYears = (date1: number, date2: number) => {
  const year1 = getYear(date1);
  const year2 = getYear(date2);
  return year1 === year2 ? year1 : `${year1}—${year2}`;
};

const Work = ({
  work: { name, fullName, active, position, url, description },
}: {
  work: WorkType;
}) => (
  <Root>
    <h3>
      <i className="interval">
        {renderYears(active[0][0], active[active.length - 1][1])}
      </i>
      <span className="name">
        {position} at{' '}
        {url ? <a href={url}>{fullName ?? name}</a> : fullName ?? name}
      </span>
    </h3>
    {!!description && <div className="description">{description}</div>}
  </Root>
);

export default Work;
