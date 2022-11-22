import React from 'react';
import 'assets/styles/reset.css';
import Header from 'components/Header';
import Layout from 'components/Layout';
import { Link } from 'gatsby';
import styled from 'styled-components';
import type { Project as ProjectType } from 'data/projects';
import projects from 'data/projects.yaml';
import type { Work as WorkType } from 'data/work';
import works from 'data/work.yaml';
import Project from './components/Project';
import Work from './components/Work';

const SectionTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const List = () => {
  return (
    <Layout>
      <Header>
        <Link to="/">Timeline view</Link>
      </Header>

      <Main>
        <div>
          <SectionTitle>Work experience</SectionTitle>
          <Items>
            {(works as WorkType[])
              .sort((a, b) => b.active[0][0] - a.active[0][0])
              .filter((work) => !work.forget)
              .map((work) => (
                <Work key={work.name} work={work} />
              ))}
          </Items>
        </div>

        <div>
          <SectionTitle>Side projects</SectionTitle>
          {(projects as ProjectType[])
            .filter((project) => !project.ignoreInList)
            .map((project) => (
              <Project key={project.name} project={project} />
            ))}
        </div>

        <div>
          <SectionTitle>Skills</SectionTitle>
          <p>
            I enjoy making websites and learning new things since 2006. I have a
            deep understanding of HTML and CSS. I am fluent in JavaScript and
            React. I have worked and would like to spend more time with React
            Native. I like using and loved teaching Adobe Illustrator and
            InDesign. I have not too recent experience with PHP and MySQL.
          </p>
        </div>

        <div>
          <SectionTitle>Education</SectionTitle>
          <p>
            MA in History and Hungarian Philology, University of Debrecen,
            Hungary.
          </p>
        </div>
      </Main>
    </Layout>
  );
};

export default List;
