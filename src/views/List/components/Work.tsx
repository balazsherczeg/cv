import React from 'react';
import styled from 'styled-components';
import type { Work as WorkType } from 'data/work';
import Interval from './Interval';

const Description = styled.div`
  fontsize: 12px;
  fontstyle: italic;
`;

const Work = ({
  work: { name, fullName, active, position, url, description },
}: {
  work: WorkType;
}) => (
  <p>
    <Interval active={active} /> {position} at{' '}
    {url ? <a href={url}>{fullName ?? name}</a> : fullName ?? name}
    {!!description && <Description>{description}</Description>}
  </p>
);

export default Work;
