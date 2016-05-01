import {observable, autorun} from 'mobx';

var notes = observable([]);

autorun(() => console.log(notes));

notes.push({text: 'demo'});

// []
// [{text: 'demo'}]
