import React from 'react';

class Note extends React.Component {
  // Property initializers (experimental, stage 1)
  static propTypes = {
    task: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func
  };
  static defaultProps = {
    onClick: () => {}
  };
  render() {
    ...
  }
}

export default Note;
