//maybe renamed if the app was bigger. Organize it into bigger functions intergration test.

import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
//moxies makes fake requests. No network request is actually being called.
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
   //tells moxios to intercept any axios call issued
   moxios.install();
   moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [{ name: 'Fetched 1'}, { name: 'Fetched 2'}]
   });
});

afterEach(() => {
   moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
   // Attempt to render the entire app
   const wrapper = mount(<Root><App /></Root>);
   // Find the 'fetchComments' button and click it
   wrapper.find('.fetch-comments').simulate('click');
   // Introduce a tiny little pause
   // setTimeout(() => {
      moxios.wait(() => { 
         wrapper.update();
         // Expect to find a list of comments 
         expect(wrapper.find('li').length).toEqual(2);
         done(); //this is the signal to say there is nothing else to test
         wrapper.unmount(); 
      });
   // }, 100);
});