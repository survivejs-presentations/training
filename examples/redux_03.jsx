import React from 'react';
import {connect} from 'react-redux';
import {editNote} from '../actions/notes';

@connect(state => ({
  notes: state.notes
}), {
  editNote
})
class Notes extends React.Component {
  ... // props.notes, props.editNote
}

export default Notes;
