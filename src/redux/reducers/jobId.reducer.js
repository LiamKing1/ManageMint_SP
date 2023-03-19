const idReducer = (state = " ", action) => {
  switch (action.type) {
    case 'SET_JOB_ID':
      return action.payload;
    default:
      return state;
  }
};

export default idReducer;