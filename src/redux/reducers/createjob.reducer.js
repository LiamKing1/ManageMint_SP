const jobCreationReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_NEW_JOB':
      return action.payload;
    default:
      return state;
  }
};

// switch (action.type) {
//   case 'SET_JOBNAME':
//     return action.payload;
//   case 'SET_JOBNUM':
//     return action.payload;
//   case 'SET_JOBTYPE':
//     return action.payload;
//   case 'SET_STRTDATE':
//     return action.payload;
//   case 'SET_STRTTIME':
//     return action.payload;
//   case 'SET_JOBDURATION':
//     return action.payload;
//   case 'SET_CONNAME':
//     return action.payload;
//   case 'SET_CONNUM':
//     return action.payload;
//   case 'SET_LABORER':
//     return action.payload;
//   case 'SET_SUPERVISOR':
//     return action.payload;
//   case 'SET_JOBNOTE':
//     return action.payload;
//   default:
//     return state;
// }

export default jobCreationReducer;
