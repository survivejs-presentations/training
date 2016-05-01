import React from 'react';
import {observer} from 'mobx-react';

@observer
class Note extends React.Component {
  ...
}

export default Note;
//export default observer(Note);

// Alternative for stateless functions
const Note = observer(
  ({task, ...props}) => <div {...props}>{task}</div>
);
