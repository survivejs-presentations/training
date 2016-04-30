import React from 'react';

export default class Note extends React.Component {
  render() {
    const {task, ...props} = this.props;

    return (
      <div {...props}>
        {task}
      </div>
    );
  }
}
