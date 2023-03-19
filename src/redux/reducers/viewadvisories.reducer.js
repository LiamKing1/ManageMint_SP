// 
const viewSafetyAd = (state = [], action) => {
  switch (action.type) {
    case 'SET_ADVISORIES':
      return action.payload;
    default:
      return state;
  }
};

export default viewSafetyAd;
