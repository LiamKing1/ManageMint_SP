const editJobReducer = (state = [], action) => {
    switch (action.type) {
      case 'EDIT_JOB':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default editJobReducer;