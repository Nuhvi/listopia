import { postings } from './types';
import fetching from './utils/fetching';

export default (dispatch) => fetching({ dispatch, types: postings, path: 'postings' });
