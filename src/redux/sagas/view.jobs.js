import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Getting jobs from database
function* fetchAllJobs() {
  try {
    const response = yield axios.get('/api/viewjobs');
    yield put({
      type: 'SET_JOB_VIEWS',
      payload: response.data
    });
  } catch (error) {
    console.log('User get request failed', error);
  }
} // END getting jobs from database



function* getADetail(action) {
  try {
    const id = action.payload
    const response = yield axios.get(`/api/viewjobs/${id}`);
    yield put({
      type: 'SET_JOB_DATA',
      payload: response.data
    });
  } catch (error) {
    console.log('User get request failed', error);
  }
} // END getting jobs from database



// Creating a new job that saves in the database
function* createNewJob(action) {
  try {
    // const jobId = action.payload;
    const response = yield axios.post(`/api/viewjobs`, action.payload);
    yield put({
      type: 'CREATE_JOB',
      payload: response.data
    });
  } catch (error) {
    console.log('User get request failed', error);
  }
} // END creating a new job that saves in the database



// Editing individual job in database
function* editJob(action) {
  try {
    console.log('CHecking my action payload from my axios request', action.payload);
    const id = action.payload.id;
    const response = yield axios.put(`/api/viewjobs/${id}`, action.payload);
    yield put({
      type: 'EDIT_JOB',
      payload: response.data
    });
  } catch (error) {
    console.log('User PUT request failed', error);
  }
} // END editing individual job in database



// Deleting a job from the database
function* deleteJob(action) {
  try {
    const id = action.payload;
    const response = yield axios.delete(`/api/viewjobs/${id}`);
    yield put({
      type: 'DELETE_JOB',
      payload: response.data
    });
  } catch (error) {
    console.log('User DELETE request failed', error);
  }
} // END deleting a job from the database



function* jobsSaga() {
  yield takeEvery('FETCH_JOB_VIEWS', fetchAllJobs);
  yield takeEvery('GET_A_DETAIL', getADetail);
  yield takeEvery('CREATE_NEW_JOB', createNewJob);
  yield takeEvery('EDIT_A_JOB', editJob);
  yield takeEvery('DELETE_A_JOB', deleteJob);
}

export default jobsSaga;
