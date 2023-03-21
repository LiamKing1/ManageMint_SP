// 
const viewSafetyAd = (state = [], action) => {
  switch (action.type) {
    case 'SET_ADVISORIES':
      return action.payload;
    case 'SET_ADVISORY_DATA':
      return action.payload;
    default:
      return state;
  }
};

export default viewSafetyAd;
