import { favorites } from '../actions/types';
import { favorites as initialState } from '../store/initial-states';
import postingListReducers from './mixins/posting-list-reducer';

export default postingListReducers({ initialState, types: favorites });