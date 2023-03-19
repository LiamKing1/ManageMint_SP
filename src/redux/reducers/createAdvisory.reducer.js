
const advisoryCreationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_ADVISORY':
      return action.payload;
    default:
      return state;
  }
};

export default advisoryCreationReducer;