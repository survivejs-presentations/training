import React from 'react';
import {connect} from 'react-redux';
import {editNote} from '../actions/notes';

export default connect(({notes}) => {
  notes
}), {
  editNote
})(Notes);

// Stateless functions
const Note = connect(({notes}) => {
  notes
}), {
  editNote
})(
  ({task, ...props}) => <div {...props}>{task}</div>
);
