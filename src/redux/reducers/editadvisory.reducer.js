
const editAdvisoryReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_ADVISORY':
      return action.payload;
    default:
      return state;
  }
};

export default editAdvisoryReducer;