import React from 'react';
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import ScoreTable from './ScoreTable';

const scores = {
  scores: {
    ones: undefined,
    twos: undefined,
    threes: undefined,
    fours: undefined,
    fives: undefined,
    sixes: undefined,
    threeOfKind: undefined,
    fourOfKind: undefined,
    fullHouse: undefined,
    smallStraight: undefined,
    largeStraight: undefined,
    yahtzee: undefined,
    chance: undefined
  }
}
// smoke test
it('renders without crashing', () => {
  const doScoreFn = jest.fn();
  mount(<ScoreTable doScore={doScoreFn} scores={scores}/>);
});

// snapshot test unlocked
it("matches snapshot for unlocked", function() {
  const doScoreFn = jest.fn();
  let wrapper = mount(<ScoreTable doScore={doScoreFn} 
                                  scores={scores}/>);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
