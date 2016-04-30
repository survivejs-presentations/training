import React from 'react';

export default React.createClass({
  displayName: 'Note',
  render() {
    const {task, ...props} = this.props;

    return (
      <div {...props}>
        {task}
      </div>
    );
  }
});
