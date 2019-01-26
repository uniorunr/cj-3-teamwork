import React from 'react';
import renderer from 'react-test-renderer';
import DeveloperItem from './DeveloperItem';

it('renders correctly', () => {
  const tree = renderer
    .create(<DeveloperItem img="img" name="dev" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
