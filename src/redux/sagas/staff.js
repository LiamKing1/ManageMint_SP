import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Getting jobs from database
function* accessLvlDetails() {
  try {
    const response = yield axios.get('/api/accesslvl');
    yield put({ type: 'ACCESS_LVL', payload: response.data });
  } catch (error) {
    console.log('Access LVL get request failed', error);
  }
} //   Still need to create a reducer for this


function* laborerSelect() {
  try {
    const response = yield axios.get('/api/accesslvl');
    yield put({
      type: 'lABORING_STAFF',
      payload: response.data
    });
  } catch (error) {
    console.log('Access LVL get request failed', error);
  }
}

function* staffSaga() {
  yield takeEvery('CHECK_ACCESS_LVL', accessLvlDetails);
  yield takeEvery('CHECK_ACCESS_LVL', laborerSelect);

}

export default staffSaga;