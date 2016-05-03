import React from 'react';
import {
  renderIntoDocument
} from 'react-addons-test-utils';
import assert from 'assert';
import Note from '../app/components/Note.jsx';

describe('Note', () => {
  it('renders children', () => {
    const test = 'test';
    const result = renderIntoDocument(
      <Note>{test}</Note>
    );

    assert.equal(result.props.children, test);
  });
});
