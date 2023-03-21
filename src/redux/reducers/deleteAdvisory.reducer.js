
const deleteAdvisoryReducer = (state = {}, action) => {
  switch (action.type) {
    case 'DELETE_ADVISORY':
      return action.payload;
    default:
      return state;
  }
};

export default deleteAdvisoryReducer;