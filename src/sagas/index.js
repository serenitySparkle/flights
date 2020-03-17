import { call, all, put, takeLatest } from 'redux-saga/effects'
import {
  ALL_FLIGHTS_REQUEST, 
  ALL_FLIGHTS_SUCCESS, 
  ALL_FLIGHTS_FAILURE, 
} from '../actions'

import Api from '../api/index'

function* allFlightsRequest(action) {
  try {
       const data = yield call(Api.fetchAllFlights, action.data);
       yield put({type: ALL_FLIGHTS_SUCCESS, data: data});
    } catch (e) {
       yield put({type: ALL_FLIGHTS_FAILURE, message: e.message});
    }
}

function* allFlightsRequestWatcher() {
  yield takeLatest(ALL_FLIGHTS_REQUEST, allFlightsRequest)
}

export default function* appSaga() {
  yield all([
    allFlightsRequestWatcher()
  ]);
}