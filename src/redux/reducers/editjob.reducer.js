
const editJobReducer = (state = {}, action) => {
    switch (action.type) {
      case 'EDIT_JOB':
        return {...state, [action.payload.property]: action.payload.value};
      default:
        return state;
    }
  };

  // {...state, action};
  
  export default editJobReducer;