import React from 'react';
import {
  createRenderer
} from 'react-addons-test-utils';
import assert from 'assert';
import CatsSeen from '../app/CatsSeen.jsx';

describe('CatsSeen', () => {
  it('renders children', () => {
    const test = 5;
    const renderer = createRenderer();

    renderer.render(
      <CatsSeen>{test}</CatsSeen>
    );

    const result = renderer.getRenderOutput();

    assert.equal(result.props.children, test);
  });
});
