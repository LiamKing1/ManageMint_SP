
const initialState = {
    jobs: [],
};

const editJobReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'EDIT_JOB':
        return {...state, jobs: action.payload};
      default:
        return state;
    }
  };
  
  export default editJobReducer;