import React from 'react';
import PropTypes from 'prop-types';

const Work = ({
  item: {
    position,
    url,
    fullName,
    name,
  },

}) => (
  <>
    <p>{fullName || name}</p>
    <p>{position}</p>
  </>
);

Work.propTypes = {
};

export default Work;