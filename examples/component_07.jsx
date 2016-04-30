import React from 'react';
import uuid from 'random-uuid';
import Note from './Note';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid(),
          task: 'Learn React'
        }
      ]
    };
  }
  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button onClick={this.addNote}>+</button>

        <ul>{notes.map(note =>
          <li><Note key={note.id} task={note.task} /></li>
        )}</ul>
      </div>
    );
  }
}