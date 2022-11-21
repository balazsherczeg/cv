import React from 'react';

const Work = ({ item: { position, url, fullName, name } }) => (
  <>
    <p>{fullName || name}</p>
    <p>{position}</p>
    {!!url && <p>{url}</p>}
  </>
);

Work.propTypes = {};

export default Work;
