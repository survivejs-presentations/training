import React from 'react';

class Note extends React.Component {
  // Property initializers (experimental, stage 1)
  static propTypes = {
    task: string,
    onClick?: Function
  };
  static defaultProps = {
    onClick: () => {}
  };
  render() {
    ...
  }
}

export default Note;
