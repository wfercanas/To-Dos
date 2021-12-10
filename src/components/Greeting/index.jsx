import React from 'react';
import { StyledGreeting } from './styles';

function Greeting({ name }) {
  return <StyledGreeting>Whats up, {name}!</StyledGreeting>;
}

export { Greeting };
