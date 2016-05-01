...

export default class App extends React.Component {
  constructor(props) {
    ...
  }
  render() {
    return (
      <div>
        <input type="text" ref="task" />
        <button onClick={this.addNote}>+</button>

        ...
      </div>
    );
  }
  addNote() {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid(),
        task: this.refs.task
      }])
    });
  }
}
