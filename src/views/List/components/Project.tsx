import React from 'react';
import styled from 'styled-components';
import type { Project as ProjectType } from 'data/projects';

const Root = styled.div`
  fontsize: 12px;
  fontstyle: italic;

  & .name {
    font-variation-settings: 'wght' 450;
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }

  & .year {
    opacity: 0.5;
    font-variation-settings: 'wght' 500;
  }

  & .description {
    font-family: var(--sansItalic);
    padding-left: 1.5rem;
  }

  & .links {
    font-variation-settings: 'wght' 500;
    padding-left: 1.5rem;

    a:not(:last-child) {
      margin-right: 0.5rem;
    }

    a:not(:first-child) {
      padding-left: 0.5rem;
      border-left: 1px solid;
    }
  }
`;

export const getYear = (date: number) => String(date).slice(0, 4);

const Project = ({
  project: { name, fullName, active, description, links },
}: {
  project: ProjectType;
}) => (
  <Root>
    <h3>
      <span className="name">{fullName ?? name}</span>
      <span className="year">{getYear(active[active.length - 1][1])}</span>
    </h3>
    <div className="description">{description}</div>
    <div className="links">
      {links.map((link) => (
        <a key={link.url} href={link.url}>
          {link.label}
        </a>
      ))}
    </div>
  </Root>
);

export default Project;
