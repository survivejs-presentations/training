import React from 'react';
import {connect} from 'react-redux';
import {editNote} from '../actions/notes';

export default connect({
  notes: state.notes
}), {
  editNote
})(Notes);

// Stateless functions
const Note = connect({
  notes: state.notes
}), {
  editNote
})(
  ({task, ...props}) => <div {...props}>{task}</div>
);
