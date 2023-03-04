const jobCreationReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_NEW_JOB':
      return action.payload;
    default:
      return state;
  }
};
``
export default jobCreationReducer;

// const jobNum = (state = 0, action) => {
//   switch (action.type) {
//     case 'JOB_NUMBER':
//       return action.payload;
//     default:
//       return state;
//   }
// }

// const jobType = (state = '', action) => {
//   switch (action.type) {
//     case 'JOB_TYPE':
//       return action.payload;
//     default:
//       return state;
//   }
// }

// const startDate = (state = '', action) => {
//   switch (action.type) {
//     case 'START_DATE':
//       return action.payload;
//     default:
//       return state;
//   }
// }

// const startTime = (state = '', action) => {
//   switch (action.type) {
//     case 'START_TIME':
//       return action.payload;
//     default:
//       return state;
//   }
// }

// const duration = (state = 0, action) => {
//   switch (action.type) {
//     case 'DURATION':
//       return action.payload;
//     default:
//       return state;
//   }
// }

// const contactName = (state = '', action) => {
//   switch (action.type) {
//     case 'CON_NAME':
//       return action.payload;
//     default:
//       return state;
//   }
// }

// const contactNum = (state = 0, action) => {
//   switch (action.type) {
//     case 'CON_NUM':
//       return action.payload;
//     default:
//       return state;
//   }
// }

// const laborer = (state = '', action) => {
//   switch (action.type) {
//     case 'LAB_NAME':
//       return action.payload;
//     default:
//       return state;
//   }
// }

// const supervisor = (state = '', action) => {
//   switch (action.type) {
//     case 'SUP_NAME':
//       return action.payload;
//     default:
//       return state;
//   }
// }

// const notes = (state = '', action) => {
//   switch (action.type) {
//     case 'JOB_NOTES':
//       return action.payload;
//     default:
//       return state;
//   }
// }

// switch (action.type) {
//   case 'SET_NEW_JOB':
//     return action.payload;
//   case 'JOB_NAME':
//     return action.payload;
//   case 'JOB_NUMBER':
//     return action.payload;
//   case 'JOB_TYPE':
//     return action.payload;
//   case 'START_DATE':
//     return action.payload;
//   case 'START_TIME':
//     return action.payload;
//   case 'DURATION':
//     return action.payload;
//   case 'CON_NAME':
//     return action.payload;
//   case 'CON_NUM':
//     return action.payload;
//   case 'LAB_NAME':
//     return action.payload;
//   case 'SUP_NAME':
//     return action.payload;
//   case 'JOB_NOTES':
//     return action.payload;
//   default:
//     return state;
// }