import React from 'react';
import { mount } from "enzyme";
import Game from './Game';

// smoke test
it('renders without crashing', () => {
  mount(<Game />);
});
