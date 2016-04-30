import React from 'react';

class Note extends React.Component {
  render() {
    ...
  }
}
Note.propTypes = {
  task: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func
};
Note.defaultProps = {
  onClick: () => {}
};

export default Note;
