import React from 'react';
import {
  renderIntoDocument
} from 'react-addons-test-utils';
import assert from 'assert';
import CatsSeen from '../app/CatsSeen.jsx';

describe('CatsSeen', () => {
  it('renders children', () => {
    const test = 5;
    const result = renderIntoDocument(
      <CatsSeen>5</CatsSeen>
    );

    assert.equal(result.props.children, test);
  });
});
