
const jobCreationReducer = (state = 0, action) => {
  switch (action.type) {
    case 'CREATE_JOB':
      return action.payload;
    default:
      return state;
  }
};
``
export default jobCreationReducer;