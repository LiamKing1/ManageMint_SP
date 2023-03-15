import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Getting jobs from database
function* accessLvlDetails() {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
      const response = yield axios.get('/api/accesslvl', config);
      yield put({ type: 'ACCESS_LVL', payload: response.data });
    } catch (error) {
      console.log('Access LVL get request failed', error);
    }
  }
//   Still need to create a reducer for this

  function* accessSaga() {
    yield takeEvery('CHECK_ACCESS_LVL', accessLvlDetails);
  }
  
  export default accessSaga;