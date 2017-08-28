import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import querystring from 'querystring';

// const baseURL = (typeof window != 'undefined') ? '' : process.env.IP + ':' + process.env.PORT;
const baseURL = (typeof window != 'undefined') ? '' : 'http://192.168.2.9:3090';

const createSaga = (name, callbackRequest, callbackReceive) => {
  return [
    name + '_REQUESTED',
    function* (action) {
      try {
        const data = callbackReceive(yield callbackRequest(action));
        yield put({type: name + '_SUCCEEDED', ...data });
      } catch (e) {
        yield put({type: name + '_FAILED', message: e.message});
      }
    }
  ]
};


function* mySaga() {
  yield [
  ];
}

export default mySaga;
