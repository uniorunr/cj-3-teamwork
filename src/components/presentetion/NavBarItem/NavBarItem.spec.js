import React from 'react';
import renderer from 'react-test-renderer';
import NavBarItem from './NavBarItem';

it('renders correctly', () => {
  const tree = renderer
    .create(<NavBarItem id="home" active="active" onClick={() => {}} name="Home" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
