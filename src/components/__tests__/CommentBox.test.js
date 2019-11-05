//We're only using full DOM render option here for practice purposes
//Would prob use shall render
import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapper;

//what happens before each test case
beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

//clean up code
afterEach(() => {
  wrapper.unmount();
});

it('has a text area and a button', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    //we're simulating the actual event (change) by itself, not (onChange), that's why we used 'change'
    //you can imagine the 2nd argument obj in simulate replaces the event obj in the function (e).
    //Why do we need to force our component to update?
    //- When we call setState, it triggers our component to rerender async (in the future), not instant re-render
    wrapper.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    //forces a rerender
    wrapper.update();
  });
  it('has a text area that users can type in', () => {
    //expectation
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
  });

  it('has a text area that should be emptied when the form is submitted', () => {
    //simulate a submit event (form)
    wrapper.find('form').simulate('submit');
    //forces a rerender
    wrapper.update();
    //expectation
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});
