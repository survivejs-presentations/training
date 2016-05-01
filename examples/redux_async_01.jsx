import {createStore, applyMiddleware} from 'redux';
import fetch from 'isomorphic-fetch';
import thunk from 'redux-thunk';

const RESOURCE_URL = '...';

// Action types
const noteTypes = {
  'FETCH_NOTES_REQUEST': 'FETCH_NOTES_REQUEST',
  'FETCH_NOTES_SUCCESS': 'FETCH_NOTES_SUCCESS',
  'FETCH_NOTES_FAILURE': 'FETCH_NOTES_FAILURE'
};

// Reducer
function noteReducer(state, action) {
  switch (action.type) {
    case noteTypes.FETCH_NOTES_SUCCESS:
      return action.notes;

    default:
      return state;
  }
}
