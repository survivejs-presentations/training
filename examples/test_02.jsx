import React from 'react';
import {
  createRenderer
} from 'react-addons-test-utils';
import assert from 'assert';
import Note from '../app/components/Note.jsx';

describe('Note', () => {
  it('renders children', () => {
    const test = 'test';
    const renderer = createRenderer();

    renderer.render(
      <Note>{test}</Note>
    );

    const result = renderer.getRenderOutput();

    assert.equal(result.props.children, test);
  });
});
