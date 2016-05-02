import ReactDOM from 'react-dom';
import React from 'react';
import {Link, Router, Route, browserHistory} from 'react-router';

...

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="kanban" component={Kanbans}>
        <Route path="/:kanbanId" component={Kanban} />
      </Route>
      <Route path="about" component={About} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>,
  document.getElementById('app')
);

...

<Link to="/about">About</Link>
