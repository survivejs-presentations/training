import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import mySaga from './sagas';

// Connect saga middleware with Redux
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// Connect saga with middleware
sagaMiddleware.run(notesSaga);

...

// Dispatch somewhere
store.dispatch(fetchNotes()).then(() => console.log('done'));
