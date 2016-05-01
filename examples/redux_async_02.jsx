// Action creator
function fetchNotes() {
  return (dispatch, getState) => {
    dispatch({ type: noteTypes.FETCH_NOTES_REQUEST });

    return fetch(RESOURCE_URL).then(res => {
      if(res.ok) {
        return res.json();
      }

      throw(res.statusText);
    }).then(body => {
      dispatch({ type: noteTypes.FETCH_NOTES_SUCCESS, notes: body });
    }).catch(error => {
      dispatch({ type: noteTypes.FETCH_NOTES_FAILURE, error });
    });
  };
}

const store = createStore(noteReducer, [], applyMiddleware(thunk));

store.subscribe(state => console.log(JSON.stringify(store.getState())));

store.dispatch(fetchNotes()).then(() => console.log('done'));
