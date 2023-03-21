import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Getting Advisories from database
function* fetchAllAdvisories() {
  try {
    const response = yield axios.get('/api/safetyAd');
    yield put({
      type: 'SET_ADVISORIES',
      payload: response.data
    });
  } catch (error) {
    console.log('Advisory GET request failed', error);
  }
} // END getting Advisories from database


// Getting Advisory from database
function* getAdDetail(action) {
  try {
    const id = action.payload
    const response = yield axios.get(`/api/safetyAd`);
    yield put({
      type: 'SET_ADVISORY_DATA',
      payload: response.data
    });
  } catch (error) {
    console.log('Advisory saga GET request failed', error);
  }
}  // END getting Advisory from database



// Creating a new Advisory that saves in the database
function* createNewAdvisory(action) {
  try {
    const response = yield axios.post(`/api/safetyAd`, action.payload);
    yield put({
      type: 'CREATE_ADVISORY',
      payload: response.data
    });
  } catch (error) {
    console.log('Advisory POST request failed', error);
  }
} // END creating a new Advisory that saves in the database



// Editing individual Advisory in database
function* editAdvisory(action) {
  try {
    const id = action.payload.id;
    const response = yield axios.put(`/api/safetyAd/${id}`, action.payload);
    console.log('What is here in my editAdv payload', action.payload);
    yield put({
      type: 'EDIT_ADVISORY',
      payload: response.data
    });
  } catch (error) {
    console.log('Advisory PUT request failed', error);
  }
} // END editing individual job in database



// Deleting a Advisory from the database
function* deleteAdvisory(action) {
  try {
    const id = action.payload;
    const response = yield axios.delete(`/api/safetyAd/${id}`);
    yield put({
      type: 'DELETE_ADVISORY',
      payload: response.data
    });
  } catch (error) {
    console.log('Advisory DELETE request failed', error);
  }
} // END deleting a Advisory from the database



function* advisorySaga() {
  yield takeEvery('FETCH_ADVISORIES', fetchAllAdvisories);
  yield takeEvery('CREATE_NEW_ADVISORY', createNewAdvisory);
  yield takeEvery('EDIT_AN_ADVISORY', editAdvisory);
  yield takeEvery('DELETE_AN_ADVISORY', deleteAdvisory);
  yield takeEvery('GET_AD_DETAIL', getAdDetail);
}

export default advisorySaga;
