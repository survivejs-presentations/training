// Action types
const noteTypes = {'CREATE_NOTE': 'CREATE_NOTE'};

// Reducer
function noteReducer(state, action) {
  switch (action.type) {
    case noteTypes.CREATE_NOTE:
      return [...state, action.note];

    default:
      return state;
  }
}

// Action creator
function createNote(text) {
  return {
    type: noteTypes.CREATE_NOTE,
    note: {text}
  };
}

const store = noteReducer([], {});
console.log(store); // []
console.log(noteReducer(store, createNote('demo'))); // [{text: 'demo'}]
