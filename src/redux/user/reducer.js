import { CHANGE_USER_NAME } from './actions';

const initialState = {
  name: 'test-userrrrrrrrr',
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_USER_NAME:
      return { ...state, name: payload };

    default:
      return state;
  }
};
