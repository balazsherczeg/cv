import React from 'react';
import 'assets/styles/reset.css';
import 'assets/styles/style.css';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { Link } from 'gatsby';
import styled from 'styled-components';
import type { Project as ProjectType } from 'data/projects';
import projects from 'data/projects.yaml';
import type { Work as WorkType } from 'data/work';
import works from 'data/work.yaml';
import Project from './components/Project';
import Work from './components/Work';

const Layout = styled.div`
  padding-top: var(--pageHeaderHeight);
  padding-bottom: 3rem;

  & .positioner {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  @media print {
    padding-top: 1.5rem;
    padding-bottom: 0;

    & .positioner {
      flex-direction: column-reverse;
      gap: 1.5rem;
    }
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 40em;

  line-height: 1.5rem;

  & .sectionTitle {
    text-transform: uppercase;
    font-variation-settings: 'wght' 600;
    letter-spacing: 0.05rem;
    font-size: 1rem;
    opacity: 0.7rem;
  }

  & .items {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  & .footerWrapper {
    padding-top: 2rem;
  }
`;

const List = () => {
  return (
    <Layout>
      <Header>
        <Link to="/">Timeline view</Link>
      </Header>

      <div className="positioner">
        <Main>
          <div className="items">
            <h2 className="sectionTitle">Work experience</h2>
            {(works as WorkType[])
              .sort((a, b) => b.active[0][0] - a.active[0][0])
              .filter((work) => !work.forget)
              .map((work) => (
                <Work key={work.name} work={work} />
              ))}
          </div>

          <div className="items">
            <h2 className="sectionTitle">Side projects</h2>
            {(projects as ProjectType[])
              .filter((project) => !project.ignoreInList)
              .map((project) => (
                <Project key={project.name} project={project} />
              ))}
          </div>

          <div className="items">
            <h2 className="sectionTitle">Skills</h2>
            <p>
              I enjoy making websites and learning new things since 2006. I have
              a deep understanding of HTML and CSS. I am fluent in JavaScript
              and React. I have worked and would like to spend more time with
              React Native. I like using and loved teaching Adobe Illustrator
              and InDesign. I have not too recent experience with PHP and MySQL.
            </p>
          </div>

          <div className="items">
            <h2 className="sectionTitle">Education</h2>
            <p>
              MA in History and Hungarian Philology, University of Debrecen,
              Hungary.
            </p>
          </div>
        </Main>

        <Footer />
      </div>
    </Layout>
  );
};

export default List;
