import React from 'react';
import renderer from 'react-test-renderer';
import MainContent from './MainContent';

it('renders correctly', () => {
  const tree = renderer
    .create(<MainContent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
