
const deleteJobReducer = (state = {}, action) => {
    switch (action.type) {
      case 'DELETE_JOB':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default deleteJobReducer;