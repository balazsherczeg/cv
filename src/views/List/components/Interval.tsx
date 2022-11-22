import React from 'react';

// import styled from 'styled-components';

export const getYear = (date: number) => String(date).slice(0, 4);

const Project = ({ active }: { active: [number, number][] }) => (
  <span>
    {getYear(active[0][0])}—{getYear(active[active.length - 1][1])}
  </span>
);

export default Project;
