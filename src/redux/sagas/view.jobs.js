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



// Creating a new job that saves in the database
function* createNewJob() {
  try {
    // const jobId = action.payload;
    const response = yield axios.post(`/api/createjob`);
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
    const editById = action.payload.id;
    const response = yield axios.put(`/api/viewjobs/${editById}`);
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
    const deleteById = action.payload.id;
    const response = yield axios.delete(`/api/viewjobs/${deleteById}`);
    yield put({
      type: 'FETCH_JOB_VIEWS',
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
