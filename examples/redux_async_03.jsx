import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

// Action creator
function* fetchNotes(action) {
   try {
      const notes = yield call(Api.fetchNotes);

      yield put({ type: noteTypes.FETCH_NOTES_SUCCESS, notes });
   } catch (eror) {
      yield put({type: noteTypes.FETCH_NOTES_FAILURE, error });
   }
}

// Saga, allows concurrent queries with takeEvery
function* notesSaga() {
  yield* takeEvery(noteTypes.FETCH_NOTES_REQUEST, fetchNotes);
}
