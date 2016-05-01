import {createStore} from 'redux';

// Action types
const noteTypes = {'CREATE_NOTE': 'CREATE_NOTE'};

// Reducer
function noteReducer(state=[], action) {
  ...
}

// Action creator
function createNote(text) {
  ...
}

const store = createStore(noteReducer);

store.subscribe(state => console.log(store.getState()));

store.dispatch(createNote('demo'));
