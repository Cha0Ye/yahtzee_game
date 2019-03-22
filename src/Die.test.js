import React from 'react';
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Die from './Die';

// smoke test
it('renders without crashing', () => {
  mount(<Die />);
});

// snapshot test unlocked
it("matches snapshot for unlocked", function() {
  let wrapper = mount(<Die locked={false} val={2}/>);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

// snapshot test locked
it("matches snapshot for locked", function() {
  let wrapper = mount(<Die locked={true} val={2}/>);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});