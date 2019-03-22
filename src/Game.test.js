import React from 'react';
import { mount } from "enzyme";
import Game from './Game';

// smoke test
it('renders without crashing', () => {
  mount(<Game />);
});


// test to catch lock/unlock bug



it('should lock die so it does not re-roll', () => {
  let wrapper = mount(<Game />);
  //console.log('wrapper is ',wrapper.debug())
  
  wrapper.setState({dice:[1,2,3,4,5]})

  wrapper.find('Die').first().simulate('click', {target: {value: 1}})
  
});
