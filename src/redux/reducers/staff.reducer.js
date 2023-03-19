const laborerReducer = (state = [], action) => {
  switch (action.type) {
    case 'lABORING_STAFF':
      return action.payload;
    default:
      return state;
  }
};

export default laborerReducer;