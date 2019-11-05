import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

//grouping the tests together is a wise strategy
describe('saveComment', () => {
    it('has the correct type', () => {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });
    it('has the correct payload', () => {
        const action = saveComment('New Comment');
        expect(action.payload).toEqual('New Comment');
    });
});
