import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Getting jobs from database
function* fetchAllJobs() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/viewjobs', config);

    yield put({
        type: 'SET_JOB_VIEWS',
        payload: response.data
      });
  } catch (error) {
    console.log('User get request failed', error);
  }
} // END getting jobs from database

// Creating a new job that saves in the database
function* createNewJob(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const jobId = action.payload;
    const response = yield axios.get(`/api/user/createjob/${jobId}`, config);

    yield put({ 
      type: 'CREATE_JOB',
      payload: response.data 
    });
  } catch (error) {
    console.log('User get request failed', error);
  }
} // END creating a new job that saves in the database

// Editing individual job in database
function* editJob() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const jobId = action.payload.id;
    const response = yield axios.get(`/api/user/${jobId}`, config);

    yield put({ 
      type: 'EDIT_JOB',
      payload: response.data 
    });
  } catch (error) {
    console.log('User get request failed', error);
  }
} // END editing individual job in database

// Deleting a job from the database
function* deleteJob() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/user/viewjobs', config);

    yield put({ 
      type: 'DELETE_JOB',
      payload: response.data 
    });
  } catch (error) {
    console.log('User get request failed', error);
  }
} // END deleting a job from the database

function* jobsSaga() {
  yield takeEvery('FETCH_JOB_VIEWS', fetchAllJobs);
  yield takeEvery('CREATE_NEW_JOB', createNewJob);
  yield takeEvery('EDIT_A_JOB', editJob);
  yield takeEvery('DELETE_A_JOB', deleteJob);
}

export default jobsSaga;
