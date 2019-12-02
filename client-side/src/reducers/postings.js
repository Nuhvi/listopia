import { postings } from '../actions/types';
import { postings as initialState } from '../store/initial-states';
import postingListReducers from './mixins/posting-list-reducer';

export default postingListReducers({ initialState, types: postings });
