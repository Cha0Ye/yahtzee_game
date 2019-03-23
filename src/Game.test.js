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
  wrapper.setState({dice:[1,2,3,4,5]})

  wrapper.find('Die').first()
        .simulate('click', {target: {value: 1}})
  const firstDie = wrapper.find('Die').first();
  
  expect(firstDie.props().locked).toBe(true)

  wrapper.find('.Game-reroll').first()
        .simulate('click')
  
  expect(wrapper.state().dice[0]).toEqual(1) 
});

// Prevent rolling More than 3 times
it('Prevent rolling More than 3 times', () => {
  let wrapper = mount(<Game />);

  wrapper.find('.Game-reroll').first()
        .simulate('click')
  wrapper.find('.Game-reroll').first()
        .simulate('click')
  wrapper.find('.Game-reroll').first()
        .simulate('click')
  
  expect(wrapper.state().rollsLeft).toEqual(0) 

  wrapper.find('Die').first()
        .simulate('click')

  wrapper.find('.Game-reroll').first()
        .simulate('click')

  expect(wrapper.state().rollsLeft).toEqual(0)
});