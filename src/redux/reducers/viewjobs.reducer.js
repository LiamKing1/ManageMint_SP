const viewJobsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_JOB_VIEWS':
      return action.payload;
    default:
      return state;
  }
};

export default viewJobsReducer;
