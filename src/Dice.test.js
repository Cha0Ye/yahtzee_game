import React from 'react';
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Dice from './Dice';

// smoke test
it('renders without crashing', () => {
    const toggleLockedFn = jest.fn();
    mount(<Dice dice={Array.from({ length: 5 })} 
                locked={Array(5).fill(false)}
                handleClick={toggleLockedFn}/>);
});

// snapshot test unlocked
it("matches snapshot for unlocked", function() {
    const toggleLockedFn = jest.fn();
    let wrapper = mount(<Dice dice={Array.from({ length: 5 })} 
                locked={[true, false, false, false, false]}
                handleClick={toggleLockedFn}/>);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});
