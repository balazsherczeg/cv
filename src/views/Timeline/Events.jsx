import React from 'react';
import { arrayOf, bool, func, number, shape, string } from 'prop-types';
import Column from './Column';
import Event from './Event';

const Events = ({ color, name, events, isOpen, onClick }) => (
  <Column isOpen={isOpen} name={name} onClick={onClick}>
    {events.map((eventData, index) => (
      <Event key={index} color={color} isOpen={isOpen} eventData={eventData} />
    ))}
  </Column>
);

Events.defaultProps = {
  events: [],
};

Events.propTypes = {
  color: string.isRequired,
  events: arrayOf(
    shape({
      date: number.isRequired,
      title: string.isRequired,
    })
  ),
  isOpen: bool.isRequired,
  name: string.isRequired,
  onClick: func.isRequired,
};

export default Events;
