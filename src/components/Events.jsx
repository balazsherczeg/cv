import React from 'react';
import {
  arrayOf,
  func,
  number,
  bool,
  shape,
  string,
} from 'prop-types';

import Event from './Event';
import Column from './Column';

const Events = ({
  color,
  name,
  events,
  isOpen,
  onClick,
}) => (
  <Column
    isOpen={isOpen}
    name={name}
    onClick={onClick}
  >
    {events.map((eventData, index) => (
      <Event
        key={index}
        color={color}
        isOpen={isOpen}
        eventData={eventData}
      />
    ))}
  </Column>
);

Events.defaultProps = {
  events: [],
};

Events.propTypes = {
  color: string.isRequired,
  events: arrayOf(shape({
    date: number.isRequired,
    title: string.isRequired,
  })),
  isOpen: bool.isRequired,
  name: string.isRequired,
  onClick: func.isRequired,
};

export default Events;
