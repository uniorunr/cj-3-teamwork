import React from 'react';
import renderer from 'react-test-renderer';
import DeveloperItem from './DeveloperItem';

it('renders correctly', () => {
  const tree = renderer
    .create(<DeveloperItem />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
