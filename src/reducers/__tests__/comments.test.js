import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    //pass in fake action
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };
    const newState = commentsReducer([], action);
    expect(newState).toEqual(['New Comment']);
});

//this test is not the most useful...optional)
it('handles action with unknown type', () => {
    const newState = commentsReducer([], {});
    expect(newState).toEqual([]);
})
