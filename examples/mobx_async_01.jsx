import fetch from 'isomorphic-fetch';
import {observable, autorun} from 'mobx';

const RESOURCE_URL = '...';

var app = observable({ isLoading: false, notes: [] });

autorun(() => console.log(app));

fetchNotes();

function fetchNotes() {
  app.isLoading = true;

  return fetch(RESOURCE_URL).then(res => {
    if(res.ok) {
      return res.json();
    }

    throw(res.statusText);
  }).then(body => {
    app.isLoading = false;
    app.notes = body;
  }).catch(error => {
    app.isLoading = false;
  });
}
