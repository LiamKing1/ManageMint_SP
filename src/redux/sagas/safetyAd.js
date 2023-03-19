import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Getting jobs from database
function* fetchAllAdvisories() {
  try {
    const response = yield axios.get('/api/safetyAd');
    yield put({
      type: 'SET_ADVISORIES',
      payload: response.data
    });
  } catch (error) {
    console.log('User get request failed', error);
  }
} // END getting jobs from database


//  Getting job from database
// function* getADetail(action) {
//   try {
//     const id = action.payload
//     const response = yield axios.get(`/api/safetyAd/${id}`);
//     yield put({
//       type: 'SET_JOB_DATA',
//       payload: response.data
//     });
//   } catch (error) {
//     console.log('User get request failed', error);
//   }
// }  END getting job from database



// Creating a new job that saves in the database
function* createNewAdvisory(action) {
  try {
    // const jobId = action.payload;
    const response = yield axios.post(`/api/safetyAd`, action.payload);
    yield put({
      type: 'CREATE_ADVISORY',
      payload: response.data
    });
  } catch (error) {
    console.log('User get request failed', error);
  }
} // END creating a new job that saves in the database



// Editing individual job in database
function* editAdvisory(action) {
  try {
    const id = action.payload.id;
    const response = yield axios.put(`/api/safetyAd/${id}`, action.payload);
    yield put({
      type: 'EDIT_ADVISORY',
      payload: response.data
    });
  } catch (error) {
    console.log('User PUT request failed', error);
  }
} // END editing individual job in database



// Deleting a job from the database
function* deleteAdvisory(action) {
  try {
    const id = action.payload;
    const response = yield axios.delete(`/api/safetyAd/${id}`);
    yield put({
      type: 'DELETE_ADVISORY',
      payload: response.data
    });
  } catch (error) {
    console.log('User DELETE request failed', error);
  }
} // END deleting a job from the database



function* advisorySaga() {
  yield takeEvery('FETCH_ADVISORIES', fetchAllAdvisories);
  yield takeEvery('CREATE_NEW_ADVISORY', createNewAdvisory);
  yield takeEvery('EDIT_AN_ADVISORY', editAdvisory);
  yield takeEvery('DELETE_AN_ADVISORY', deleteAdvisory);
  // yield takeEvery('GET_A_DETAIL', getADetail);
}

export default advisorySaga;
