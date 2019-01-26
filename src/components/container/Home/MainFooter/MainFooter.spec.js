import React from 'react';
import renderer from 'react-test-renderer';
import MainFooter from './MainFooter';

it('renders correctly', () => {
  const tree = renderer
    .create(<MainFooter />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
