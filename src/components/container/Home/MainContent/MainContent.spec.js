import React from 'react';
import renderer from 'react-test-renderer';
import MainContent from './MainContent';

it('renders correctly', () => {
  const tree = renderer
    .create(<MainContent index={0} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
