
const editJobReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_JOB':
      return action.payload;
    default:
      return state;
  }
};

export default editJobReducer;