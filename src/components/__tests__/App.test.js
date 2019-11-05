import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'; //child react* components won't be rendered
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapper;

//this will run before each test is run
//this beforeEach function will only be used for tests in this file
beforeEach(() => {
    wrapper = shallow(<App />); //wrapper means this component has some additional functionality layered on top
});

//it shows a comment box.
it('shows a comment box', () => {
    //Stephen usually names this 'component' but since the doc is using wrapped, we can stick with it for now
    expect(wrapper.find(CommentBox).length).toEqual(1); //returns an array, shows all instances that were found.
});

//it shows a comment list.
it('shows a comment list', () => {
    expect(wrapper.find(CommentList).length).toEqual(1);
});

//code before lesson 22:
    // //this element exists solely in memory.
    // const div = document.createElement('div');

    // ReactDOM.render(<App />, div); 
    // //looks inside the div and checks to see if the CommentBox is in there
    // //not the best line of code to write (below)
    // //expect(div.innerHTML).toContain('Comment Box');
    // //Better line of code (below)

    // console.log(div.innerHTML);
    // //this function looks at the div, find the app component that's rendered into it and remove that app component
    // //clean up, helps performance of tests
    // ReactDOM.unmountComponentAtNode(div);
