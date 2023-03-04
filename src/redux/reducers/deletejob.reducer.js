const deleteJobReducer = (state = [], action) => {
    switch (action.type) {
      case 'DELETE_JOB':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default deleteJobReducer;