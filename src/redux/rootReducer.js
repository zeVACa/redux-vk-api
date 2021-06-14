import { combineReducers } from 'redux';

import { userReducer } from './user/reducer';
import { photosReducer } from './photos/reducer';

export const rootReducer = combineReducers({ user: userReducer, photos: photosReducer });
