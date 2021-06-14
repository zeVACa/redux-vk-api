const initialState = {
  photos: [],
};

export const photosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'typeName':
      return { ...state, ...payload };

    default:
      return state;
  }
};
