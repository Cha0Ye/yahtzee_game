import React from 'react';
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import RuleRow from './RuleRow';

// smoke test
it('renders without crashing', () => {
  mount(<RuleRow />);
});

// snapshot test rulerow
it("matches snapshot for rulerow", function() {
	const doScoreFn = jest.fn();
	let wrapper = mount(<RuleRow name="TEST" score={2}
					doScore={doScoreFn}/>);
	let serialized = toJson(wrapper);
	expect(serialized).toMatchSnapshot();
});


