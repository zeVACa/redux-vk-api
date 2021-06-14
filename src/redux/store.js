import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

export const store = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer);
