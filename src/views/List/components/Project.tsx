import React from 'react';
import styled from 'styled-components';
import type { Project as ProjectType } from 'data/projects';

const Description = styled.div`
  fontsize: 12px;
  fontstyle: italic;
`;

export const getYear = (date: number) => String(date).slice(0, 4);

const Project = ({
  project: { name, fullName, active, description, links },
}: {
  project: ProjectType;
}) => (
  <p>
    {fullName ?? name} {getYear(active[active.length - 1][1])}
    {!!description && <Description>{description}</Description>}
    {links.map((link) => (
      <a key={link.url} href={link.url}>
        {link.label}
      </a>
    ))}
  </p>
);

export default Project;
