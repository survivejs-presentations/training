...

export default class App extends React.Component {
  constructor(props) {
    ...

    this.addNote = this.addNote.bind(this);
  }
  render() {
    const notes = this.state.notes;

    return (
      ...
    );
  }
  addNote() {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid(),
        task: 'New task'
      }])
    });
  }
}
